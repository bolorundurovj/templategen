import { describe, it, expect, beforeAll, afterAll, jest } from '@jest/globals';
import fs from 'fs';
import path from 'path';

// Mock chalk to prevent ESM loading issue in Jest
jest.mock('chalk', () => ({
  __esModule: true,
  default: {
    green: (text: string) => text,
    red: (text: string) => text,
    yellow: (text: string) => text,
    blue: (text: string) => text,
  },
  green: (text: string) => text,
  red: (text: string) => text,
  yellow: (text: string) => text,
  blue: (text: string) => text,
}));

import { execSync } from 'child_process';
import { renderTemplate } from '../../src/templating';
import * as scaffold from '../../src/scaffold';
import {
  PROGRAMMING_LANGUAGES,
  FRONTEND_FRAMEWORKS,
  BACKEND_FRAMEWORKS,
} from '../../src/choices';

const TEMP_BASE = path.resolve(
  __dirname,
  '../../scratch/test-scaffold-and-run',
);
const TEMPLATES_DIR = path.resolve(__dirname, '../../templates');

const safeRmSync = (dir: string) => {
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, {
        recursive: true,
        force: true,
        maxRetries: 10,
        retryDelay: 150,
      });
    }
  } catch {}
};

const stripAnsi = (str: string) =>
  str.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '').replace(/\x1B\([B0]/g, '');

describe('Scaffold and Run Generated Project Tests', () => {
  beforeAll(() => {
    safeRmSync(TEMP_BASE);
    fs.mkdirSync(TEMP_BASE, { recursive: true });
  });

  afterAll(() => {
    safeRmSync(TEMP_BASE);
  });

  describe('Live Test Execution in Generated Projects', () => {
    /*
     * TODO: Add live execution for Python backend templates (e.g. FastAPI with pytest).
     * Currently, Python live execution is omitted to avoid environment flakiness across OSes.
     * To implement safely without polluting the host machine's global Python space, the test must:
     * 1. Spin up a virtual environment (python -m venv venv)
     * 2. Conditionally use the correct path to pip/pytest based on OS
     *    (venv\Scripts\pip on Windows vs venv/bin/pip on Unix)
     * 3. Install dependencies (pip install -r requirements.txt)
     * 4. Run pytest
     */
    it('scaffolds backend-csharp-dotnetcore and verifies dotnet test passes', async () => {
      const target = path.join(TEMP_BASE, 'csharp-api');
      const source = path.join(TEMPLATES_DIR, 'backend-csharp-dotnetcore');

      await renderTemplate(source, target, {
        projectName: 'LiveCSharpApi',
        templateName: 'backend-csharp-dotnetcore',
        templatePath: source,
        targetPath: target,
        isFullstack: false,
        language: 'csharp',
        database: 'sqlite',
        architecturePattern: 'monolithic',
      } as any);

      expect(
        fs.existsSync(path.join(target, 'Tests/HealthCheckTests.cs')),
      ).toBe(true);

      const output = execSync('dotnet test', {
        cwd: target,
        encoding: 'utf8',
        timeout: 60000,
      });

      expect(output).toContain('Passed!');
      expect(output).toContain('Total:     2');

      // Cleanup
      safeRmSync(target);
    }, 90000);

    it('scaffolds backend-javascript-express and verifies jest tests pass', async () => {
      const target = path.join(TEMP_BASE, 'express-api');
      const source = path.join(TEMPLATES_DIR, 'backend-javascript-express');

      await renderTemplate(source, target, {
        projectName: 'LiveExpressApi',
        templateName: 'backend-javascript-express',
        templatePath: source,
        targetPath: target,
        isFullstack: false,
        language: 'javascript',
        database: '',
        architecturePattern: 'monolithic',
      } as any);

      expect(fs.existsSync(path.join(target, 'tests/index.test.js'))).toBe(
        true,
      );

      const rawOutput = execSync(
        'npx jest --no-color tests/index.test.js 2>&1',
        {
          cwd: target,
          encoding: 'utf8',
          timeout: 30000,
        },
      );
      const output = stripAnsi(rawOutput);

      expect(output).toMatch(/PASS/);
      expect(output).toMatch(/tests[/\\]index\.test\.js/);
      expect(output).toContain('3 passed, 3 total');

      // Cleanup
      safeRmSync(target);
    }, 60000);

    it('scaffolds frontend-javascript-vanillajs and verifies vitest tests pass', async () => {
      const target = path.join(TEMP_BASE, 'vanilla-fe');
      const source = path.join(TEMPLATES_DIR, 'frontend-javascript-vanillajs');

      await renderTemplate(source, target, {
        projectName: 'LiveVanillaFe',
        templateName: 'frontend-javascript-vanillajs',
        templatePath: source,
        targetPath: target,
        isFullstack: false,
        language: 'javascript',
        shadcn: false,
      } as any);

      expect(fs.existsSync(path.join(target, 'tests/counter.test.js'))).toBe(
        true,
      );

      const output = execSync('npx vitest run --reporter=verbose', {
        cwd: target,
        encoding: 'utf8',
        timeout: 45000,
      });

      expect(output).toContain('tests/counter.test.js');
      expect(output).toContain('2 passed');

      // Cleanup
      safeRmSync(target);
    }, 60000);

    it('scaffolds fullstack project and verifies workspace fullstack tests pass', async () => {
      const target = path.join(TEMP_BASE, 'fullstack-monorepo');

      // Mock postProcess so it doesn't trigger external network npm install during IT
      const postProcessSpy = jest
        .spyOn(scaffold, 'postProcess')
        .mockReturnValue(true);

      await scaffold.run({
        projectName: path.relative(process.cwd(), target),
        projectType: 'fullstack',
        language: 'typescript-typescript',
        framework: 'react-express',
        architecturePattern: 'monolithic',
        database: 'postgresql',
        shadcn: false,
      });

      postProcessSpy.mockRestore();

      expect(fs.existsSync(path.join(target, 'tests/fullstack.test.js'))).toBe(
        true,
      );

      const rawOutput = execSync(
        'npx jest --no-color tests/fullstack.test.js 2>&1',
        {
          cwd: target,
          encoding: 'utf8',
          timeout: 30000,
        },
      );
      const output = stripAnsi(rawOutput);

      expect(output).toMatch(/PASS/);
      expect(output).toMatch(/tests[/\\]fullstack\.test\.js/);
      expect(output).toContain('3 passed, 3 total');

      // Cleanup
      safeRmSync(target);
    }, 60000);
  });

  describe('Scaffold Each Project and Verify Test Suite Integrity', () => {
    // 1. Iterate over every Frontend framework
    PROGRAMMING_LANGUAGES.frontend.forEach((lang) => {
      const frameworks = FRONTEND_FRAMEWORKS[lang.value] || [];
      frameworks.forEach((fw) => {
        const templateKey = `frontend-${lang.value}-${fw.value}`;
        const targetDir = path.join(TEMP_BASE, 'audit', templateKey);
        const sourceDir = path.join(TEMPLATES_DIR, templateKey);

        it(`scaffolds ${templateKey}, verifies dedicated tests directory & cleans up`, async () => {
          await renderTemplate(sourceDir, targetDir, {
            projectName: `audit-${lang.value}-${fw.value}`,
            templateName: templateKey,
            templatePath: sourceDir,
            targetPath: targetDir,
            isFullstack: false,
            language: lang.value,
            shadcn: false,
          } as any);

          // Verify tests directory exists and has test files
          const testsDir = path.join(targetDir, 'tests');
          expect(fs.existsSync(testsDir)).toBe(true);

          const testFiles = fs.readdirSync(testsDir);
          const hasTestFile = testFiles.some(
            (f) => f.includes('.test.') || f.includes('.spec.'),
          );
          expect(hasTestFile).toBe(true);

          // Verify test file content is valid and contains assertions
          const testContent = fs.readFileSync(
            path.join(testsDir, testFiles[0]),
            'utf8',
          );
          expect(testContent).toMatch(/describe|it|test/);
          expect(testContent).not.toContain('<%=');

          // Clean up scaffolded project
          safeRmSync(targetDir);
        });
      });
    });

    // 2. Iterate over every Backend framework
    PROGRAMMING_LANGUAGES.backend.forEach((lang) => {
      const frameworks = BACKEND_FRAMEWORKS[lang.value] || [];
      frameworks.forEach((fw) => {
        const templateKey = `backend-${lang.value}-${fw.value}`;
        const targetDir = path.join(TEMP_BASE, 'audit', templateKey);
        const sourceDir = path.join(TEMPLATES_DIR, templateKey);

        it(`scaffolds ${templateKey}, verifies dedicated tests directory & cleans up`, async () => {
          await renderTemplate(sourceDir, targetDir, {
            projectName: `audit-${lang.value}-${fw.value}`,
            templateName: templateKey,
            templatePath: sourceDir,
            targetPath: targetDir,
            isFullstack: false,
            language: lang.value,
            database: 'sqlite',
            architecturePattern: 'monolithic',
          } as any);

          const testsDirName = fs.existsSync(path.join(targetDir, 'tests'))
            ? 'tests'
            : 'Tests';
          const testsDir = path.join(targetDir, testsDirName);
          expect(fs.existsSync(testsDir)).toBe(true);

          const testFiles = fs.readdirSync(testsDir);
          const hasTestFile = testFiles.some(
            (f) =>
              f.includes('.test.') ||
              f.includes('.spec.') ||
              f.startsWith('test_') ||
              f.endsWith('Tests.cs'),
          );
          expect(hasTestFile).toBe(true);

          // Verify test file content is valid and contains assertions
          const testContent = fs.readFileSync(
            path.join(testsDir, testFiles[0]),
            'utf8',
          );
          expect(testContent).toMatch(/describe|it|def test|\[Fact\]/);
          expect(testContent).not.toContain('<%=');

          // Clean up scaffolded project
          safeRmSync(targetDir);
        });
      });
    });
  });
});
