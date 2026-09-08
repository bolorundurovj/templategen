import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import {
  CliOptions,
  isJavaScript,
  isPython,
  isCSharp,
  findJsDir,
  findCsProj,
  findPyDir,
} from '../../src/utils';

const TEMP_TEST_DIR = path.resolve(__dirname, '../../scratch/test-unit-utils');

const safeRmSync = (dir: string) => {
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, {
        recursive: true,
        force: true,
        maxRetries: 10,
        retryDelay: 100,
      });
    }
  } catch {}
};

describe('Utils Unit Tests', () => {
  beforeAll(() => {
    safeRmSync(TEMP_TEST_DIR);
    fs.mkdirSync(TEMP_TEST_DIR, { recursive: true });
  });

  afterAll(() => {
    safeRmSync(TEMP_TEST_DIR);
  });

  describe('isJavaScript', () => {
    it('returns true for standalone javascript and typescript', () => {
      expect(
        isJavaScript({
          isFullstack: false,
          language: 'javascript',
        } as CliOptions),
      ).toBe(true);
      expect(
        isJavaScript({
          isFullstack: false,
          language: 'typescript',
        } as CliOptions),
      ).toBe(true);
    });

    it('returns false for standalone python or csharp', () => {
      expect(
        isJavaScript({ isFullstack: false, language: 'python' } as CliOptions),
      ).toBe(false);
      expect(
        isJavaScript({ isFullstack: false, language: 'csharp' } as CliOptions),
      ).toBe(false);
    });

    it('returns true for fullstack with javascript or typescript in combination', () => {
      expect(
        isJavaScript({
          isFullstack: true,
          language: 'javascript-javascript',
        } as CliOptions),
      ).toBe(true);
      expect(
        isJavaScript({
          isFullstack: true,
          language: 'typescript-python',
        } as CliOptions),
      ).toBe(true);
      expect(
        isJavaScript({
          isFullstack: true,
          language: 'typescript-csharp',
        } as CliOptions),
      ).toBe(true);
    });

    it('returns false for fullstack without javascript or typescript', () => {
      expect(
        isJavaScript({
          isFullstack: true,
          language: 'python-csharp',
        } as CliOptions),
      ).toBe(false);
      expect(
        isJavaScript({
          isFullstack: true,
          language: 'python-python',
        } as CliOptions),
      ).toBe(false);
    });

    it('returns false for unrecognized language', () => {
      expect(
        isJavaScript({ isFullstack: false, language: 'go' } as CliOptions),
      ).toBe(false);
    });
  });

  describe('isPython', () => {
    it('returns true for standalone python', () => {
      expect(
        isPython({ isFullstack: false, language: 'python' } as CliOptions),
      ).toBe(true);
    });

    it('returns false for standalone javascript, typescript or csharp', () => {
      expect(
        isPython({ isFullstack: false, language: 'javascript' } as CliOptions),
      ).toBe(false);
      expect(
        isPython({ isFullstack: false, language: 'typescript' } as CliOptions),
      ).toBe(false);
      expect(
        isPython({ isFullstack: false, language: 'csharp' } as CliOptions),
      ).toBe(false);
    });

    it('returns true for fullstack containing python', () => {
      expect(
        isPython({
          isFullstack: true,
          language: 'typescript-python',
        } as CliOptions),
      ).toBe(true);
      expect(
        isPython({
          isFullstack: true,
          language: 'python-csharp',
        } as CliOptions),
      ).toBe(true);
    });

    it('returns false for fullstack without python', () => {
      expect(
        isPython({
          isFullstack: true,
          language: 'javascript-javascript',
        } as CliOptions),
      ).toBe(false);
      expect(
        isPython({
          isFullstack: true,
          language: 'typescript-csharp',
        } as CliOptions),
      ).toBe(false);
    });

    it('returns false for unrecognized language', () => {
      expect(
        isPython({ isFullstack: false, language: 'ruby' } as CliOptions),
      ).toBe(false);
    });
  });

  describe('isCSharp', () => {
    it('returns true for standalone csharp', () => {
      expect(
        isCSharp({ isFullstack: false, language: 'csharp' } as CliOptions),
      ).toBe(true);
    });

    it('returns false for standalone javascript, typescript or python', () => {
      expect(
        isCSharp({ isFullstack: false, language: 'javascript' } as CliOptions),
      ).toBe(false);
      expect(
        isCSharp({ isFullstack: false, language: 'typescript' } as CliOptions),
      ).toBe(false);
      expect(
        isCSharp({ isFullstack: false, language: 'python' } as CliOptions),
      ).toBe(false);
    });

    it('returns true for fullstack containing csharp', () => {
      expect(
        isCSharp({
          isFullstack: true,
          language: 'typescript-csharp',
        } as CliOptions),
      ).toBe(true);
      expect(
        isCSharp({
          isFullstack: true,
          language: 'python-csharp',
        } as CliOptions),
      ).toBe(true);
    });

    it('returns false for fullstack without csharp', () => {
      expect(
        isCSharp({
          isFullstack: true,
          language: 'javascript-javascript',
        } as CliOptions),
      ).toBe(false);
      expect(
        isCSharp({
          isFullstack: true,
          language: 'typescript-python',
        } as CliOptions),
      ).toBe(false);
    });

    it('returns false for unrecognized language', () => {
      expect(
        isCSharp({ isFullstack: false, language: 'rust' } as CliOptions),
      ).toBe(false);
    });
  });

  describe('findJsDir', () => {
    it('finds package.json in the target directory root', () => {
      const dir = path.join(TEMP_TEST_DIR, 'js-root');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'package.json'), '{}');

      const found = findJsDir({ targetPath: dir } as CliOptions);
      expect(found).toBe(dir);
    });

    it('finds package.json in a nested subdirectory', () => {
      const root = path.join(TEMP_TEST_DIR, 'js-nested');
      const nested = path.join(root, 'nested', 'client');
      fs.mkdirSync(nested, { recursive: true });
      fs.writeFileSync(path.join(nested, 'package.json'), '{}');

      const found = findJsDir({ targetPath: root } as CliOptions);
      expect(found).toBe(nested);
    });

    it('returns null if package.json does not exist', () => {
      const dir = path.join(TEMP_TEST_DIR, 'js-empty');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.txt'), 'hello');

      const found = findJsDir({ targetPath: dir } as CliOptions);
      expect(found).toBeNull();
    });
  });

  describe('findCsProj', () => {
    it('finds .csproj in the target directory root', () => {
      const dir = path.join(TEMP_TEST_DIR, 'cs-root');
      fs.mkdirSync(dir, { recursive: true });
      const csprojPath = path.join(dir, 'App.csproj');
      fs.writeFileSync(csprojPath, '<Project />');

      const found = findCsProj({ targetPath: dir } as CliOptions);
      expect(found).toBe(csprojPath);
    });

    it('finds .csproj in a nested subdirectory', () => {
      const root = path.join(TEMP_TEST_DIR, 'cs-nested');
      const nested = path.join(root, 'src', 'App');
      fs.mkdirSync(nested, { recursive: true });
      const csprojPath = path.join(nested, 'WebApi.csproj');
      fs.writeFileSync(csprojPath, '<Project />');

      const found = findCsProj({ targetPath: root } as CliOptions);
      expect(found).toBe(csprojPath);
    });

    it('returns null if .csproj does not exist', () => {
      const dir = path.join(TEMP_TEST_DIR, 'cs-empty');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'Program.cs'), 'console.log');

      const found = findCsProj({ targetPath: dir } as CliOptions);
      expect(found).toBeNull();
    });
  });

  describe('findPyDir', () => {
    it('prioritizes pyproject.toml and returns poetry install command', () => {
      const dir = path.join(TEMP_TEST_DIR, 'py-poetry');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'pyproject.toml'), '[tool.poetry]');
      fs.writeFileSync(path.join(dir, 'requirements.txt'), 'flask');

      const found = findPyDir({ targetPath: dir } as CliOptions);
      expect(found).toEqual({
        path: dir,
        depFile: 'pyproject.toml',
        command: 'poetry install',
      });
    });

    it('finds requirements.txt when pyproject.toml is not present', () => {
      const dir = path.join(TEMP_TEST_DIR, 'py-req');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'requirements.txt'), 'django');

      const found = findPyDir({ targetPath: dir } as CliOptions);
      expect(found).toEqual({
        path: dir,
        depFile: 'requirements.txt',
        command: 'pip install -r requirements.txt',
      });
    });

    it('finds Pipfile and returns pipenv install command', () => {
      const dir = path.join(TEMP_TEST_DIR, 'py-pipfile');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'Pipfile'), '[[source]]');

      const found = findPyDir({ targetPath: dir } as CliOptions);
      expect(found).toEqual({
        path: dir,
        depFile: 'Pipfile',
        command: 'pipenv install',
      });
    });

    it('finds Pipfile.lock and returns pipenv install command', () => {
      const dir = path.join(TEMP_TEST_DIR, 'py-pipfile-lock');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'Pipfile.lock'), '{}');

      const found = findPyDir({ targetPath: dir } as CliOptions);
      expect(found).toEqual({
        path: dir,
        depFile: 'Pipfile.lock',
        command: 'pipenv install',
      });
    });

    it('finds python dependency file in nested directory', () => {
      const root = path.join(TEMP_TEST_DIR, 'py-nested');
      const nested = path.join(root, 'server', 'api');
      fs.mkdirSync(nested, { recursive: true });
      fs.writeFileSync(path.join(nested, 'pyproject.toml'), '[tool.poetry]');

      const found = findPyDir({ targetPath: root } as CliOptions);
      expect(found).toEqual({
        path: nested,
        depFile: 'pyproject.toml',
        command: 'poetry install',
      });
    });

    it('returns null if no python dependency file is found', () => {
      const dir = path.join(TEMP_TEST_DIR, 'py-empty');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'main.py'), 'print("hi")');

      const found = findPyDir({ targetPath: dir } as CliOptions);
      expect(found).toBeNull();
    });
  });
});
