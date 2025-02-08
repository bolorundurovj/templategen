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
            value: 'javascript'
        },
        {
            name: 'TypeScript',
            value: 'typescript'
        }
    ],
    backend: [
        {
            name: 'JavaScript',
            value: 'javascript'
        },
        {
            name: 'TypeScript',
            value: 'typescript'
        },
        {
            name: 'Python',
            value: 'python'
        },
        {
            name: 'C# (DotNet)',
            value: 'csharp'
        }
    ],
    fullstack: [
        {
            name: 'JavaScript - JavaScript',
            value: 'js-js'
        },
        {
            name: 'TypeScript - TypeScript',
            value: 'ts-ts'
        },
        {
            name: 'TypeScript - Python',
            value: 'js-py'
        },
        {
            name: 'TypeScript - C# (DotNet)',
            value: 'ts-csharp'
        }
    ]
}

/**
 * A map of frontend frameworks and their corresponding choices.
 */
export const FRONTEND_FRAMEWORKS: MVChoiceMap = {
    javascript: [
        {
            name: 'React',
            value: 'react'
        },
        {
            name: 'Vue',
            value: 'vue'
        },
        {
            name: 'Svelte',
            value: 'svelte'
        },
        {
            name: 'NextJS',
            value: 'nextjs'
        },
        {
            name: 'NuxtJS',
            value: 'nuxtjs'
        },
        {
            name: 'Vanilla JS',
            value: 'vanillajs'
        }
    ],
    typescript: [
        {
            name: 'Angular',
            value: 'angular'
        },
        {
            name: 'React',
            value: 'react'
        },
        {
            name: 'Vue',
            value: 'vue'
        },
        {
            name: 'Svelte',
            value: 'svelte'
        },
        {
            name: 'NextJS',
            value: 'nextjs'
        },
        {
            name: 'NuxtJS',
            value: 'nuxtjs'
        },
        {
            name: 'Vanilla JS',
            value: 'vanillajs'
        }
    ]
}

/**
 * A map of backend frameworks and their corresponding choices.
 */
export const BACKEND_FRAMEWORKS: MVChoiceMap = {
    javascript: [
        {
            name: 'Express',
            value: 'express'
        },
        {
            name: 'NestJS',
            value: 'nestjs'
        },
        {
            name: 'AdonisJS',
            value: 'adonisjs'
        },
        {
            name: 'Koa',
            value: 'koa'
        },
        {
            name: 'Hapi',
            value: 'hapi'
        },
        {
            name: 'FeathersJS',
            value: 'feathersjs'
        }
    ],
    typescript: [
        {
            name: 'NestJS',
            value: 'nestjs'
        },
        {
            name: 'AdonisJS',
            value: 'adonisjs'
        },
        {
            name: 'TypeORM',
            value: 'typeorm'
        },
        {
            name: 'Loopback',
            value: 'loopback'
        },
        {
            name: 'FeathersJS',
            value: 'feathersjs'
        }
    ],
    python: [
        {
            name: 'Django',
            value: 'django'
        },
        {
            name: 'Flask',
            value: 'flask'
        },
        {
            name: 'FastAPI',
            value: 'fastapi'
        },
        {
            name: 'Sanic',
            value: 'sanic'
        },
        {
            name: 'Tornado',
            value: 'tornado'
        }
    ],
    csharp: [
        {
            name: 'DotNet Core',
            value: 'dotnetcore'
        },
        {
            name: 'Nancy',
            value: 'nancy'
        },
        {
            name: 'ServiceStack',
            value: 'servicestack'
        },
        {
            name: 'WebAPI',
            value: 'webapi'
        }
    ]
}

/**
 * A map of architecture patterns and their corresponding choices.
 */
export const ARCHITECTURE_PATTERNS: MVChoice[] = [
    {
        name: 'Monolithic',
        value: 'monolithic'
    },
    {
        name: 'Microservices',
        value: 'microservices'
    },
    {
        name: 'CQRS',
        value: 'cqrs'
    },
    {
        name: 'MVC',
        value: 'mvc'
    },
    {
        name: 'Event Driven',
        value: 'event-driven'
    }
]

/**
 * A map of github repositories for each project type.
 */
export const REPOS: { [key: string]: string } = {
    'frontend-javascript-react': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-vue': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-svelte': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-nextjs': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-nuxtjs': "https://github.com/bolorundurovj/templategen",
    'frontend-javascript-vanillajs': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-angular': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-react': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-vue': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-svelte': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-nextjs': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-nuxtjs': "https://github.com/bolorundurovj/templategen",
    'frontend-typescript-vanillajs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-javascript-express-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-typescript-nestjs-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-python-django-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'backend-csharp-dotnetcore-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-javascript-javascript-react-express-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mongodb-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-postgresql-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-mysql-event-driven': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-monolithic': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-microservices': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-cqrs': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-mvc': "https://github.com/bolorundurovj/templategen",
    'fullstack-typescript-typescript-angular-nestjs-sqlite-event-driven': "https://github.com/bolorundurovj/templategen",
};
