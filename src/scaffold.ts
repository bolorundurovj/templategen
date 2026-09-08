import { input, select, Separator, confirm } from '@inquirer/prompts';
import {
  ARCHITECTURE_PATTERNS,
  BACKEND_FRAMEWORKS,
  DATABASES,
  FRONTEND_FRAMEWORKS,
  PROGRAMMING_LANGUAGES,
} from './choices.js';
import { requiresArchitecturePattern, requiresDatabase } from './validators.js';
import path, { dirname, join } from 'path';
import fs from 'fs';
import shell from 'shelljs';
import { logger } from './logger.js';
import { fileURLToPath } from 'url';
import {
  CliOptions,
  findCsProj,
  findJsDir,
  findPyDir,
  isCSharp,
  isJavaScript,
  isPython,
} from './utils.js';
import * as self from './scaffold.js';
import { renderTemplate } from './templating.js';

const CURR_DIR = process.cwd();

const getTemplatesDir = (): string => {
  if (typeof __dirname !== 'undefined') {
    return path.resolve(__dirname, '../templates');
  }
  try {
    const importMetaUrl = new Function('return import.meta.url')();
    return path.resolve(dirname(fileURLToPath(importMetaUrl)), '../templates');
  } catch {
    return path.resolve(process.cwd(), 'templates');
  }
};

/**
 * Runs the scaffolding process for creating a new project.
 * @param {any} argv - The command line arguments if any.
 */
