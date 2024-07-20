import {Languages} from "../variables/languages";
import {Frameworks, getFrameworkChoices} from "../variables/frameworks";
import {Patterns} from "../variables/patterns";
import {PROJECT_TYPES, ProjectTypes} from "../variables/projectTypes";

const inquirer = require('inquirer');

interface FrameworkChoices {
    frontend: Array<Frameworks>;
    backend: Array<Frameworks>;
}

interface LanguageChoices {
    frontend: Array<Languages>;
    backend: Array<Languages>;
}

const languageChoices: LanguageChoices = {
    frontend: [Languages.JAVASCRIPT, Languages.TYPESCRIPT],
    backend: [Languages.JAVASCRIPT, Languages.TYPESCRIPT, Languages.PYTHON, Languages.CSHARP]
};
const frameworkChoices: FrameworkChoices = {
    frontend: [Frameworks.Angular, Frameworks.React, Frameworks.Vue, Frameworks.Svelte, Frameworks.NextJS, Frameworks.NuxtJS],
    backend: [Frameworks.Express, Frameworks.NestJS, Frameworks.Django, Frameworks.Flask, Frameworks.FastAPI, Frameworks.DotNet]
};
const patternChoices: Array<Patterns> = [Patterns.Monolithic, Patterns.Microservices, Patterns.CQRS, Patterns.MVC, Patterns.CleanArchitecture, Patterns.Serverless, Patterns.EventDriven];

async function askProjectType() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'projectType',
            message: 'Select the type of project:',
            choices: PROJECT_TYPES
        }
    ]);
}

async function askLanguages(projectType: ProjectTypes) {
    const languageQuestions = [
        {
            type: 'checkbox',
            name: 'frontendLanguage',
            message: 'Select the language for frontend:',
            choices: languageChoices.frontend,
            when: () => projectType !== ProjectTypes.BACKEND
        },
        {
            type: 'checkbox',
            name: 'backendLanguage',
            message: 'Select the language for backend:',
            choices: languageChoices.backend,
            when: () => projectType !== ProjectTypes.FRONTEND
        }
    ];
    return inquirer.prompt(languageQuestions);
}

async function askFrameworks(projectType: ProjectTypes, language: Array<Languages>) {
    console.log(projectType, language);
    const frameworkQuestions = [
        {
            type: 'checkbox',
            name: 'frontendFramework',
            message: 'Select the framework for frontend:',
            choices: getFrameworkChoices(projectType, language[0], 'frontend'),
            when: () => projectType !== ProjectTypes.BACKEND
        },
        {
            type: 'checkbox',
            name: 'backendFramework',
            message: 'Select the framework for backend:',
            choices: getFrameworkChoices(projectType, language[0] ?? language[1], 'backend'),
            when: () => projectType !== ProjectTypes.FRONTEND
        }
    ];
    return inquirer.prompt(frameworkQuestions);
}

async function askPattern() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'architecturePattern',
            message: 'Select the architectural pattern:',
            choices: patternChoices
        }
    ]);
}

async function askTemplate(choices: Array<string>) {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'template',
            message: 'Select the template:',
            choices
        }
    ]);
}

async function askProjectName() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Enter the project name:'
        }
    ]);
}

module.exports = {
    askProjectType,
    askLanguages,
    askFrameworks,
    askPattern,
    askTemplate,
    askProjectName
};
