import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { logger } from '../../src/logger';
import * as scaffold from '../../src/scaffold';
import * as templating from '../../src/templating';
import { select, input, confirm } from '@inquirer/prompts';
import fs from 'fs';
import shell from 'shelljs';
import {
  CliOptions,
  findCsProj,
  findJsDir,
  findPyDir,
  isCSharp,
  isJavaScript,
  isPython,
} from '../../src/utils';

// Mock chalk
jest.mock('chalk', () => ({
  green: jest.fn((text) => text),
  red: jest.fn((text) => text),
  yellow: jest.fn((text) => text),
  blue: jest.fn((text) => text),
}));

// Mock external dependencies
jest.mock('fs');
jest.mock('shelljs', () => ({
  cd: jest.fn(),
  exec: jest.fn(),
}));
jest.mock('../../src/logger', () => ({
  logger: {
    info: jest.fn(),
    error: jest.fn(),
    success: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));
jest.mock('@inquirer/prompts', () => ({
  select: jest.fn(),
  input: jest.fn(),
  confirm: jest.fn(),
  Separator: jest.fn(),
}));
jest.mock('../../src/templating', () => ({
  renderTemplate: jest.fn(),
}));
jest.mock('../../src/utils', () => ({
  isJavaScript: jest.fn(),
  isCSharp: jest.fn(),
  isPython: jest.fn(),
  findJsDir: jest.fn(),
  findCsProj: jest.fn(),
  findPyDir: jest.fn(),
}));

describe('Scaffold Unit Tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const jsOptions: CliOptions = {
    projectName: 'my-project',
    templateName: 'template',
    templatePath: 'path',
    targetPath: 'target',
    isFullstack: false,
    language: 'javascript',
  };

  const csOptions: CliOptions = {
    projectName: 'cs-project',
    templateName: 'cs-template',
    templatePath: 'cs-path',
    targetPath: 'cs-target',
    isFullstack: false,
    language: 'csharp',
  };

  const pyOptions: CliOptions = {
    projectName: 'py-project',
    templateName: 'py-template',
    templatePath: 'py-path',
    targetPath: 'py-target',
    isFullstack: false,
    language: 'python',
  };

  describe('postProcess', () => {
    describe('JavaScript / TypeScript Standalone', () => {
      it('installs JavaScript dependencies successfully', () => {
        (isJavaScript as jest.Mock).mockReturnValue(true);
        (findJsDir as jest.Mock).mockReturnValue('/js/dir');
        (shell.exec as jest.Mock).mockReturnValue({ code: 0 });
        const result = scaffold.postProcess(jsOptions);
        expect(shell.cd).toHaveBeenCalledWith('/js/dir');
        expect(shell.exec).toHaveBeenCalledWith('npm install');
        expect(result).toBe(true);
      });

      it('handles missing JavaScript directory', () => {
        (isJavaScript as jest.Mock).mockReturnValue(true);
        (findJsDir as jest.Mock).mockReturnValue(undefined);
        const result = scaffold.postProcess(jsOptions);
        expect(logger.error).toHaveBeenCalledWith(
          'Could not find the JavaScript directory',
        );
        expect(result).toBe(false);
      });

      it('handles npm install failure', () => {
        (isJavaScript as jest.Mock).mockReturnValue(true);
        (findJsDir as jest.Mock).mockReturnValue('/js/dir');
        (shell.exec as jest.Mock).mockReturnValue({ code: 1 });
        const result = scaffold.postProcess(jsOptions);
        expect(logger.error).toHaveBeenCalledWith(
          'Error installing dependencies',
        );
        expect(result).toBe(false);
      });
    });

    describe('C# Standalone', () => {
      it('restores C# packages successfully', () => {
        (isCSharp as jest.Mock).mockReturnValue(true);
        (findCsProj as jest.Mock).mockReturnValue('/cs/proj/App.csproj');
        (shell.exec as jest.Mock).mockReturnValue({ code: 0 });
        const result = scaffold.postProcess(csOptions);
        expect(shell.cd).toHaveBeenCalledWith('/cs/proj/App.csproj');
        expect(shell.exec).toHaveBeenCalledWith('dotnet restore');
        expect(result).toBe(true);
      });

      it('handles missing C# project file', () => {
        (isCSharp as jest.Mock).mockReturnValue(true);
        (findCsProj as jest.Mock).mockReturnValue(undefined);
        const result = scaffold.postProcess(csOptions);
        expect(logger.error).toHaveBeenCalledWith(
          'Could not find the .csproj file',
        );
        expect(result).toBe(false);
      });

      it('handles dotnet restore failure', () => {
        (isCSharp as jest.Mock).mockReturnValue(true);
        (findCsProj as jest.Mock).mockReturnValue('/cs/proj/App.csproj');
        (shell.exec as jest.Mock).mockReturnValue({ code: 1 });
        const result = scaffold.postProcess(csOptions);
        expect(logger.error).toHaveBeenCalledWith('Error restoring packages');
        expect(result).toBe(false);
      });
    });

    describe('Python Standalone', () => {
      it('installs Python dependencies via poetry/pip successfully', () => {
        (isPython as jest.Mock).mockReturnValue(true);
        (findPyDir as jest.Mock).mockReturnValue({
          path: '/py/dir',
          command: 'poetry install',
          depFile: 'pyproject.toml',
        });
        (shell.exec as jest.Mock).mockReturnValue({ code: 0 });
        const result = scaffold.postProcess(pyOptions);
        expect(shell.cd).toHaveBeenCalledWith('/py/dir');
        expect(shell.exec).toHaveBeenCalledWith('poetry install');
        expect(result).toBe(true);
      });

      it('handles missing Python directory', () => {
        (isPython as jest.Mock).mockReturnValue(true);
        (findPyDir as jest.Mock).mockReturnValue(undefined);
        const result = scaffold.postProcess(pyOptions);
        expect(logger.error).toHaveBeenCalledWith(
          'Could not find the Python directory',
        );
        expect(result).toBe(false);
      });

      it('handles python command execution failure', () => {
        (isPython as jest.Mock).mockReturnValue(true);
        (findPyDir as jest.Mock).mockReturnValue({
          path: '/py/dir',
          command: 'poetry install',
          depFile: 'pyproject.toml',
        });
        (shell.exec as jest.Mock).mockReturnValue({ code: 1 });
        const result = scaffold.postProcess(pyOptions);
        expect(logger.error).toHaveBeenCalledWith(
          'Error installing dependencies',
        );
        expect(result).toBe(false);
      });
    });

    describe('Fullstack Nx Workspace Post-Processing', () => {
      it('handles fullstack workspace post-processing with Node client and server', () => {
        const fsOptions: CliOptions = {
          projectName: 'fullstack-app',
          templateName: 'fullstack-template',
          templatePath: 'path',
          targetPath: '/mock/fullstack',
          isFullstack: true,
          language: 'typescript-typescript',
        };

        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string') {
            if (p.endsWith('package.json')) return true;
          }
          return false;
        });
        (shell.exec as jest.Mock).mockReturnValue({ code: 0 });

        const result = scaffold.postProcess(fsOptions);
        expect(shell.cd).toHaveBeenCalledWith('/mock/fullstack');
        expect(result).toBe(true);
      });

      it('handles root workspace npm install failure', () => {
        const fsOptions: CliOptions = {
          projectName: 'fullstack-app',
          templateName: 'fullstack-template',
          templatePath: 'path',
          targetPath: '/mock/fullstack',
          isFullstack: true,
          language: 'javascript-javascript',
        };

        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (shell.exec as jest.Mock).mockReturnValue({ code: 1 });

        const result = scaffold.postProcess(fsOptions);
        expect(logger.error).toHaveBeenCalledWith(
          'Error installing root workspace dependencies',
        );
        expect(result).toBe(true);
      });

      it('handles fullstack workspace with Python backend', () => {
        const fsOptions: CliOptions = {
          projectName: 'fullstack-py',
          templateName: 'fullstack-template',
          templatePath: 'path',
          targetPath: '/mock/fullstack-py',
          isFullstack: true,
          language: 'typescript-python',
        };

        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (isPython as jest.Mock).mockReturnValue(true);
        (findPyDir as jest.Mock).mockReturnValue({
          path: '/mock/fullstack-py/apps/server',
          command: 'poetry install',
          depFile: 'pyproject.toml',
        });
        (shell.exec as jest.Mock).mockReturnValue({ code: 0 });

        const result = scaffold.postProcess(fsOptions);
        expect(shell.exec).toHaveBeenCalledWith('poetry install');
        expect(result).toBe(true);
      });

      it('handles fullstack workspace with C# backend', () => {
        const fsOptions: CliOptions = {
          projectName: 'fullstack-cs',
          templateName: 'fullstack-template',
          templatePath: 'path',
          targetPath: '/mock/fullstack-cs',
          isFullstack: true,
          language: 'typescript-csharp',
        };

        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (isCSharp as jest.Mock).mockReturnValue(true);
        (findCsProj as jest.Mock).mockReturnValue(
          '/mock/fullstack-cs/apps/server/App.csproj',
        );
        (shell.exec as jest.Mock).mockReturnValue({ code: 0 });

        const result = scaffold.postProcess(fsOptions);
        expect(shell.exec).toHaveBeenCalledWith('dotnet restore');
        expect(result).toBe(true);
      });
    });
  });

  describe('run', () => {
    describe('Validation & Argument Errors', () => {
      it('logs error if project type is missing and prompt returns undefined', async () => {
        (select as jest.Mock).mockResolvedValue(undefined as never);
        await scaffold.run({});
        expect(logger.error).toHaveBeenCalledWith(
          'Please provide a project type',
        );
      });

      it('logs error if language is missing and prompt returns undefined', async () => {
        (select as jest.Mock).mockResolvedValue(undefined as never);
        await scaffold.run({ projectType: 'frontend' });
        expect(logger.error).toHaveBeenCalledWith(
          'Please provide the programming language(s)',
        );
      });

      it('logs error if framework is missing and prompt returns undefined', async () => {
        (select as jest.Mock).mockResolvedValue(undefined as never);
        await scaffold.run({ projectType: 'frontend', language: 'javascript' });
        expect(logger.error).toHaveBeenCalledWith(
          'Please provide the framework(s)',
        );
      });

      it('logs error if architecturePattern is required but missing and prompt returns undefined', async () => {
        (select as jest.Mock).mockResolvedValue(undefined as never);
        await scaffold.run({
          projectType: 'backend',
          language: 'javascript',
          framework: 'express',
        });
        expect(logger.error).toHaveBeenCalledWith(
          'Please provide the architecture pattern',
        );
      });

      it('logs error if database is required but missing and prompt returns undefined', async () => {
        (select as jest.Mock).mockResolvedValue(undefined as never);
        await scaffold.run({
          projectType: 'backend',
          language: 'javascript',
          framework: 'express',
          architecturePattern: 'monolithic',
        });
        expect(logger.error).toHaveBeenCalledWith(
          'Please provide the database',
        );
      });

      it('logs error if target folder already exists', async () => {
        (fs.existsSync as jest.Mock).mockReturnValue(true);
        const argv = {
          projectType: 'frontend',
          language: 'javascript',
          framework: 'react',
          projectName: 'existing-folder',
          shadcn: false,
        };
        await scaffold.run(argv);
        expect(logger.error).toHaveBeenCalledWith(
          expect.stringContaining('exists. Delete or use another name.'),
        );
      });
    });

    describe('Interactive Prompts Flow', () => {
      it('prompts interactively for frontend, language, framework, shadcn, and project name', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });

        (select as jest.Mock)
          .mockResolvedValueOnce('frontend' as never)
          .mockResolvedValueOnce('javascript' as never)
          .mockResolvedValueOnce('react' as never);
        (confirm as jest.Mock).mockResolvedValueOnce(true as never);
        (input as jest.Mock).mockResolvedValueOnce(
          'interactive-react' as never,
        );

        const postProcessSpy = jest
          .spyOn(scaffold, 'postProcess')
          .mockReturnValue(true);

        await scaffold.run({});

        expect(select).toHaveBeenCalledTimes(3);
        expect(confirm).toHaveBeenCalled();
        expect(input).toHaveBeenCalled();
        expect(templating.renderTemplate).toHaveBeenCalled();
        expect(postProcessSpy).toHaveBeenCalled();
        postProcessSpy.mockRestore();
      });

      it('prompts interactively for backend framework, architecture pattern, and database', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });

        (select as jest.Mock)
          .mockResolvedValueOnce('backend' as never)
          .mockResolvedValueOnce('typescript' as never)
          .mockResolvedValueOnce('express' as never)
          .mockResolvedValueOnce('monolithic' as never)
          .mockResolvedValueOnce('sqlite' as never);
        (input as jest.Mock).mockResolvedValueOnce(
          'interactive-backend' as never,
        );

        const postProcessSpy = jest
          .spyOn(scaffold, 'postProcess')
          .mockReturnValue(true);

        await scaffold.run({});

        expect(select).toHaveBeenCalledTimes(5);
        expect(templating.renderTemplate).toHaveBeenCalled();
        postProcessSpy.mockRestore();
      });

      it('prompts interactively for fullstack dual frontend and backend frameworks', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });

        (select as jest.Mock)
          .mockResolvedValueOnce('fullstack' as never)
          .mockResolvedValueOnce('typescript-typescript' as never)
          .mockResolvedValueOnce('react' as never)
          .mockResolvedValueOnce('express' as never)
          .mockResolvedValueOnce('monolithic' as never)
          .mockResolvedValueOnce('postgresql' as never);
        (confirm as jest.Mock).mockResolvedValueOnce(false as never);
        (input as jest.Mock).mockResolvedValueOnce('interactive-fs' as never);

        const postProcessSpy = jest
          .spyOn(scaffold, 'postProcess')
          .mockReturnValue(true);

        await scaffold.run({});

        expect(select).toHaveBeenCalledTimes(6);
        expect(templating.renderTemplate).toHaveBeenCalledTimes(2);
        postProcessSpy.mockRestore();
      });
    });

    describe('Standalone Scaffolding Errors & Success', () => {
      it('logs error if source template does not exist', async () => {
        (fs.existsSync as jest.Mock).mockReturnValue(false);

        await scaffold.run({
          projectType: 'frontend',
          language: 'javascript',
          framework: 'nonexistent',
          projectName: 'my-project',
          shadcn: false,
        });

        expect(logger.error).toHaveBeenCalledWith(
          expect.stringContaining('does not exist locally yet'),
        );
      });

      it('catches and logs error if renderTemplate throws in standalone project', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });
        (templating.renderTemplate as jest.Mock).mockRejectedValueOnce(
          new Error('Disk full') as never,
        );

        await scaffold.run({
          projectType: 'frontend',
          language: 'javascript',
          framework: 'react',
          projectName: 'fail-app',
          shadcn: false,
        });

        expect(logger.error).toHaveBeenCalledWith(
          expect.stringContaining(
            'Failed to scaffold project: Error: Disk full',
          ),
        );
      });
    });

    describe('Fullstack Monorepo Scaffolding Variations', () => {
      it('logs error if client template is missing in fullstack scaffolding', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          // target folder does not exist, but fe template also does not exist
          return false;
        });

        await scaffold.run({
          projectType: 'fullstack',
          language: 'typescript-typescript',
          framework: 'react-express',
          architecturePattern: 'monolithic',
          database: 'sqlite',
          projectName: 'fs-missing-fe',
          shadcn: false,
        });

        expect(logger.error).toHaveBeenCalledWith(
          expect.stringContaining('Frontend template'),
        );
      });

      it('logs error if server template is missing in fullstack scaffolding', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('frontend-')) return true;
          return false;
        });

        await scaffold.run({
          projectType: 'fullstack',
          language: 'typescript-typescript',
          framework: 'react-express',
          architecturePattern: 'monolithic',
          database: 'sqlite',
          projectName: 'fs-missing-be',
          shadcn: false,
        });

        expect(logger.error).toHaveBeenCalledWith(
          expect.stringContaining('Backend template'),
        );
      });

      it('scaffolds fullstack with Python FastAPI backend and generates poetry commands in project.json', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });

        let writtenProjectJson = '';
        (fs.writeFileSync as jest.Mock).mockImplementation(
          (filePath: any, content: any) => {
            if (
              typeof filePath === 'string' &&
              filePath.endsWith('project.json')
            ) {
              writtenProjectJson = content;
            }
          },
        );

        const postProcessSpy = jest
          .spyOn(scaffold, 'postProcess')
          .mockReturnValue(true);

        await scaffold.run({
          projectType: 'fullstack',
          language: 'typescript-python',
          framework: 'react-fastapi',
          architecturePattern: 'monolithic',
          database: 'sqlite',
          projectName: 'fs-fastapi',
          shadcn: false,
        });

        expect(writtenProjectJson).toContain(
          'poetry run uvicorn main:app --reload',
        );
        expect(writtenProjectJson).toContain('poetry run pytest');
        postProcessSpy.mockRestore();
      });

      it('scaffolds fullstack with Python Django backend generating poetry manage.py runserver', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });

        let writtenProjectJson = '';
        (fs.writeFileSync as jest.Mock).mockImplementation(
          (filePath: any, content: any) => {
            if (
              typeof filePath === 'string' &&
              filePath.endsWith('project.json')
            ) {
              writtenProjectJson = content;
            }
          },
        );

        const postProcessSpy = jest
          .spyOn(scaffold, 'postProcess')
          .mockReturnValue(true);

        await scaffold.run({
          projectType: 'fullstack',
          language: 'typescript-python',
          framework: 'react-django',
          architecturePattern: 'monolithic',
          database: 'sqlite',
          projectName: 'fs-django',
          shadcn: false,
        });

        expect(writtenProjectJson).toContain(
          'poetry run python manage.py runserver',
        );
        postProcessSpy.mockRestore();
      });

      it('scaffolds fullstack with Python Flask backend generating poetry python app.py', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });

        let writtenProjectJson = '';
        (fs.writeFileSync as jest.Mock).mockImplementation(
          (filePath: any, content: any) => {
            if (
              typeof filePath === 'string' &&
              filePath.endsWith('project.json')
            ) {
              writtenProjectJson = content;
            }
          },
        );

        const postProcessSpy = jest
          .spyOn(scaffold, 'postProcess')
          .mockReturnValue(true);

        await scaffold.run({
          projectType: 'fullstack',
          language: 'typescript-python',
          framework: 'react-flask',
          architecturePattern: 'monolithic',
          database: 'sqlite',
          projectName: 'fs-flask',
          shadcn: false,
        });

        expect(writtenProjectJson).toContain('poetry run python app.py');
        postProcessSpy.mockRestore();
      });

      it('scaffolds fullstack with C# backend generating dotnet run and test project.json', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });

        let writtenProjectJson = '';
        (fs.writeFileSync as jest.Mock).mockImplementation(
          (filePath: any, content: any) => {
            if (
              typeof filePath === 'string' &&
              filePath.endsWith('project.json')
            ) {
              writtenProjectJson = content;
            }
          },
        );

        const postProcessSpy = jest
          .spyOn(scaffold, 'postProcess')
          .mockReturnValue(true);

        await scaffold.run({
          projectType: 'fullstack',
          language: 'typescript-csharp',
          framework: 'react-dotnetcore',
          architecturePattern: 'monolithic',
          database: 'sqlite',
          projectName: 'fs-dotnet',
          shadcn: false,
        });

        expect(writtenProjectJson).toContain('dotnet run');
        expect(writtenProjectJson).toContain('dotnet test');
        postProcessSpy.mockRestore();
      });

      it('catches and logs error if renderTemplate throws in fullstack project', async () => {
        (fs.existsSync as jest.Mock).mockImplementation((p: any) => {
          if (typeof p === 'string' && p.includes('templates')) return true;
          return false;
        });
        (templating.renderTemplate as jest.Mock).mockRejectedValueOnce(
          new Error('Permission denied') as never,
        );

        await scaffold.run({
          projectType: 'fullstack',
          language: 'typescript-typescript',
          framework: 'react-express',
          architecturePattern: 'monolithic',
          database: 'sqlite',
          projectName: 'fs-error',
          shadcn: false,
        });

        expect(logger.error).toHaveBeenCalledWith(
          expect.stringContaining(
            'Failed to scaffold fullstack project: Error: Permission denied',
          ),
        );
      });
    });
  });
});
