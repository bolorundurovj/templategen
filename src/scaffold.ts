import {input, select, Separator} from "@inquirer/prompts";
import {BACKEND_FRAMEWORKS, FRONTEND_FRAMEWORKS, PROGRAMMING_LANGUAGES, REPOS} from "./choices";
import {requiresArchitecturePattern, requiresDatabase} from "./validators";
import path from "path";
import fs from "fs";
import * as shell from "shelljs";
import {logger} from "./logger";

export interface CliOptions {
    projectName: string;
    templateName: string;
    templatePath: string;
    targetPath: string;
}


const CURR_DIR = process.cwd();

export const run = async (argv: any) => {
    const projectType: string = argv.projectType || await select({
        message: 'What type of project are you scaffolding?',
        choices: [
            {
                name: 'Frontend',
                value: 'frontend',
                description: 'A frontend only project'
            },
            {
                name: 'Backend',
                value: 'backend',
                description: 'A backend only project'
            },
            {
                name: 'Fullstack',
                value: 'fullstack',
                description: 'A fullstack project'
            },
            new Separator(),
            {
                name: 'Desktop',
                value: 'desktop',
                description: 'A desktop application',
                disabled: true
            },
            {
                name: 'Mobile',
                value: 'mobile',
                description: 'A mobile application',
                disabled: true
            }
        ]
    });

    if (!projectType) {
        logger.error('Please provide a project type');
        return;
    }

    const language: string = argv.language || await select({
        message: 'Which programming language would you like to use?',
        choices: PROGRAMMING_LANGUAGES[projectType]
    });

    if (!language) {
        logger.error('Please provide the programming language(s)');
        return;
    }

    let framework: string = argv.framework || '';

    if (framework === '') {
        if (projectType === 'frontend') {
            framework = await select({
                message: 'Select the frontend framework:',
                choices: FRONTEND_FRAMEWORKS[language]
            });
        } else if (projectType === 'backend') {
            framework = await select({
                message: 'Select the backend framework:',
                choices: BACKEND_FRAMEWORKS[language]
            });
        } else if (projectType === 'fullstack') {
            const frontendFramework = await select({
                message: 'Select the frontend framework:',
                choices: FRONTEND_FRAMEWORKS[language]
            });
            const backendFramework = await select({
                message: 'Select the backend framework:',
                choices: BACKEND_FRAMEWORKS[language]
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
            choices: [
                {
                    name: 'Monolithic',
                    value: 'monolithic'
                },
                {
                    name: 'Microservices',
                    value: 'microservices'
                },
                {
                    name: 'CQRS',
                    value: 'cqrs'
                },
                {
                    name: 'MVC',
                    value: 'mvc'
                },
                {
                    name: 'Event Driven',
                    value: 'event-driven'
                }
            ]
        });
    }

    if (requiresArchitecturePattern(projectType) && (!architecturePattern || architecturePattern === '')) {
        logger.error('Please provide the architecture pattern');
        return;
    }

    let database: string = argv.database || '';
    if (requiresDatabase(projectType) && database === '') {
        database = await select({
            message: 'Select the database:',
            choices: [
                {
                    name: 'MongoDB',
                    value: 'mongodb'
                },
                {
                    name: 'PostgreSQL',
                    value: 'postgresql'
                },
                {
                    name: 'MySQL',
                    value: 'mysql'
                },
                {
                    name: 'SQLite',
                    value: 'sqlite'
                }]
        });
    }

    if (requiresDatabase(projectType) && (!database || database === '')) {
        logger.error('Please provide the database');
        return;
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

    const projectName: string = argv.projectName || await input({message: 'What do you want to name your project?'});
    const targetPath = path.join(CURR_DIR, projectName);

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
    logger.success(`Creating project from template: ${templateRepo}`);

    const result = createProject(projectName, templateRepo);

    const options: CliOptions = {
        projectName,
        templateName: templateKey,
        templatePath: templateRepo,
        targetPath
    };

    if (result) {
        const postProcessResult = postProcess(options);
        if (postProcessResult) {
            logger.success('Project ready');
        }
    }
}

function createProject(projectPath: string, gitRepo: string) {
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

function postProcess(options: CliOptions) {
    logger.info('Running post process');
    const isNode = fs.existsSync(path.join(options.targetPath, 'package.json'));
    if (isNode) {
        shell.cd(options.targetPath);
        const result = shell.exec('npm install');
        if (result.code !== 0) {
            return false;
        }
    }
    return true;
}
