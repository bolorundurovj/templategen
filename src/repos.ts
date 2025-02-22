interface IRepo {
  [key: string]: string;
}

/**
 * A map of GitHub repositories for frontend only projects.
 */
const FRONTEND_REPOS: IRepo = {
  'frontend-javascript-react':
    'https://github.com/react-boilerplate/react-boilerplate',
  'frontend-javascript-vue': 'https://github.com/zmts/beauty-vuejs-boilerplate',
  'frontend-javascript-svelte': 'https://github.com/pankod/svelte-boilerplate',
  'frontend-javascript-nextjs':
    'https://github.com/cheatcode/nextjs-boilerplate',
  'frontend-javascript-nuxtjs':
    'https://github.com/dennisfrijlink/nuxt-spa-boilerplate',
  'frontend-javascript-vanillajs':
    'https://github.com/josephlegere/Boilerplate-Vanilla-JS-Frontend-Framework',
  'frontend-typescript-angular':
    'https://github.com/ArslanAmeer/angular-boilerplate',
  'frontend-typescript-react':
    'https://github.com/TheSoftwareHouse/react-starter-boilerplate', //https://github.com/kyronsatt/frontend-boilerplate-with-react-ts
  'frontend-typescript-vue':
    'https://github.com/Vue-Boilerplates/vue-typescript-boilerplate',
  'frontend-typescript-svelte':
    'https://github.com/Narigo/sveltekit-boilerplate',
  'frontend-typescript-nextjs': 'https://github.com/ixartz/Next-js-Boilerplate',
  'frontend-typescript-nuxtjs':
    'https://github.com/typescript-nuxtjs-boilerplate/typescript-nuxtjs-boilerplate',
  'frontend-typescript-vanillajs':
    'https://github.com/doinel1a/vite-vanilla-ts',
};

const BACKEND_JAVASCRIPT_EXPRESS_MONGODB_REPOS: IRepo = {
  'backend-javascript-express-mongodb-monolithic':
    'https://github.com/hagopj13/node-express-boilerplate', //https://github.com/santiq/bulletproof-nodejs
  'backend-javascript-express-mongodb-microservices':
    'https://github.com/ajays97/node-microservice-boilerplate',
  'backend-javascript-express-mongodb-cqrs':
    'https://github.com/fdhhhdjd/Microservice_CQRS_Event-Sourcing',
  'backend-javascript-express-mongodb-mvc':
    'https://github.com/joanjpx/nodejs-mvc',
  'backend-javascript-express-mongodb-event-driven':
    'https://github.com/babkristof/node-sola-boilerplate',
};

const BACKEND_JAVASCRIPT_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'backend-javascript-express-postgresql-monolithic':
    'https://github.com/japananh/node-express-postgres-boilerplate',
  'backend-javascript-express-postgresql-microservices':
    'https://github.com/CunningDJ/node-postgres-microservice-diw',
  'backend-javascript-express-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-express-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-express-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_JAVASCRIPT_EXPRESS_MYSQL_REPOS: IRepo = {
  'backend-javascript-express-mysql-monolithic':
    'https://github.com/mangya/node-express-mysql-boilerplate',
  'backend-javascript-express-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-express-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-express-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-express-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_JAVASCRIPT_EXPRESS_SQLITE_REPOS: IRepo = {
  'backend-javascript-express-sqlite-monolithic':
    'https://github.com/santiq/bulletproof-nodejs',
  'backend-javascript-express-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-express-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-express-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-express-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_JAVASCRIPT_NESTJS_MONGODB_REPOS: IRepo = {
  'backend-javascript-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_JAVASCRIPT_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'backend-javascript-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_JAVASCRIPT_NESTJS_MYSQL_REPOS: IRepo = {
  'backend-javascript-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_JAVASCRIPT_NESTJS_SQLITE_REPOS: IRepo = {
  'backend-javascript-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-javascript-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_JS_REPOS: IRepo = {
  ...BACKEND_JAVASCRIPT_EXPRESS_MONGODB_REPOS,
  ...BACKEND_JAVASCRIPT_EXPRESS_POSTGRESQL_REPOS,
  ...BACKEND_JAVASCRIPT_EXPRESS_MYSQL_REPOS,
  ...BACKEND_JAVASCRIPT_EXPRESS_SQLITE_REPOS,
  ...BACKEND_JAVASCRIPT_NESTJS_MONGODB_REPOS,
  ...BACKEND_JAVASCRIPT_NESTJS_POSTGRESQL_REPOS,
  ...BACKEND_JAVASCRIPT_NESTJS_MYSQL_REPOS,
  ...BACKEND_JAVASCRIPT_NESTJS_SQLITE_REPOS,
};

