#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { run } from './scaffold.js';

/**
 * Sets up the CLI to scaffold a new project.
 *
 * The CLI accepts the following options:
 * - projectType: The type of the project (frontend, backend, fullstack)
 * - language: The programming language to use (javascript, typescript, python, csharp)
 * - framework: The framework to use
 * - architecturePattern: The architecture pattern to use (monolithic, microservices, cqrs, mvc, event-driven)
 * - database: The database to use (mongodb, postgresql, mysql, sqlite)
 * - projectName: The name of the project
 *
 * The run function from scaffold.js is called with the parsed arguments.
 */
export async function main() {
  yargs(hideBin(process.argv))
    .command(
      '$0',
      'Scaffold a new project',
      (yargs) => {
        yargs
          .option('projectType', {
            describe: 'Type of the project',
            choices: ['frontend', 'backend', 'fullstack'],
          })
          .option('language', {
            describe: 'Programming language',
            choices: ['javascript', 'typescript', 'python', 'csharp'],
          })
          .option('framework', {
            describe: 'Framework to use',
          })
          .option('architecturePattern', {
            describe: 'Architecture pattern',
            choices: [
              'monolithic',
              'microservices',
              'cqrs',
              'mvc',
              'event-driven',
            ],
          })
          .option('database', {
            describe: 'Database to use',
            choices: ['mongodb', 'postgresql', 'mysql', 'sqlite'],
          })
          .option('projectName', {
            describe: 'Name of the project',
          });
      },
      (argv) => run(argv),
    )
    .help().argv;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