export const run = async (argv: any) => {
  const projectType: string =
    argv.projectType ||
    (await select({
      message: 'What type of project are you scaffolding?',
      choices: [
        {
          name: 'Frontend',
          value: 'frontend',
          description: 'A frontend only project',
        },
        {
          name: 'Backend',
          value: 'backend',
          description: 'A backend only project',
        },
        {
          name: 'Fullstack',
          value: 'fullstack',
          description: 'A fullstack project',
        },
        new Separator(),
        {
          name: 'Desktop',
          value: 'desktop',
          description: 'A desktop application',
          disabled: true,
        },
        {
          name: 'Mobile',
          value: 'mobile',
          description: 'A mobile application',
          disabled: true,
        },
      ],
    }));

  if (!projectType) {
    logger.error('Please provide a project type');
    return;
  }

  const language: string =
    argv.language ||
    (await select({
      message: 'Which programming language would you like to use?',
      choices: PROGRAMMING_LANGUAGES[projectType],
    }));

  if (!language) {
    logger.error('Please provide the programming language(s)');
    return;
  }

  let framework: string = argv.framework || '';
  if (framework === '') {
    if (projectType === 'frontend') {
      framework = await select({
        message: 'Select the frontend framework:',
        choices: FRONTEND_FRAMEWORKS[language],
      });
    } else if (projectType === 'backend') {
      framework = await select({
        message: 'Select the backend framework:',
        choices: BACKEND_FRAMEWORKS[language],
      });
    } else if (projectType === 'fullstack') {
      const [feLang, beLang] = language.split('-');
      const frontendFramework = await select({
        message: 'Select the frontend framework:',
        choices: FRONTEND_FRAMEWORKS[feLang],
      });
      const backendFramework = await select({
        message: 'Select the backend framework:',
        choices: BACKEND_FRAMEWORKS[beLang],
      });
      framework = `${frontendFramework}-${backendFramework}`;
    }
  }

  if (!framework || framework === '') {
    logger.error('Please provide the framework(s)');
    return;
  }

  let architecturePattern: string = argv.architecturePattern || '';
  if (requiresArchitecturePattern(projectType) && architecturePattern === '') {
    architecturePattern = await select({
      message: 'Select the architectural pattern:',
      choices: ARCHITECTURE_PATTERNS,
    });
  }

  if (
    requiresArchitecturePattern(projectType) &&
    (!architecturePattern || architecturePattern === '')
  ) {
    logger.error('Please provide the architecture pattern');
    return;
  }

  let database: string = argv.database || '';
  if (requiresDatabase(projectType) && database === '') {
    database = await select({
      message: 'Select the database:',
      choices: DATABASES,
    });
  }

  if (requiresDatabase(projectType) && (!database || database === '')) {
    logger.error('Please provide the database');
    return;
  }

  let shadcn = false;
  if (projectType === 'frontend' || projectType === 'fullstack') {
    if (framework.includes('react') || framework.includes('nextjs')) {
      shadcn =
        argv.shadcn !== undefined
          ? Boolean(argv.shadcn)
          : await confirm({
              message: 'Would you like to initialize shadcn/ui for components?',
              default: true,
            });
    }
  }

  logger.info(`${'= '.repeat(20)} Selected Options ${'= '.repeat(20)}`);
  logger.info(`Project Type: ${projectType}`);
  logger.info(`Language: ${language}`);
  logger.info(`Framework: ${framework}`);
  if (requiresArchitecturePattern(projectType)) {
    logger.info(`Architecture Pattern: ${architecturePattern}`);
  }
  if (requiresDatabase(projectType)) {
    logger.info(`Database: ${database}`);
  }
  logger.info(`${'= '.repeat(50)}`);

  const projectName: string =
    argv.projectName ||
    (await input({ message: 'What do you want to name your project?' }));
  const targetPath = path.join(CURR_DIR, projectName);

  if (fs.existsSync(targetPath)) {
    logger.error(`Folder ${targetPath} exists. Delete or use another name.`);
    return;
  }

  if (projectType === 'fullstack') {
    const [feLang, beLang] = language.split('-');
    const [feFramework, beFramework] = framework.split('-');

    const feTemplateKey = `frontend-${feLang}-${feFramework}`;
    const beTemplateKey = `backend-${beLang}-${beFramework}`;

    const feSourceTemplatePath = join(getTemplatesDir(), feTemplateKey);
    const beSourceTemplatePath = join(getTemplatesDir(), beTemplateKey);

    if (!fs.existsSync(feSourceTemplatePath)) {
      logger.error(
        `Frontend template ${feTemplateKey} does not exist locally.`,
      );
      return;
    }
    if (!fs.existsSync(beSourceTemplatePath)) {
      logger.error(`Backend template ${beTemplateKey} does not exist locally.`);
      return;
    }

    logger.info(
      `Scaffolding fullstack Nx monorepo with ${feTemplateKey} and ${beTemplateKey}...`,
    );

    const clientTargetPath = path.join(targetPath, 'apps', 'client');
    const serverTargetPath = path.join(targetPath, 'apps', 'server');

    const feRenderOptions = {
      projectName: `${projectName}-client`,
      templateName: feTemplateKey,
      templatePath: feSourceTemplatePath,
      targetPath: clientTargetPath,
      isFullstack: true,
      language: feLang,
      shadcn,
    };

    const beRenderOptions = {
      projectName: `${projectName}-server`,
      templateName: beTemplateKey,
      templatePath: beSourceTemplatePath,
      targetPath: serverTargetPath,
      isFullstack: true,
      language: beLang,
      architecturePattern,
      database,
    };

    try {
      await renderTemplate(
        feSourceTemplatePath,
        clientTargetPath,
        feRenderOptions as any,
      );

      await renderTemplate(
        beSourceTemplatePath,
        serverTargetPath,
        beRenderOptions as any,
      );

      const nxJson = {
        $schema: './node_modules/nx/schemas/nx-schema.json',
        targetDefaults: {
          build: {
            dependsOn: ['^build'],
            cache: true,
          },
          test: {
            cache: true,
          },
          lint: {
            cache: true,
          },
          dev: {
            continuous: true,
          },
        },
      };
      fs.writeFileSync(
        path.join(targetPath, 'nx.json'),
        JSON.stringify(nxJson, null, 2),
      );

      const rootPackageJson = {
        name: projectName,
        version: '1.0.0',
        private: true,
        workspaces: ['apps/*'],
        scripts: {
          dev: 'nx run-many -t dev',
          build: 'nx run-many -t build',
          test: 'nx run-many -t test',
          lint: 'nx run-many -t lint',
          graph: 'nx graph',
        },
        devDependencies: {
          nx: '^19.0.0',
        },
      };
      fs.writeFileSync(
        path.join(targetPath, 'package.json'),
        JSON.stringify(rootPackageJson, null, 2),
      );

      if (beLang === 'python') {
        let runCmd = 'poetry run python main.py';
        if (beFramework === 'fastapi')
          runCmd = 'poetry run uvicorn main:app --reload';
        else if (beFramework === 'django')
          runCmd = 'poetry run python manage.py runserver';
        else if (beFramework === 'flask') runCmd = 'poetry run python app.py';
        else if (beFramework === 'sanic') runCmd = 'poetry run python main.py';
        else if (beFramework === 'tornado')
          runCmd = 'poetry run python main.py';

        const projectJson = {
          name: 'server',
          targets: {
            dev: {
              executor: 'nx:run-commands',
              options: {
                command: runCmd,
                cwd: 'apps/server',
              },
            },
            test: {
              executor: 'nx:run-commands',
              options: {
                command: 'poetry run pytest',
                cwd: 'apps/server',
              },
            },
          },
        };
        fs.writeFileSync(
          path.join(serverTargetPath, 'project.json'),
          JSON.stringify(projectJson, null, 2),
        );
      } else if (beLang === 'csharp') {
        const projectJson = {
          name: 'server',
          targets: {
            dev: {
              executor: 'nx:run-commands',
              options: {
                command: 'dotnet run',
                cwd: 'apps/server',
              },
            },
            test: {
              executor: 'nx:run-commands',
              options: {
                command: 'dotnet test',
                cwd: 'apps/server',
              },
            },
          },
        };
        fs.writeFileSync(
          path.join(serverTargetPath, 'project.json'),
          JSON.stringify(projectJson, null, 2),
        );
      }

      const testsDir = path.join(targetPath, 'tests');
      if (!fs.existsSync(testsDir)) {
        fs.mkdirSync(testsDir, { recursive: true });
      }
      const fullstackTestContent = `const fs = require('fs');
const path = require('path');

describe('Fullstack Nx Workspace', () => {
  it('verifies client application and its tests directory exist', () => {
    expect(fs.existsSync(path.join(__dirname, '../apps/client'))).toBe(true);
    expect(fs.existsSync(path.join(__dirname, '../apps/client/tests'))).toBe(true);
  });

  it('verifies server application and its tests directory exist', () => {
    expect(fs.existsSync(path.join(__dirname, '../apps/server'))).toBe(true);
    const hasServerTests =
      fs.existsSync(path.join(__dirname, '../apps/server/tests')) ||
      fs.existsSync(path.join(__dirname, '../apps/server/Tests'));
    expect(hasServerTests).toBe(true);
  });

  it('verifies root Nx monorepo configuration exists', () => {
    expect(fs.existsSync(path.join(__dirname, '../nx.json'))).toBe(true);
    expect(fs.existsSync(path.join(__dirname, '../package.json'))).toBe(true);
  });
});
`;
      fs.writeFileSync(
        path.join(testsDir, 'fullstack.test.js'),
        fullstackTestContent,
      );

      const readmeContent = `# ${projectName} (Nx Monorepo)

This fullstack application was scaffolded with **TemplateGen** using **Nx**.

## Workspace Architecture
- **Frontend**: \`apps/client\` (${feFramework} - ${feLang}) with tests in \`apps/client/tests/\`
- **Backend**: \`apps/server\` (${beFramework} - ${beLang}) with tests in \`apps/server/tests/\`
- **Workspace Tests**: \`tests/fullstack.test.js\`

## Available Commands
- \`npm run dev\`: Runs both frontend and backend concurrently via Nx (\`nx run-many -t dev\`)
- \`npm run test\`: Executes tests across all applications in parallel (\`nx run-many -t test\`)
- \`npm run build\`: Builds all projects for production (\`nx run-many -t build\`)
- \`npm run lint\`: Lints the entire workspace (\`nx run-many -t lint\`)
- \`npm run graph\`: Launches the visual Nx architecture dependency graph (\`nx graph\`)
`;
      fs.writeFileSync(path.join(targetPath, 'README.md'), readmeContent);

      const options: CliOptions = {
        projectName,
        templateName: `fullstack-${language}-${framework}`,
        templatePath: targetPath,
        targetPath,
        isFullstack: true,
        language,
      };

      const postProcessResult = self.postProcess(options);
      if (postProcessResult) {
        logger.success('Fullstack Nx monorepo ready!');
      }
    } catch (e) {
      logger.error(`Failed to scaffold fullstack project: ${e}`);
    }
    return;
  }

  const templateKey = `${projectType}-${language}-${framework}`;
  const sourceTemplatePath = join(getTemplatesDir(), templateKey);

  if (!fs.existsSync(sourceTemplatePath)) {
    logger.error(
      `Template ${templateKey} does not exist locally yet. You can help by adding it to templates/`,
    );
    return;
  }

  logger.info(`Generating project from template: ${templateKey}`);

  const options: CliOptions = {
    projectName,
    templateName: templateKey,
    templatePath: sourceTemplatePath,
    targetPath,
    isFullstack: false,
    language,
  };

  const renderOptions = {
    ...options,
    architecturePattern,
    database,
    shadcn,
  };

  try {
    await renderTemplate(sourceTemplatePath, targetPath, renderOptions as any);

    const postProcessResult = self.postProcess(options);
    if (postProcessResult) {
      logger.success('Project ready');
    }
  } catch (e) {
    logger.error(`Failed to scaffold project: ${e}`);
  }
};

