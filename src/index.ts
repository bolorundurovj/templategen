#!/usr/bin/env node

import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import {run} from "./scaffold.js";

yargs(hideBin(process.argv))
    .command(
        '$0',
        'Scaffold a new project',
        (yargs) => {
            yargs.option('projectType', {
                describe: 'Type of the project',
                choices: ['frontend', 'backend', 'fullstack']
            })
                .option('language', {
                    describe: 'Programming language',
                    choices: ['javascript', 'typescript', 'python', 'csharp']
                })
                .option('framework', {
                    describe: 'Framework to use'
                })
                .option('architecturePattern', {
                    describe: 'Architecture pattern',
                    choices: ['monolithic', 'microservices', 'cqrs', 'mvc', 'event-driven']
                })
                .option('database', {
                    describe: 'Database to use',
                    choices: ['mongodb', 'postgresql', 'mysql', 'sqlite']
                })
                .option('projectName', {
                    describe: 'Name of the project'
                });
        },
        (argv) => run(argv)
    )
    .help()
    .argv;
