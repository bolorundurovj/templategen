#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

import * as inquirer from 'inquirer';
import chalk from 'chalk';
import * as shell from 'shelljs';
import * as yargs from 'yargs';

export interface CliOptions {
    projectName: string;
    templateName: string;
    templatePath: string;
    targetPath: string;
}

const CURR_DIR = process.cwd();

const CHOICES = [
    {
        name: 'Express',
        value: 'https://github.com/bolorundurovj/adblockr.git',
    },
    {
        name: 'React',
        value: 'https://github.com/user/repo1.git'
    },
]
const QUESTIONS = [
    {
        name: 'template',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: CHOICES.map(c => c.name),
        when: () => !yargs.argv['template'],
    },
    {
        name: 'name',
        type: 'input',
        message: 'Project Name:',
        when: () => !yargs.argv['name'],
    },
];

inquirer.prompt(QUESTIONS).then((answers) => {
    answers = Object.assign({}, answers, yargs.argv);
    // @ts-ignore
    const projectChoice = CHOICES.find(c => c.name === answers['template']).value;
    const projectName = answers['name'];
    const templatePath = path.join(__dirname, 'templates', projectChoice);
    const targetPath = path.join(CURR_DIR, projectName);
    const options: CliOptions = {
        projectName,
        templateName: projectChoice,
        templatePath,
        targetPath,
    };
    if (!createProject(targetPath, projectChoice)) {
        return;
    }
    postProcess(options);
});

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