const BACKEND_TYPESCRIPT_NESTJS_MONGODB_REPOS: IRepo = {
  'backend-typescript-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_TYPESCRIPT_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'backend-typescript-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_TYPESCRIPT_NESTJS_MYSQL_REPOS: IRepo = {
  'backend-typescript-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_TYPESCRIPT_NESTJS_SQLITE_REPOS: IRepo = {
  'backend-typescript-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-typescript-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_TS_REPOS: IRepo = {
  ...BACKEND_TYPESCRIPT_NESTJS_MONGODB_REPOS,
  ...BACKEND_TYPESCRIPT_NESTJS_POSTGRESQL_REPOS,
  ...BACKEND_TYPESCRIPT_NESTJS_MYSQL_REPOS,
  ...BACKEND_TYPESCRIPT_NESTJS_SQLITE_REPOS,
};

const BACKEND_PYTHON_DJANGO_MONGODB_REPOS: IRepo = {
  'backend-python-django-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_DJANGO_POSTGRESQL_REPOS: IRepo = {
  'backend-python-django-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_DJANGO_MYSQL_REPOS: IRepo = {
  'backend-python-django-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_DJANGO_SQLITE_REPOS: IRepo = {
  'backend-python-django-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-django-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_FLASK_MONGODB_REPOS: IRepo = {
  'backend-python-flask-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_FLASK_POSTGRESQL_REPOS: IRepo = {
  'backend-python-flask-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_FLASK_MYSQL_REPOS: IRepo = {
  'backend-python-flask-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_FLASK_SQLITE_REPOS: IRepo = {
  'backend-python-flask-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-flask-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_FASTAPI_MONGODB_REPOS: IRepo = {
  'backend-python-fastapi-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_FASTAPI_POSTGRESQL_REPOS: IRepo = {
  'backend-python-fastapi-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_FASTAPI_MYSQL_REPOS: IRepo = {
  'backend-python-fastapi-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_FASTAPI_SQLITE_REPOS: IRepo = {
  'backend-python-fastapi-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-fastapi-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_SANIC_MONGODB_REPOS: IRepo = {
  'backend-python-sanic-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_SANIC_POSTGRESQL_REPOS: IRepo = {
  'backend-python-sanic-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_SANIC_MYSQL_REPOS: IRepo = {
  'backend-python-sanic-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_SANIC_SQLITE_REPOS: IRepo = {
  'backend-python-sanic-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-sanic-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_TORNADO_MONGODB_REPOS: IRepo = {
  'backend-python-tornado-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_TORNADO_POSTGRESQL_REPOS: IRepo = {
  'backend-python-tornado-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_TORNADO_MYSQL_REPOS: IRepo = {
  'backend-python-tornado-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_TORNADO_SQLITE_REPOS: IRepo = {
  'backend-python-tornado-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-python-tornado-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_PYTHON_REPOS: IRepo = {
  ...BACKEND_PYTHON_DJANGO_MONGODB_REPOS,
  ...BACKEND_PYTHON_DJANGO_POSTGRESQL_REPOS,
  ...BACKEND_PYTHON_DJANGO_MYSQL_REPOS,
  ...BACKEND_PYTHON_DJANGO_SQLITE_REPOS,
  ...BACKEND_PYTHON_FLASK_MONGODB_REPOS,
  ...BACKEND_PYTHON_FLASK_POSTGRESQL_REPOS,
  ...BACKEND_PYTHON_FLASK_MYSQL_REPOS,
  ...BACKEND_PYTHON_FLASK_SQLITE_REPOS,
  ...BACKEND_PYTHON_FASTAPI_MONGODB_REPOS,
  ...BACKEND_PYTHON_FASTAPI_POSTGRESQL_REPOS,
  ...BACKEND_PYTHON_FASTAPI_MYSQL_REPOS,
  ...BACKEND_PYTHON_FASTAPI_SQLITE_REPOS,
  ...BACKEND_PYTHON_SANIC_MONGODB_REPOS,
  ...BACKEND_PYTHON_SANIC_POSTGRESQL_REPOS,
  ...BACKEND_PYTHON_SANIC_MYSQL_REPOS,
  ...BACKEND_PYTHON_SANIC_SQLITE_REPOS,
  ...BACKEND_PYTHON_TORNADO_MONGODB_REPOS,
  ...BACKEND_PYTHON_TORNADO_POSTGRESQL_REPOS,
  ...BACKEND_PYTHON_TORNADO_MYSQL_REPOS,
  ...BACKEND_PYTHON_TORNADO_SQLITE_REPOS,
};

const BACKEND_CSHARP_DOTNETCORE_MONGODB_REPOS: IRepo = {
  'backend-csharp-dotnetcore-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_CSHARP_DOTNETCORE_POSTGRESQL_REPOS: IRepo = {
  'backend-csharp-dotnetcore-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_CSHARP_DOTNETCORE_MYSQL_REPOS: IRepo = {
  'backend-csharp-dotnetcore-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_CSHARP_DOTNETCORE_SQLITE_REPOS: IRepo = {
  'backend-csharp-dotnetcore-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'backend-csharp-dotnetcore-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const BACKEND_CSHARP_REPOS: IRepo = {
  ...BACKEND_CSHARP_DOTNETCORE_MONGODB_REPOS,
  ...BACKEND_CSHARP_DOTNETCORE_POSTGRESQL_REPOS,
  ...BACKEND_CSHARP_DOTNETCORE_MYSQL_REPOS,
  ...BACKEND_CSHARP_DOTNETCORE_SQLITE_REPOS,
};

const BACKEND_REPOS: { [key: string]: string } = {
  ...BACKEND_JS_REPOS,
  ...BACKEND_TS_REPOS,
  ...BACKEND_PYTHON_REPOS,
  ...BACKEND_CSHARP_REPOS,
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-express-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-express-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-express-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-express-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-express-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-react-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-express-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-express-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-express-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-express-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-express-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vue-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-express-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-express-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-express-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-express-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-express-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-express-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-express-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-express-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-express-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-express-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-monolithic':
    'https://github.com/thisismydesign/next-nest',
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-express-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-express-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_POSTGRESQL_REPOS: IRepo =
  {
    'fullstack-javascript-javascript-vanillajs-express-postgresql-monolithic':
      'https://github.com/bolorundurovj/templategen',
    'fullstack-javascript-javascript-vanillajs-express-postgresql-microservices':
      'https://github.com/bolorundurovj/templategen',
    'fullstack-javascript-javascript-vanillajs-express-postgresql-cqrs':
      'https://github.com/bolorundurovj/templategen',
    'fullstack-javascript-javascript-vanillajs-express-postgresql-mvc':
      'https://github.com/bolorundurovj/templategen',
    'fullstack-javascript-javascript-vanillajs-express-postgresql-event-driven':
      'https://github.com/bolorundurovj/templategen',
  };

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-express-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-express-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-express-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_POSTGRESQL_REPOS: IRepo =
  {
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-monolithic':
      'https://github.com/bolorundurovj/templategen',
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-microservices':
      'https://github.com/bolorundurovj/templategen',
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-cqrs':
      'https://github.com/bolorundurovj/templategen',
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-mvc':
      'https://github.com/bolorundurovj/templategen',
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-event-driven':
      'https://github.com/bolorundurovj/templategen',
  };

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_JS_JS_REPOS: IRepo = {
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_SQLITE_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_SQLITE_REPOS,
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-angular-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-angular-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-angular-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-angular-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-angular-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-react-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-react-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-react-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-react-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-react-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-vue-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-vue-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-vue-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-vue-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vue-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-svelte-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-monolithic':
    'https://github.com/thisismydesign/next-nest',
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TS_TS_REPOS: IRepo = {
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_SQLITE_REPOS,
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-django-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-django-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-django-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-django-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-django-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-flask-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-flask-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-flask-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-flask-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-flask-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-fastapi-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-fastapi-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-fastapi-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-fastapi-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-fastapi-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-sanic-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-sanic-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-sanic-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-sanic-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-sanic-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-tornado-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-tornado-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-tornado-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-tornado-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-angular-tornado-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-react-django-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-react-django-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-react-django-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-react-django-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-django-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-react-flask-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-react-flask-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-react-flask-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-react-flask-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-flask-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-react-fastapi-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-react-fastapi-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-react-fastapi-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-react-fastapi-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-fastapi-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-react-sanic-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-react-sanic-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-react-sanic-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-react-sanic-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-sanic-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-react-tornado-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-react-tornado-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-react-tornado-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-react-tornado-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-react-tornado-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-django-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-django-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-django-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-django-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-django-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-flask-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-flask-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-flask-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-flask-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-flask-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-fastapi-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-fastapi-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-fastapi-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-fastapi-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-fastapi-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-sanic-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-sanic-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-sanic-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-sanic-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-sanic-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-tornado-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-tornado-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-tornado-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-tornado-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vue-tornado-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-django-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-django-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-django-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-django-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-django-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-flask-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-flask-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-flask-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-flask-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-flask-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

// Svelte + FastAPI Framework Groups
const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-fastapi-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-fastapi-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-fastapi-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-fastapi-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-fastapi-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-sanic-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-sanic-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-sanic-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-sanic-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-sanic-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-tornado-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-tornado-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-tornado-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-tornado-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-svelte-tornado-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-django-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-django-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-django-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-django-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-django-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-flask-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-flask-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-flask-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-flask-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-flask-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-fastapi-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-fastapi-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-fastapi-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-fastapi-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-fastapi-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-sanic-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-sanic-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-sanic-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-sanic-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-sanic-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-tornado-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-tornado-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-tornado-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-tornado-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nextjs-tornado-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-django-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-django-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-django-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-django-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-django-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-flask-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-flask-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-flask-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-flask-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-flask-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-sanic-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-tornado-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-django-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-django-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-django-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-django-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-django-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-flask-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-flask-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-flask-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-flask-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-flask-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-fastapi-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-sanic-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-sanic-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-sanic-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-sanic-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-sanic-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-tornado-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-tornado-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-tornado-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-tornado-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-python-vanillajs-tornado-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TS_PYTHON_REPOS: IRepo = {
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_SQLITE_REPOS,
};

const FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

// ---------- React groups ----------
const FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-react-dotnetcore-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-monolithic':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-microservices':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-cqrs':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-mvc':
    'https://github.com/bolorundurovj/templategen',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-event-driven':
    'https://github.com/bolorundurovj/templategen',
};

const FULLSTACK_TS_CSHARP_REPOS: IRepo = {
  ...FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_SQLITE_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_MONGODB_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_POSTGRESQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_MYSQL_REPOS,
  ...FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_SQLITE_REPOS,
};

const FULLSTACK_REPOS: { [key: string]: string } = {
  ...FULLSTACK_JS_JS_REPOS,
  ...FULLSTACK_TS_TS_REPOS,
  ...FULLSTACK_TS_PYTHON_REPOS,
  ...FULLSTACK_TS_CSHARP_REPOS,
};

/**
 * A map of GitHub repositories for each project type.
 */
export const REPOS: { [key: string]: string } = {
  ...FRONTEND_REPOS,
  ...BACKEND_REPOS,
  ...FULLSTACK_REPOS,
};