/**
 * Runs post-processing steps after the project has been created.
 * @param {CliOptions} options - The CLI options.
 * @returns {boolean} - Returns true if the post-processing steps were successful, false otherwise.
 */
export function postProcess(options: CliOptions): boolean {
  logger.info('Running post process');

  if (options.isFullstack) {
    if (fs.existsSync(path.join(options.targetPath, 'package.json'))) {
      shell.cd(options.targetPath);
      logger.info('Installing root workspace dependencies');
      const rootRes = shell.exec('npm install');
      if (rootRes.code !== 0) {
        logger.error('Error installing root workspace dependencies');
      }
    }

    const clientPath = path.join(options.targetPath, 'apps', 'client');
    if (fs.existsSync(path.join(clientPath, 'package.json'))) {
      shell.cd(clientPath);
      logger.info('Installing frontend dependencies');
      shell.exec('npm install');
    }

    const serverPath = path.join(options.targetPath, 'apps', 'server');
    if (fs.existsSync(path.join(serverPath, 'package.json'))) {
      shell.cd(serverPath);
      logger.info('Installing backend dependencies');
      shell.exec('npm install');
    }

    if (isPython(options)) {
      const pyProj = findPyDir({ ...options, targetPath: serverPath });
      if (pyProj) {
        shell.cd(pyProj.path);
        logger.info('Installing Python backend dependencies');
        shell.exec(pyProj.command);
      }
    }

    if (isCSharp(options)) {
      const csProj = findCsProj({ ...options, targetPath: serverPath });
      if (csProj) {
        shell.cd(path.dirname(csProj));
        logger.info('Restoring C# backend packages');
        shell.exec('dotnet restore');
      }
    }

    return true;
  }

  if (isJavaScript(options)) {
    const jsDir = findJsDir(options);
    if (!jsDir) {
      logger.error('Could not find the JavaScript directory');
      return false;
    }
    shell.cd(jsDir);
    logger.info('Installing dependencies');
    const result = shell.exec('npm install');
    if (result.code !== 0) {
      logger.error('Error installing dependencies');
      return false;
    }
  }

  if (isCSharp(options)) {
    const csProj = findCsProj(options);
    if (!csProj) {
      logger.error('Could not find the .csproj file');
      return false;
    }
    shell.cd(csProj);
    logger.info('Restoring packages');
    const result = shell.exec('dotnet restore');
    if (result.code !== 0) {
      logger.error('Error restoring packages');
      return false;
    }
  }

  if (isPython(options)) {
    logger.info('Installing dependencies');
    const pyProj = findPyDir(options);
    if (!pyProj) {
      logger.error('Could not find the Python directory');
      return false;
    }
    shell.cd(pyProj.path);
    const result = shell.exec(pyProj.command);
    if (result.code !== 0) {
      logger.error('Error installing dependencies');
      return false;
    }
  }
  return true;
}
