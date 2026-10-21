import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  jest,
} from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { scaffoldArchitecture } from '../../src/architecture';
import { CliOptions } from '../../src/utils';

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

describe('Architecture Unit Tests', () => {
  const testDir = path.join(
    process.cwd(),
    'scratch',
    'test-architecture-output',
  );

  beforeEach(() => {
    fs.rmSync(testDir, { recursive: true, force: true });
    fs.mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    fs.rmSync(testDir, { recursive: true, force: true });
  });

  const baseOptions: CliOptions = {
    projectName: 'test-api',
    templateName: 'backend-typescript-express',
    templatePath: '',
    targetPath: testDir,
    isFullstack: false,
    language: 'typescript',
  };

  const exists = (...segments: string[]) =>
    fs.existsSync(path.join(testDir, ...segments));
  const read = (...segments: string[]) =>
    fs.readFileSync(path.join(testDir, ...segments), 'utf8');

  it('scaffolds Domain-Driven Design (DDD) structure', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      architecturePattern: 'ddd',
    });

    expect(read('ARCHITECTURE.md')).toContain('Domain-Driven Design (DDD)');
    expect(read('ARCHITECTURE.md')).toContain('`src/domain/item.entity.ts`');
    expect(exists('src', 'domain', 'item.entity.ts')).toBe(true);
    expect(exists('src', 'domain', 'item.repository.ts')).toBe(true);
    expect(
      exists('src', 'infrastructure', 'in-memory-item.repository.ts'),
    ).toBe(true);
    expect(exists('src', 'application', 'create-item.use-case.ts')).toBe(true);
  });

  it('scaffolds CommonJS code for javascript projects', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      templateName: 'backend-javascript-express',
      language: 'javascript',
      architecturePattern: 'ddd',
    });

    const entity = read('src', 'domain', 'item.entity.js');
    expect(entity).toContain('module.exports = { Item }');
    expect(entity).not.toMatch(/^\s*(import|export|interface) /m);
    expect(read('src', 'application', 'create-item.use-case.js')).toContain(
      "require('../domain/item.entity')",
    );
  });

  it('scaffolds CQRS pattern structure', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      architecturePattern: 'cqrs',
    });

    expect(read('ARCHITECTURE.md')).toContain('CQRS');
    expect(exists('src', 'commands', 'create-item.command.ts')).toBe(true);
    expect(exists('src', 'queries', 'get-items.query.ts')).toBe(true);
    expect(exists('src', 'events', 'event-bus.ts')).toBe(true);
    expect(exists('src', 'store', 'item.store.ts')).toBe(true);
  });

  it('scaffolds Microservices with Dockerfile, compose, and gateway on the framework port', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      templateName: 'backend-python-fastapi',
      language: 'python',
      architecturePattern: 'microservices',
    });

    expect(read('docker-compose.yml')).toContain('items-service');
    expect(read('docker-compose.yml')).toContain('PORT=8000');
    expect(read('gateway', 'nginx.conf')).toContain('items-service:8000');
    expect(read('Dockerfile')).toContain('uvicorn');
  });

  it('does not overwrite an existing Dockerfile', () => {
    fs.writeFileSync(path.join(testDir, 'Dockerfile'), 'FROM custom\n');

    scaffoldArchitecture(testDir, {
      ...baseOptions,
      architecturePattern: 'microservices',
    });

    expect(read('Dockerfile')).toBe('FROM custom\n');
  });

  it('scaffolds Event-Driven Architecture with events, bus, producers, and consumers', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      architecturePattern: 'event-driven',
    });

    expect(exists('src', 'events', 'item-created.event.ts')).toBe(true);
    expect(exists('src', 'bus', 'event-bus.ts')).toBe(true);
    expect(exists('src', 'producers', 'item.producer.ts')).toBe(true);
    expect(exists('src', 'consumers', 'item.consumer.ts')).toBe(true);
  });

  it('scaffolds DDD in Python as importable packages', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      templateName: 'backend-python-flask',
      language: 'python',
      architecturePattern: 'ddd',
    });

    expect(exists('src', '__init__.py')).toBe(true);
    expect(exists('src', 'domain', '__init__.py')).toBe(true);
    expect(exists('src', 'domain', 'entities.py')).toBe(true);
    expect(exists('src', 'domain', 'repositories.py')).toBe(true);
    expect(exists('src', 'application', 'use_cases.py')).toBe(true);
    expect(read('src', 'domain', 'entities.py')).toContain('default_factory');
  });

  it('uses the existing app package for Python projects that have one', () => {
    fs.mkdirSync(path.join(testDir, 'app'));

    scaffoldArchitecture(testDir, {
      ...baseOptions,
      templateName: 'backend-python-fastapi',
      language: 'python',
      architecturePattern: 'mvc',
    });

    expect(exists('app', 'mvc', 'controllers.py')).toBe(true);
    expect(exists('app', '__init__.py')).toBe(false);
    expect(exists('src')).toBe(false);
  });

  it('scaffolds C# files under the App namespace regardless of project name', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      projectName: 'my-hyphenated-api',
      templateName: 'backend-csharp-dotnetcore',
      language: 'csharp',
      architecturePattern: 'ddd',
    });

    expect(read('Domain', 'Item.cs')).toContain('namespace App.Domain;');
    expect(exists('Infrastructure', 'InMemoryItemRepository.cs')).toBe(true);
    expect(exists('src')).toBe(false);
  });

  it('scaffolds Monolithic module starter and guide', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      architecturePattern: 'monolithic',
    });

    expect(read('ARCHITECTURE.md')).toContain('Modular Monolith');
    expect(exists('src', 'modules', 'items', 'items.service.ts')).toBe(true);
  });

  it('scaffolds MVC model, view, and controller files', () => {
    scaffoldArchitecture(testDir, {
      ...baseOptions,
      architecturePattern: 'mvc',
    });

    expect(exists('src', 'models', 'item.model.ts')).toBe(true);
    expect(exists('src', 'views', 'item.view.ts')).toBe(true);
    expect(exists('src', 'controllers', 'item.controller.ts')).toBe(true);
  });
});
