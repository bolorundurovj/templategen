import { input, select, Separator } from '@inquirer/prompts';
import {
  ARCHITECTURE_PATTERNS,
  BACKEND_FRAMEWORKS,
  DATABASES,
  FRONTEND_FRAMEWORKS,
  PROGRAMMING_LANGUAGES,
} from './choices.js';
import { requiresArchitecturePattern, requiresDatabase } from './validators.js';
import path from 'path';
import fs from 'fs';
import shell from 'shelljs';
import { logger } from './logger.js';
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
import { REPOS } from './repos';

const CURR_DIR = process.cwd();

/**
 * Runs the scaffolding process for creating a new project.
 * @param {any} argv - The command line arguments if any.
 */
export const run = async (argv: any) => {
  // Get the project type
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

  // Get the programming language
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

  // Get the framework
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
      const frontendFramework = await select({
        message: 'Select the frontend framework:',
        choices: FRONTEND_FRAMEWORKS[language],
      });
      const backendFramework = await select({
        message: 'Select the backend framework:',
        choices: BACKEND_FRAMEWORKS[language],
      });
      framework = `${frontendFramework}-${backendFramework}`;
    }
  }

  if (!framework || framework === '') {
    logger.error('Please provide the framework(s)');
    return;
  }

  // Get the architecture pattern if required
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

  // Get the database if required
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

  // Log the selected options
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

  // Get the project name and target path
  const projectName: string =
    argv.projectName ||
    (await input({ message: 'What do you want to name your project?' }));
  const targetPath = path.join(CURR_DIR, projectName);

  // Construct the template key and get the template repository URL
  let templateKey = `${projectType}-${language}-${framework}`;
  if (database !== '') {
    templateKey = `${templateKey}-${database}`;
  }
  if (architecturePattern !== '') {
    templateKey = `${templateKey}-${architecturePattern}`;
  }

  const templateRepo = REPOS[templateKey];
  if (!templateRepo) {
    logger.error('Template not found');
    return;
  }
  logger.info(`Creating project from template: ${templateRepo}`);

  // Create the project from the template
  const result = self.createProject(projectName, templateRepo);

  const options: CliOptions = {
    projectName,
    templateName: templateKey,
    templatePath: templateRepo,
    targetPath,
    isFullstack: projectType === 'fullstack',
    language,
  };

  // Run post-processing steps if the project was created successfully
  if (result) {
    const postProcessResult = self.postProcess(options);
    if (postProcessResult) {
      logger.success('Project ready');
    }
  }
};

/**
 * Clones the template repository to the specified project path.
 * @param {string} projectPath - The path where the project will be created.
 * @param {string} gitRepo - The URL of the template repository.
 * @returns {boolean} - Returns true if the project was created successfully, false otherwise.
 */
export function createProject(projectPath: string, gitRepo: string): boolean {
  if (fs.existsSync(projectPath)) {
    logger.error(`Folder ${projectPath} exists. Delete or use another name.`);
    return false;
  }
  if (shell.exec(`git clone ${gitRepo} ${projectPath}`).code !== 0) {
    logger.error(`Error cloning repository ${gitRepo} into ${projectPath}`);
    return false;
  }
  return true;
}

/**
 * Runs post-processing steps after the project has been created.
 * @param {CliOptions} options - The CLI options.
 * @returns {boolean} - Returns true if the post-processing steps were successful, false otherwise.
 */
export function postProcess(options: CliOptions): boolean {
  logger.info('Running post process');

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
