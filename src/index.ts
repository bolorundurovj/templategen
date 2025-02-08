#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

import {input, select, Separator} from '@inquirer/prompts';
import chalk from 'chalk';
import * as shell from 'shelljs';

export interface CliOptions {
    projectName: string;
    templateName: string;
    templatePath: string;
    targetPath: string;
}

const CURR_DIR = process.cwd();

const PROGRAMMING_LANGUAGES: any = {
    frontend: [
        {
            name: 'JavaScript',
            value: 'javascript'
        },
        {
            name: 'TypeScript',
            value: 'typescript'
        }
    ],
    backend: [
        {
            name: 'JavaScript',
            value: 'javascript'
        },
        {
            name: 'TypeScript',
            value: 'typescript'
        },
        {
            name: 'Python',
            value: 'python'
        },
        {
            name: 'C# (DotNet)',
            value: 'csharp'
        }
    ],
    fullstack: [
        {
            name: 'JavaScript - JavaScript',
            value: 'js-js'
        },
        {
            name: 'TypeScript - TypeScript',
            value: 'ts-ts'
        },
        {
            name: 'TypeScript - Python',
            value: 'js-py'
        },
        {
            name: 'TypeScript - C# (DotNet)',
            value: 'ts-csharp'
        }
    ]
}

const FRONTEND_FRAMEWORKS: any = {
    javascript: [
        {
            name: 'React',
            value: 'react'
        },
        {
            name: 'Vue',
            value: 'vue'
        },
        {
            name: 'Svelte',
            value: 'svelte'
        },
        {
            name: 'NextJS',
            value: 'nextjs'
        },
        {
            name: 'NuxtJS',
            value: 'nuxtjs'
        },
        {
            name: 'Vanilla JS',
            value: 'vanillajs'
        }
    ],
    typescript: [
        {
            name: 'Angular',
            value: 'angular'
        },
        {
            name: 'React',
            value: 'react'
        },
        {
            name: 'Vue',
            value: 'vue'
        },
        {
            name: 'Svelte',
            value: 'svelte'
        },
        {
            name: 'NextJS',
            value: 'nextjs'
        },
        {
            name: 'NuxtJS',
            value: 'nuxtjs'
        },
        {
            name: 'Vanilla JS',
            value: 'vanillajs'
        }
    ]
}

const BACKEND_FRAMEWORKS: any = {
    javascript: [
        {
            name: 'Express',
            value: 'express'
        },
        {
            name: 'NestJS',
            value: 'nestjs'
        },
        {
            name: 'AdonisJS',
            value: 'adonisjs'
        },
        {
            name: 'Koa',
            value: 'koa'
        },
        {
            name: 'Hapi',
            value: 'hapi'
        },
        {
            name: 'FeathersJS',
            value: 'feathersjs'
        }
    ],
    typescript: [
        {
            name: 'NestJS',
            value: 'nestjs'
        },
        {
            name: 'AdonisJS',
            value: 'adonisjs'
        },
        {
            name: 'TypeORM',
            value: 'typeorm'
        },
        {
            name: 'Loopback',
            value: 'loopback'
        },
        {
            name: 'FeathersJS',
            value: 'feathersjs'
        }
    ],
    python: [
        {
            name: 'Django',
            value: 'django'
        },
        {
            name: 'Flask',
            value: 'flask'
        },
        {
            name: 'FastAPI',
            value: 'fastapi'
        },
        {
            name: 'Sanic',
            value: 'sanic'
        },
        {
            name: 'Tornado',
            value: 'tornado'
        }
    ],
    csharp: [
        {
            name: 'DotNet Core',
            value: 'dotnetcore'
        },
        {
            name: 'Nancy',
            value: 'nancy'
        },
        {
            name: 'ServiceStack',
            value: 'servicestack'
        },
        {
            name: 'WebAPI',
            value: 'webapi'
        }
    ]
}

const REPOS: any = {
    'frontend-javascript-react': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-vue': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-svelte': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-nextjs': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-nuxtjs': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-vanillajs': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-angular': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-react': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-vue': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-svelte': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-nextjs': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-nuxtjs': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-vanillajs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
};

async function run() {
    const projectType: string = await select({
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

    const language: string = await select({
        message: 'Which programming language would you like to use?',
        choices: PROGRAMMING_LANGUAGES[projectType]
    });

    let framework: string = '';

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

    console.log(projectType, language, framework);

    if (!projectType || !language || framework === '') {
        console.log(chalk.red('Please provide all the required options'));
        return;
    }

    let architecturePattern: string = '';

    if (['backend', 'fullstack'].includes(projectType)) {
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

    let database: string = '';
    if (['backend', 'fullstack'].includes(projectType)) {
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

    console.log(chalk.yellow("Selected options:"));
    console.log(chalk.yellow(`Project Type: ${projectType}`));
    console.log(chalk.yellow(`Language: ${language}`));
    console.log(chalk.yellow(`Framework: ${framework}`));
    console.log(chalk.yellow(`Architecture Pattern: ${architecturePattern}`));
    console.log(chalk.yellow(`Database: ${database}`));

    const projectName: string = await input({message: 'What do you want to name your project?'});
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
        console.log(chalk.red('Template not found'));
        return;
    }
    console.log(chalk.green(`Creating project from template: ${templateRepo}`));

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
            console.log(chalk.green('Project ready'));
        }
    }
}

function createProject(projectPath: string, gitRepo: string) {
    if (fs.existsSync(projectPath)) {
        console.log(
            chalk.red(`Folder ${projectPath} exists. Delete or use another name.`)
        );
        return false;
    }
    if (shell.exec(`git clone ${gitRepo} ${projectPath}`).code !== 0) {
        console.log(chalk.red(`Error cloning repository ${gitRepo} into ${projectPath}`));
        return false;
    }
    return true;
}

function postProcess(options: CliOptions) {
    console.log(chalk.green('Running post process'));
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

run().then(() => {
    console.log(chalk.green('Done'));
}).catch(err => {
    console.error(chalk.red(err));
});
