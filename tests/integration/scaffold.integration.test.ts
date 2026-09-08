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

import { renderTemplate } from '../../src/templating';
import * as scaffold from '../../src/scaffold';
import {
  PROGRAMMING_LANGUAGES,
  FRONTEND_FRAMEWORKS,
  BACKEND_FRAMEWORKS,
} from '../../src/choices';

const TEMP_TEST_DIR = path.resolve(
  __dirname,
  '../../scratch/test-scaffold-output',
);
const TEMPLATES_DIR = path.resolve(__dirname, '../../templates');

describe('Scaffolding Integration Tests', () => {
  beforeAll(() => {
    try {
      if (fs.existsSync(TEMP_TEST_DIR)) {
        fs.rmSync(TEMP_TEST_DIR, {
          recursive: true,
          force: true,
          maxRetries: 10,
          retryDelay: 150,
        });
      }
    } catch {}
    fs.mkdirSync(TEMP_TEST_DIR, { recursive: true });
  });

  afterAll(() => {
    try {
      if (fs.existsSync(TEMP_TEST_DIR)) {
        fs.rmSync(TEMP_TEST_DIR, {
          recursive: true,
          force: true,
          maxRetries: 10,
          retryDelay: 150,
        });
      }
    } catch {}
  });

  describe('Frontend Template Conditional Rendering', () => {
    it('renders React JS with shadcn enabled', async () => {
      const target = path.join(TEMP_TEST_DIR, 'react-shadcn-yes');
      const source = path.join(TEMPLATES_DIR, 'frontend-javascript-react');

      await renderTemplate(source, target, {
        projectName: 'react-shadcn-yes',
        templateName: 'frontend-javascript-react',
        templatePath: source,
        targetPath: target,
        isFullstack: false,
        language: 'javascript',
        shadcn: true,
      } as any);

      // Verify files created
      expect(fs.existsSync(path.join(target, 'package.json'))).toBe(true);
      expect(fs.existsSync(path.join(target, 'components.json'))).toBe(true);
      expect(fs.existsSync(path.join(target, 'src/lib/utils.js'))).toBe(true);
      expect(
        fs.existsSync(path.join(target, 'src/components/ui/button.jsx')),
      ).toBe(true);
      expect(fs.existsSync(path.join(target, 'tests/App.test.jsx'))).toBe(true);

      const pkg = fs.readFileSync(path.join(target, 'package.json'), 'utf8');
      expect(pkg).toContain('lucide-react');
      expect(pkg).toContain('tailwind-merge');

      const utils = fs.readFileSync(
        path.join(target, 'src/lib/utils.js'),
        'utf8',
      );
      expect(utils).not.toContain('_SKIP_FILE_');
      expect(utils).toContain('export function cn');
    });

    it('renders React JS with shadcn disabled and skips shadcn files', async () => {
      const target = path.join(TEMP_TEST_DIR, 'react-shadcn-no');
      const source = path.join(TEMPLATES_DIR, 'frontend-javascript-react');

      await renderTemplate(source, target, {
        projectName: 'react-shadcn-no',
        templateName: 'frontend-javascript-react',
        templatePath: source,
        targetPath: target,
        isFullstack: false,
        language: 'javascript',
        shadcn: false,
      } as any);

      expect(fs.existsSync(path.join(target, 'package.json'))).toBe(true);
      expect(fs.existsSync(path.join(target, 'components.json'))).toBe(false);
      expect(fs.existsSync(path.join(target, 'src/lib/utils.js'))).toBe(false);
      expect(
        fs.existsSync(path.join(target, 'src/components/ui/button.jsx')),
      ).toBe(false);

      const pkg = fs.readFileSync(path.join(target, 'package.json'), 'utf8');
      expect(pkg).not.toContain('lucide-react');
    });
  });

  describe('Backend Template Dynamic Database Rendering', () => {
    const testCases = [
      {
        db: 'mongodb',
        expectedPkg: 'mongoose',
        expectedSnippet: 'Connected to MongoDB',
      },
      {
        db: 'postgresql',
        expectedPkg: 'pg',
        expectedSnippet: 'Connected to PostgreSQL',
      },
      {
        db: 'sqlite',
        expectedPkg: 'sqlite3',
        expectedSnippet: 'Connected to SQLite',
      },
      {
        db: '',
        expectedPkg: null,
        expectedSnippet: 'No database configuration required',
      },
    ];

    testCases.forEach(({ db, expectedPkg, expectedSnippet }) => {
      it(`renders TypeScript Express with database: "${db || 'none'}"`, async () => {
        const target = path.join(TEMP_TEST_DIR, `express-${db || 'nodb'}`);
        const source = path.join(TEMPLATES_DIR, 'backend-typescript-express');

        await renderTemplate(source, target, {
          projectName: `express-${db || 'nodb'}`,
          templateName: 'backend-typescript-express',
          templatePath: source,
          targetPath: target,
          isFullstack: false,
          language: 'typescript',
          database: db,
        } as any);

        expect(fs.existsSync(path.join(target, 'package.json'))).toBe(true);
        expect(fs.existsSync(path.join(target, 'src/config/db.ts'))).toBe(true);
        expect(fs.existsSync(path.join(target, 'tests/index.test.ts'))).toBe(
          true,
        );

        const pkg = fs.readFileSync(path.join(target, 'package.json'), 'utf8');
        if (expectedPkg) {
          expect(pkg).toContain(expectedPkg);
        }

        const dbConfig = fs.readFileSync(
          path.join(target, 'src/config/db.ts'),
          'utf8',
        );
        expect(dbConfig).toContain(expectedSnippet);
      });
    });
  });

  describe('Fullstack Nx Monorepo Scaffolding Integration', () => {
    it('scaffolds fullstack project with client, server, root nx.json, and root tests', async () => {
      const projectName = 'test-fullstack-app';
      const targetPath = path.join(TEMP_TEST_DIR, projectName);

      // Mock postProcess so it does not trigger external npm install during unit/IT execution
      const postProcessSpy = jest
        .spyOn(scaffold, 'postProcess')
        .mockReturnValue(true);

      await scaffold.run({
        projectName: path.relative(process.cwd(), targetPath),
        projectType: 'fullstack',
        language: 'typescript-typescript',
        framework: 'react-express',
        architecturePattern: 'monolithic',
        database: 'postgresql',
        shadcn: false,
      });

      expect(postProcessSpy).toHaveBeenCalled();
      postProcessSpy.mockRestore();

      // Check structure
      expect(fs.existsSync(path.join(targetPath, 'apps/client'))).toBe(true);
      expect(fs.existsSync(path.join(targetPath, 'apps/client/tests'))).toBe(
        true,
      );
      expect(fs.existsSync(path.join(targetPath, 'apps/server'))).toBe(true);
      expect(fs.existsSync(path.join(targetPath, 'apps/server/tests'))).toBe(
        true,
      );

      // Check root monorepo files
      expect(fs.existsSync(path.join(targetPath, 'nx.json'))).toBe(true);
      expect(fs.existsSync(path.join(targetPath, 'package.json'))).toBe(true);
      expect(fs.existsSync(path.join(targetPath, 'README.md'))).toBe(true);
      expect(
        fs.existsSync(path.join(targetPath, 'tests/fullstack.test.js')),
      ).toBe(true);

      const rootPkg = JSON.parse(
        fs.readFileSync(path.join(targetPath, 'package.json'), 'utf8'),
      );
      expect(rootPkg.workspaces).toEqual(['apps/*']);
      expect(rootPkg.scripts.dev).toBe('nx run-many -t dev');
      expect(rootPkg.scripts.test).toBe('nx run-many -t test');
    });

    it('scaffolds polyglot fullstack project with python server and project.json', async () => {
      const projectName = 'test-polyglot-app';
      const targetPath = path.join(TEMP_TEST_DIR, projectName);

      const postProcessSpy = jest
        .spyOn(scaffold, 'postProcess')
        .mockReturnValue(true);

      await scaffold.run({
        projectName: path.relative(process.cwd(), targetPath),
        projectType: 'fullstack',
        language: 'typescript-python',
        framework: 'react-fastapi',
        architecturePattern: 'monolithic',
        database: 'mongodb',
        shadcn: false,
      });

      postProcessSpy.mockRestore();

      expect(fs.existsSync(path.join(targetPath, 'apps/client'))).toBe(true);
      expect(fs.existsSync(path.join(targetPath, 'apps/server'))).toBe(true);
      expect(
        fs.existsSync(path.join(targetPath, 'apps/server/project.json')),
      ).toBe(true);

      const projectJson = JSON.parse(
        fs.readFileSync(
          path.join(targetPath, 'apps/server/project.json'),
          'utf8',
        ),
      );
      expect(projectJson.targets.dev.options.command).toContain('uvicorn');
      expect(projectJson.targets.test.options.command).toContain('pytest');
    });
  });

  describe('All Templates Matrix Rendering Integration', () => {
    const assertNoUnrenderedEjs = (dir: string) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          assertNoUnrenderedEjs(fullPath);
        } else if (
          [
            '.json',
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.vue',
            '.svelte',
            '.html',
            '.py',
            '.cs',
            '.toml',
          ].includes(path.extname(entry.name))
        ) {
          const content = fs.readFileSync(fullPath, 'utf8');
          expect(content).not.toContain('<%=');
          expect(content).not.toContain('<%_');
        }
      }
    };

    describe('Frontend Combinations Matrix', () => {
      PROGRAMMING_LANGUAGES.frontend.forEach((lang) => {
        const frameworks = FRONTEND_FRAMEWORKS[lang.value] || [];
        frameworks.forEach((fw) => {
          const templateName = `frontend-${lang.value}-${fw.value}`;
          const targetDir = path.join(TEMP_TEST_DIR, 'matrix', templateName);
          const sourceDir = path.join(TEMPLATES_DIR, templateName);

          it(`renders ${templateName} cleanly without errors or leftover tags`, async () => {
            await renderTemplate(sourceDir, targetDir, {
              projectName: `app-${lang.value}-${fw.value}`,
              templateName,
              templatePath: sourceDir,
              targetPath: targetDir,
              isFullstack: false,
              language: lang.value,
              shadcn: false,
            } as any);

            expect(fs.existsSync(path.join(targetDir, 'package.json'))).toBe(
              true,
            );
            expect(fs.existsSync(path.join(targetDir, 'tests'))).toBe(true);
            assertNoUnrenderedEjs(targetDir);
          });
        });
      });
    });

    describe('Backend Combinations Matrix', () => {
      PROGRAMMING_LANGUAGES.backend.forEach((lang) => {
        const frameworks = BACKEND_FRAMEWORKS[lang.value] || [];
        frameworks.forEach((fw) => {
          const templateName = `backend-${lang.value}-${fw.value}`;
          const targetDir = path.join(TEMP_TEST_DIR, 'matrix', templateName);
          const sourceDir = path.join(TEMPLATES_DIR, templateName);

          it(`renders ${templateName} cleanly without errors or leftover tags`, async () => {
            await renderTemplate(sourceDir, targetDir, {
              projectName: `api-${lang.value}-${fw.value}`,
              templateName,
              templatePath: sourceDir,
              targetPath: targetDir,
              isFullstack: false,
              language: lang.value,
              database: 'sqlite',
              architecturePattern: 'monolithic',
            } as any);

            const hasDep =
              fs.existsSync(path.join(targetDir, 'package.json')) ||
              fs.existsSync(path.join(targetDir, 'requirements.txt')) ||
              fs.readdirSync(targetDir).some((f) => f.endsWith('.csproj'));
            expect(hasDep).toBe(true);

            const hasTests =
              fs.existsSync(path.join(targetDir, 'tests')) ||
              fs.existsSync(path.join(targetDir, 'Tests'));
            expect(hasTests).toBe(true);

            assertNoUnrenderedEjs(targetDir);
          });
        });
      });
    });
  });
});
