/**
 * Interface representing a choice.
 */
export interface MVChoice {
  name: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

/**
 * Interface representing a map of choices.
 */
export interface MVChoiceMap {
  [key: string]: MVChoice[];
}

/**
 * A map of project types and their corresponding choices.
 */
export const PROGRAMMING_LANGUAGES: MVChoiceMap = {
  frontend: [
    {
      name: 'JavaScript',
      value: 'javascript',
    },
    {
      name: 'TypeScript',
      value: 'typescript',
    },
  ],
  backend: [
    {
      name: 'JavaScript',
      value: 'javascript',
    },
    {
      name: 'TypeScript',
      value: 'typescript',
    },
    {
      name: 'Python',
      value: 'python',
    },
    {
      name: 'C# (DotNet)',
      value: 'csharp',
    },
  ],
  fullstack: [
    {
      name: 'JavaScript - JavaScript',
      value: 'javascript-javascript',
    },
    {
      name: 'TypeScript - TypeScript',
      value: 'typescript-typescript',
    },
    {
      name: 'TypeScript - Python',
      value: 'typescript-python',
    },
    {
      name: 'TypeScript - C# (DotNet)',
      value: 'typescript-csharp',
    },
  ],
};

/**
 * A map of frontend frameworks and their corresponding choices.
 */
export const FRONTEND_FRAMEWORKS: MVChoiceMap = {
  javascript: [
    {
      name: 'React',
      value: 'react',
    },
    {
      name: 'Vue',
      value: 'vue',
    },
    {
      name: 'Svelte',
      value: 'svelte',
    },
    {
      name: 'NextJS',
      value: 'nextjs',
    },
    {
      name: 'NuxtJS',
      value: 'nuxtjs',
    },
    {
      name: 'Vanilla JS',
      value: 'vanillajs',
    },
  ],
  typescript: [
    {
      name: 'Angular',
      value: 'angular',
    },
    {
      name: 'React',
      value: 'react',
    },
    {
      name: 'Vue',
      value: 'vue',
    },
    {
      name: 'Svelte',
      value: 'svelte',
    },
    {
      name: 'NextJS',
      value: 'nextjs',
    },
    {
      name: 'NuxtJS',
      value: 'nuxtjs',
    },
    {
      name: 'Vanilla JS',
      value: 'vanillajs',
    },
  ],
};

/**
 * A map of backend frameworks and their corresponding choices.
 */
export const BACKEND_FRAMEWORKS: MVChoiceMap = {
  javascript: [
    {
      name: 'Express',
      value: 'express',
    },
    {
      name: 'NestJS',
      value: 'nestjs',
    },
  ],
  typescript: [
    {
      name: 'NestJS',
      value: 'nestjs',
    },
  ],
  python: [
    {
      name: 'Django',
      value: 'django',
    },
    {
      name: 'Flask',
      value: 'flask',
    },
    {
      name: 'FastAPI',
      value: 'fastapi',
    },
    {
      name: 'Sanic',
      value: 'sanic',
    },
    {
      name: 'Tornado',
      value: 'tornado',
    },
  ],
  csharp: [
    {
      name: 'DotNet Core',
      value: 'dotnetcore',
    },
  ],
};

/**
 * A map of architecture patterns and their corresponding choices.
 */
export const ARCHITECTURE_PATTERNS: MVChoice[] = [
  {
    name: 'Monolithic',
    value: 'monolithic',
  },
  {
    name: 'Microservices',
    value: 'microservices',
  },
  {
    name: 'CQRS',
    value: 'cqrs',
  },
  {
    name: 'MVC',
    value: 'mvc',
  },
  {
    name: 'Event Driven',
    value: 'event-driven',
  },
];

/**
 * A map of databases and their corresponding choices.
 */
export const DATABASES: MVChoice[] = [
  {
    name: 'MongoDB',
    value: 'mongodb',
  },
  {
    name: 'PostgreSQL',
    value: 'postgresql',
  },
  {
    name: 'MySQL',
    value: 'mysql',
  },
  {
    name: 'SQLite',
    value: 'sqlite',
  },
];
