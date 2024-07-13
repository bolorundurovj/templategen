#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import * as shell from 'shelljs';

export interface CliOptions {
    projectName: string;
    templateName: string;
    templatePath: string;
    targetPath: string;
}

const CURR_DIR = process.cwd();

const prompts = require('./utils/prompts');
const filter = require('./utils/filter');

async function scaffoldProject() {
    const projectTypeAnswer = await prompts.askProjectType();
    const languageAnswers = await prompts.askLanguages(projectTypeAnswer.projectType);
    console.log('Language Answers:', languageAnswers);
    const frameworkAnswers = await prompts.askFrameworks(projectTypeAnswer.projectType, [...(languageAnswers.frontendLanguage !== undefined ? languageAnswers.frontendLanguage : []), ...(languageAnswers.backendLanguage !== undefined ? languageAnswers.backendLanguage : [])]);
    const patternAnswer = await prompts.askPattern();

    // Combine all answers
    const selections = {
        projectType: projectTypeAnswer.projectType,
        ...languageAnswers,
        ...frameworkAnswers,
        architecturePattern: patternAnswer.architecturePattern
    };

    // Filter template choices based on selections
    const templateChoices = filter.filterTemplateChoices(selections);
    const templateAnswer = await prompts.askTemplate(templateChoices);

    console.log('Selected options:', selections);
    console.log('Selected template:', templateAnswer.template);

    const projectNameAnswer = await prompts.askProjectName();

    console.log('Project Name:', projectNameAnswer.projectName);

    // Generate project based on selections
    if (!createProject(projectNameAnswer.projectName, templateAnswer.template)) {
        return;
    }

    // Post process
    postProcess({
        projectName: projectNameAnswer.projectName,
        templateName: templateAnswer.template,
        templatePath: path.join(__dirname, 'templates', templateAnswer.template),
        targetPath: path.join(CURR_DIR, projectNameAnswer.projectName)
    });
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

scaffoldProject();
