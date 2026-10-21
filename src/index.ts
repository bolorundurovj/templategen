#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { run } from './scaffold.js';
import { runTui } from './tui/index.js';

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
 * - classic: Use classic terminal prompts instead of TUI
 * - tui: Use interactive Terminal User Interface (TUI)
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
              'ddd',
              'cqrs',
              'monolithic',
              'microservices',
              'mvc',
              'event-driven',
            ],
          })
          .option('database', {
            describe: 'Database to use',
            choices: ['mongodb', 'postgresql', 'mysql', 'sqlite'],
          })
          .option('layout', {
            describe: 'Navigation layout for frontend',
            choices: ['sidenav', 'topnav'],
          })
          .option('projectName', {
            describe: 'Name of the project',
          })
          .option('classic', {
            describe: 'Use classic terminal prompts instead of TUI',
            type: 'boolean',
            default: false,
          })
          .option('tui', {
            describe: 'Use interactive Terminal User Interface (TUI)',
            type: 'boolean',
            default: true,
          });
      },
      async (argv: any) => {
        const isInteractive = Boolean(
          process.stdin &&
            process.stdin.isTTY &&
            process.stdout &&
            process.stdout.isTTY,
        );
        const useClassic = Boolean(
          argv.classic || argv.tui === false || !isInteractive,
        );
        const hasFullFlags = Boolean(
          argv.projectName &&
            argv.projectType &&
            argv.language &&
            argv.framework,
        );

        if (useClassic || hasFullFlags) {
          await run(argv);
          return;
        }

        const answers = await runTui(argv);
        if (answers) {
          await run({ ...argv, ...answers });
        }
      },
    )
    .help().argv;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
