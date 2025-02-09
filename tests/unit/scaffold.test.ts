import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import {logger} from "../../src/logger";

import * as scaffold from '../../src/scaffold';
import fs from 'fs';
import shell from 'shelljs';
import {CliOptions, findCsProj, findJsDir, findPyDir, isCSharp, isJavaScript, isPython} from '../../src/utils';
import {REPOS} from "../../src/choices";

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
jest.mock('../../src/logger');
jest.mock('@inquirer/prompts');
jest.mock('../../src/choices');
jest.mock('../../src/utils', () => ({
    isJavaScript: jest.fn(),
    isCSharp: jest.fn(),
    isPython: jest.fn(),
    findJsDir: jest.fn(),
    findCsProj: jest.fn(),
    findPyDir: jest.fn(),
}));

describe('createProject', () => {
    it('returns false if directory exists', () => {
        (fs.existsSync as jest.Mock).mockReturnValue(true);
        const result = scaffold.createProject('my-project', 'https://repo.url');
        expect(result).toBe(false);
        expect(logger.error).toHaveBeenCalledWith('Folder my-project exists. Delete or use another name.');
    });

    it("returns true if directory doesn't exist", () => {
        (fs.existsSync as jest.Mock).mockReturnValue(false);
        (shell.exec as jest.Mock).mockReturnValue({code: 0});
        const result = scaffold.createProject('my-project', 'https://repo.url');
        expect(result).toBe(true);
    });

    it('clones repo when directory does not exist', () => {
        (fs.existsSync as jest.Mock).mockReturnValue(false);
        (shell.exec as jest.Mock).mockReturnValue({code: 0});
        const result = scaffold.createProject('my-project', 'https://repo.url');
        expect(shell.exec).toHaveBeenCalledWith('git clone https://repo.url my-project');
        expect(result).toBe(true);
    });

    it('returns false if git clone fails', () => {
        (fs.existsSync as jest.Mock).mockReturnValue(false);
        (shell.exec as jest.Mock).mockReturnValue({code: 1});
        const result = scaffold.createProject('my-project', 'https://repo.url');
        expect(result).toBe(false);
        expect(logger.error).toHaveBeenCalledWith('Error cloning repository https://repo.url into my-project');
    });
});

describe('postProcess', () => {
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
    }

    const pyOptions: CliOptions = {
        projectName: 'py-project',
        templateName: 'py-template',
        templatePath: 'py-path',
        targetPath: 'py-target',
        isFullstack: false,
        language: 'python',
    }

    it('installs JavaScript dependencies', () => {
        (isJavaScript as jest.Mock).mockReturnValue(true);
        (findJsDir as jest.Mock).mockReturnValue('/js/dir');
        (shell.exec as jest.Mock).mockReturnValue({code: 0});
        const result = scaffold.postProcess(jsOptions);
        expect(shell.cd).toHaveBeenCalledWith('/js/dir');
        expect(shell.exec).toHaveBeenCalledWith('npm install');
        expect(result).toBe(true);
    });

    it('handles missing JavaScript directory', () => {
        (isJavaScript as jest.Mock).mockReturnValue(true);
        (isJavaScript as jest.Mock).mockReturnValue(true);
        (findJsDir as jest.Mock).mockReturnValue(undefined);
        const result = scaffold.postProcess(jsOptions);
        expect(logger.error).toHaveBeenCalledWith('Could not find the JavaScript directory');
        expect(result).toBe(false);
    });

    it('restores C# packages', () => {
        (isCSharp as jest.Mock).mockReturnValue(true);
        (findCsProj as jest.Mock).mockReturnValue('/cs/proj');
        (shell.exec as jest.Mock).mockReturnValue({code: 0});
        const result = scaffold.postProcess(csOptions);
        expect(shell.cd).toHaveBeenCalledWith('/cs/proj');
        expect(shell.exec).toHaveBeenCalledWith('dotnet restore');
        expect(result).toBe(true);
    });

    it('handles missing C# project file', () => {
        (isCSharp as jest.Mock).mockReturnValue(true);
        (findCsProj as jest.Mock).mockReturnValue(undefined);
        const result = scaffold.postProcess(jsOptions);
        expect(logger.error).toHaveBeenCalledWith('Could not find the .csproj file');
        expect(result).toBe(false);
    });

    it('installs Python dependencies', () => {
        (isPython as jest.Mock).mockReturnValue(true);
        (findPyDir as jest.Mock).mockReturnValue({
            path: '/py/dir',
            command: 'pip install -r requirements.txt',
            depFile: 'requirements.txt'
        });
        (shell.exec as jest.Mock).mockReturnValue({code: 0});
        const result = scaffold.postProcess(jsOptions);
        expect(shell.cd).toHaveBeenCalledWith('/py/dir');
        expect(shell.exec).toHaveBeenCalledWith('pip install -r requirements.txt');
        expect(result).toBe(true);
    });

    it('handles missing Python directory', () => {
        (isPython as jest.Mock).mockReturnValue(true);
        (findPyDir as jest.Mock).mockReturnValue(undefined);
        const result = scaffold.postProcess(jsOptions);
        expect(logger.error).toHaveBeenCalledWith('Could not find the Python directory');
        expect(result).toBe(false);
    });
});

describe('run', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('creates project with valid inputs', async () => {
        (shell.exec as jest.Mock).mockReturnValue({code: 0});
        const argv = {
            projectType: 'fullstack',
            language: 'javascript',
            framework: 'react-express',
            architecturePattern: 'mvc',
            database: 'mongodb',
            projectName: 'my-project',
        };

        (REPOS as any)['fullstack-javascript-react-express-mongodb-mvc'] = 'mocked-repo';
        const createProjectMock = jest.spyOn(scaffold, 'createProject').mockReturnValue(true);
        const postProcessMock = jest.spyOn(scaffold, 'postProcess').mockReturnValue(true);

        await scaffold.run(argv);

        expect(createProjectMock).toHaveBeenCalledWith('my-project', 'mocked-repo');
        expect(postProcessMock).toHaveBeenCalled();
    });

    it('logs error if project type is missing', async () => {
        const argv = {};
        await scaffold.run(argv);
        expect(logger.error).toHaveBeenCalledWith('Please provide a project type');
    });

    it('logs error if language is missing', async () => {
        const argv = {projectType: 'frontend'};
        await scaffold.run(argv);
        expect(logger.error).toHaveBeenCalledWith('Please provide the programming language(s)');
    });

    it('logs error if framework is missing', async () => {
        const argv = {projectType: 'frontend', language: 'javascript'};
        await scaffold.run(argv);
        expect(logger.error).toHaveBeenCalledWith('Please provide the framework(s)');
    });
});
