interface IRepo {
  [key: string]: string;
}

/**
 * A map of GitHub repositories for frontend only projects.
 */
const FRONTEND_REPOS: IRepo = {
  'frontend-javascript-react':
    'https://github.com/bolorundurovj/React-Javascript-Boilerplate',
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
    'https://github.com/bolorundurovj/React-Typescript-Boilerplate',
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
  'backend-javascript-express-postgresql-cqrs': '',
  'backend-javascript-express-postgresql-mvc': '',
  'backend-javascript-express-postgresql-event-driven': '',
};

const BACKEND_JAVASCRIPT_EXPRESS_MYSQL_REPOS: IRepo = {
  'backend-javascript-express-mysql-monolithic':
    'https://github.com/mangya/node-express-mysql-boilerplate',
  'backend-javascript-express-mysql-microservices': '',
  'backend-javascript-express-mysql-cqrs': '',
  'backend-javascript-express-mysql-mvc': '',
  'backend-javascript-express-mysql-event-driven': '',
};

const BACKEND_JAVASCRIPT_EXPRESS_SQLITE_REPOS: IRepo = {
  'backend-javascript-express-sqlite-monolithic':
    'https://github.com/santiq/bulletproof-nodejs',
  'backend-javascript-express-sqlite-microservices': '',
  'backend-javascript-express-sqlite-cqrs': '',
  'backend-javascript-express-sqlite-mvc': '',
  'backend-javascript-express-sqlite-event-driven': '',
};

const BACKEND_JAVASCRIPT_NESTJS_MONGODB_REPOS: IRepo = {
  'backend-javascript-nestjs-mongodb-monolithic': '',
  'backend-javascript-nestjs-mongodb-microservices': '',
  'backend-javascript-nestjs-mongodb-cqrs': '',
  'backend-javascript-nestjs-mongodb-mvc': '',
  'backend-javascript-nestjs-mongodb-event-driven': '',
};

const BACKEND_JAVASCRIPT_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'backend-javascript-nestjs-postgresql-monolithic': '',
  'backend-javascript-nestjs-postgresql-microservices': '',
  'backend-javascript-nestjs-postgresql-cqrs': '',
  'backend-javascript-nestjs-postgresql-mvc': '',
  'backend-javascript-nestjs-postgresql-event-driven': '',
};

const BACKEND_JAVASCRIPT_NESTJS_MYSQL_REPOS: IRepo = {
  'backend-javascript-nestjs-mysql-monolithic': '',
  'backend-javascript-nestjs-mysql-microservices': '',
  'backend-javascript-nestjs-mysql-cqrs': '',
  'backend-javascript-nestjs-mysql-mvc': '',
  'backend-javascript-nestjs-mysql-event-driven': '',
};

const BACKEND_JAVASCRIPT_NESTJS_SQLITE_REPOS: IRepo = {
  'backend-javascript-nestjs-sqlite-monolithic': '',
  'backend-javascript-nestjs-sqlite-microservices': '',
  'backend-javascript-nestjs-sqlite-cqrs': '',
  'backend-javascript-nestjs-sqlite-mvc': '',
  'backend-javascript-nestjs-sqlite-event-driven': '',
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
  'backend-typescript-nestjs-mongodb-monolithic': '',
  'backend-typescript-nestjs-mongodb-microservices': '',
  'backend-typescript-nestjs-mongodb-cqrs': '',
  'backend-typescript-nestjs-mongodb-mvc': '',
  'backend-typescript-nestjs-mongodb-event-driven': '',
};

const BACKEND_TYPESCRIPT_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'backend-typescript-nestjs-postgresql-monolithic': '',
  'backend-typescript-nestjs-postgresql-microservices': '',
  'backend-typescript-nestjs-postgresql-cqrs': '',
  'backend-typescript-nestjs-postgresql-mvc': '',
  'backend-typescript-nestjs-postgresql-event-driven': '',
};

const BACKEND_TYPESCRIPT_NESTJS_MYSQL_REPOS: IRepo = {
  'backend-typescript-nestjs-mysql-monolithic': '',
  'backend-typescript-nestjs-mysql-microservices': '',
  'backend-typescript-nestjs-mysql-cqrs': '',
  'backend-typescript-nestjs-mysql-mvc': '',
  'backend-typescript-nestjs-mysql-event-driven': '',
};

const BACKEND_TYPESCRIPT_NESTJS_SQLITE_REPOS: IRepo = {
  'backend-typescript-nestjs-sqlite-monolithic': '',
  'backend-typescript-nestjs-sqlite-microservices': '',
  'backend-typescript-nestjs-sqlite-cqrs': '',
  'backend-typescript-nestjs-sqlite-mvc': '',
  'backend-typescript-nestjs-sqlite-event-driven': '',
};

const BACKEND_TS_REPOS: IRepo = {
  ...BACKEND_TYPESCRIPT_NESTJS_MONGODB_REPOS,
  ...BACKEND_TYPESCRIPT_NESTJS_POSTGRESQL_REPOS,
  ...BACKEND_TYPESCRIPT_NESTJS_MYSQL_REPOS,
  ...BACKEND_TYPESCRIPT_NESTJS_SQLITE_REPOS,
};

const BACKEND_PYTHON_DJANGO_MONGODB_REPOS: IRepo = {
  'backend-python-django-mongodb-monolithic': '',
  'backend-python-django-mongodb-microservices': '',
  'backend-python-django-mongodb-cqrs': '',
  'backend-python-django-mongodb-mvc': '',
  'backend-python-django-mongodb-event-driven': '',
};

const BACKEND_PYTHON_DJANGO_POSTGRESQL_REPOS: IRepo = {
  'backend-python-django-postgresql-monolithic': '',
  'backend-python-django-postgresql-microservices': '',
  'backend-python-django-postgresql-cqrs': '',
  'backend-python-django-postgresql-mvc': '',
  'backend-python-django-postgresql-event-driven': '',
};

const BACKEND_PYTHON_DJANGO_MYSQL_REPOS: IRepo = {
  'backend-python-django-mysql-monolithic': '',
  'backend-python-django-mysql-microservices': '',
  'backend-python-django-mysql-cqrs': '',
  'backend-python-django-mysql-mvc': '',
  'backend-python-django-mysql-event-driven': '',
};

const BACKEND_PYTHON_DJANGO_SQLITE_REPOS: IRepo = {
  'backend-python-django-sqlite-monolithic': '',
  'backend-python-django-sqlite-microservices': '',
  'backend-python-django-sqlite-cqrs': '',
  'backend-python-django-sqlite-mvc': '',
  'backend-python-django-sqlite-event-driven': '',
};

const BACKEND_PYTHON_FLASK_MONGODB_REPOS: IRepo = {
  'backend-python-flask-mongodb-monolithic': '',
  'backend-python-flask-mongodb-microservices': '',
  'backend-python-flask-mongodb-cqrs': '',
  'backend-python-flask-mongodb-mvc': '',
  'backend-python-flask-mongodb-event-driven': '',
};

const BACKEND_PYTHON_FLASK_POSTGRESQL_REPOS: IRepo = {
  'backend-python-flask-postgresql-monolithic': '',
  'backend-python-flask-postgresql-microservices': '',
  'backend-python-flask-postgresql-cqrs': '',
  'backend-python-flask-postgresql-mvc': '',
  'backend-python-flask-postgresql-event-driven': '',
};

const BACKEND_PYTHON_FLASK_MYSQL_REPOS: IRepo = {
  'backend-python-flask-mysql-monolithic': '',
  'backend-python-flask-mysql-microservices': '',
  'backend-python-flask-mysql-cqrs': '',
  'backend-python-flask-mysql-mvc': '',
  'backend-python-flask-mysql-event-driven': '',
};

const BACKEND_PYTHON_FLASK_SQLITE_REPOS: IRepo = {
  'backend-python-flask-sqlite-monolithic': '',
  'backend-python-flask-sqlite-microservices': '',
  'backend-python-flask-sqlite-cqrs': '',
  'backend-python-flask-sqlite-mvc': '',
  'backend-python-flask-sqlite-event-driven': '',
};

const BACKEND_PYTHON_FASTAPI_MONGODB_REPOS: IRepo = {
  'backend-python-fastapi-mongodb-monolithic': '',
  'backend-python-fastapi-mongodb-microservices': '',
  'backend-python-fastapi-mongodb-cqrs': '',
  'backend-python-fastapi-mongodb-mvc': '',
  'backend-python-fastapi-mongodb-event-driven': '',
};

const BACKEND_PYTHON_FASTAPI_POSTGRESQL_REPOS: IRepo = {
  'backend-python-fastapi-postgresql-monolithic': '',
  'backend-python-fastapi-postgresql-microservices': '',
  'backend-python-fastapi-postgresql-cqrs': '',
  'backend-python-fastapi-postgresql-mvc': '',
  'backend-python-fastapi-postgresql-event-driven': '',
};

const BACKEND_PYTHON_FASTAPI_MYSQL_REPOS: IRepo = {
  'backend-python-fastapi-mysql-monolithic': '',
  'backend-python-fastapi-mysql-microservices': '',
  'backend-python-fastapi-mysql-cqrs': '',
  'backend-python-fastapi-mysql-mvc': '',
  'backend-python-fastapi-mysql-event-driven': '',
};

const BACKEND_PYTHON_FASTAPI_SQLITE_REPOS: IRepo = {
  'backend-python-fastapi-sqlite-monolithic': '',
  'backend-python-fastapi-sqlite-microservices': '',
  'backend-python-fastapi-sqlite-cqrs': '',
  'backend-python-fastapi-sqlite-mvc': '',
  'backend-python-fastapi-sqlite-event-driven': '',
};

const BACKEND_PYTHON_SANIC_MONGODB_REPOS: IRepo = {
  'backend-python-sanic-mongodb-monolithic': '',
  'backend-python-sanic-mongodb-microservices': '',
  'backend-python-sanic-mongodb-cqrs': '',
  'backend-python-sanic-mongodb-mvc': '',
  'backend-python-sanic-mongodb-event-driven': '',
};

const BACKEND_PYTHON_SANIC_POSTGRESQL_REPOS: IRepo = {
  'backend-python-sanic-postgresql-monolithic': '',
  'backend-python-sanic-postgresql-microservices': '',
  'backend-python-sanic-postgresql-cqrs': '',
  'backend-python-sanic-postgresql-mvc': '',
  'backend-python-sanic-postgresql-event-driven': '',
};

const BACKEND_PYTHON_SANIC_MYSQL_REPOS: IRepo = {
  'backend-python-sanic-mysql-monolithic': '',
  'backend-python-sanic-mysql-microservices': '',
  'backend-python-sanic-mysql-cqrs': '',
  'backend-python-sanic-mysql-mvc': '',
  'backend-python-sanic-mysql-event-driven': '',
};

const BACKEND_PYTHON_SANIC_SQLITE_REPOS: IRepo = {
  'backend-python-sanic-sqlite-monolithic': '',
  'backend-python-sanic-sqlite-microservices': '',
  'backend-python-sanic-sqlite-cqrs': '',
  'backend-python-sanic-sqlite-mvc': '',
  'backend-python-sanic-sqlite-event-driven': '',
};

const BACKEND_PYTHON_TORNADO_MONGODB_REPOS: IRepo = {
  'backend-python-tornado-mongodb-monolithic': '',
  'backend-python-tornado-mongodb-microservices': '',
  'backend-python-tornado-mongodb-cqrs': '',
  'backend-python-tornado-mongodb-mvc': '',
  'backend-python-tornado-mongodb-event-driven': '',
};

const BACKEND_PYTHON_TORNADO_POSTGRESQL_REPOS: IRepo = {
  'backend-python-tornado-postgresql-monolithic': '',
  'backend-python-tornado-postgresql-microservices': '',
  'backend-python-tornado-postgresql-cqrs': '',
  'backend-python-tornado-postgresql-mvc': '',
  'backend-python-tornado-postgresql-event-driven': '',
};

const BACKEND_PYTHON_TORNADO_MYSQL_REPOS: IRepo = {
  'backend-python-tornado-mysql-monolithic': '',
  'backend-python-tornado-mysql-microservices': '',
  'backend-python-tornado-mysql-cqrs': '',
  'backend-python-tornado-mysql-mvc': '',
  'backend-python-tornado-mysql-event-driven': '',
};

const BACKEND_PYTHON_TORNADO_SQLITE_REPOS: IRepo = {
  'backend-python-tornado-sqlite-monolithic': '',
  'backend-python-tornado-sqlite-microservices': '',
  'backend-python-tornado-sqlite-cqrs': '',
  'backend-python-tornado-sqlite-mvc': '',
  'backend-python-tornado-sqlite-event-driven': '',
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
  'backend-csharp-dotnetcore-mongodb-monolithic': '',
  'backend-csharp-dotnetcore-mongodb-microservices': '',
  'backend-csharp-dotnetcore-mongodb-cqrs': '',
  'backend-csharp-dotnetcore-mongodb-mvc': '',
  'backend-csharp-dotnetcore-mongodb-event-driven': '',
};

const BACKEND_CSHARP_DOTNETCORE_POSTGRESQL_REPOS: IRepo = {
  'backend-csharp-dotnetcore-postgresql-monolithic': '',
  'backend-csharp-dotnetcore-postgresql-microservices': '',
  'backend-csharp-dotnetcore-postgresql-cqrs': '',
  'backend-csharp-dotnetcore-postgresql-mvc': '',
  'backend-csharp-dotnetcore-postgresql-event-driven': '',
};

const BACKEND_CSHARP_DOTNETCORE_MYSQL_REPOS: IRepo = {
  'backend-csharp-dotnetcore-mysql-monolithic': '',
  'backend-csharp-dotnetcore-mysql-microservices': '',
  'backend-csharp-dotnetcore-mysql-cqrs': '',
  'backend-csharp-dotnetcore-mysql-mvc': '',
  'backend-csharp-dotnetcore-mysql-event-driven': '',
};

const BACKEND_CSHARP_DOTNETCORE_SQLITE_REPOS: IRepo = {
  'backend-csharp-dotnetcore-sqlite-monolithic': '',
  'backend-csharp-dotnetcore-sqlite-microservices': '',
  'backend-csharp-dotnetcore-sqlite-cqrs': '',
  'backend-csharp-dotnetcore-sqlite-mvc': '',
  'backend-csharp-dotnetcore-sqlite-event-driven': '',
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
  'fullstack-javascript-javascript-react-express-mongodb-monolithic': '',
  'fullstack-javascript-javascript-react-express-mongodb-microservices': '',
  'fullstack-javascript-javascript-react-express-mongodb-cqrs': '',
  'fullstack-javascript-javascript-react-express-mongodb-mvc': '',
  'fullstack-javascript-javascript-react-express-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-express-postgresql-monolithic': '',
  'fullstack-javascript-javascript-react-express-postgresql-microservices': '',
  'fullstack-javascript-javascript-react-express-postgresql-cqrs': '',
  'fullstack-javascript-javascript-react-express-postgresql-mvc': '',
  'fullstack-javascript-javascript-react-express-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-express-mysql-monolithic': '',
  'fullstack-javascript-javascript-react-express-mysql-microservices': '',
  'fullstack-javascript-javascript-react-express-mysql-cqrs': '',
  'fullstack-javascript-javascript-react-express-mysql-mvc': '',
  'fullstack-javascript-javascript-react-express-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-express-sqlite-monolithic': '',
  'fullstack-javascript-javascript-react-express-sqlite-microservices': '',
  'fullstack-javascript-javascript-react-express-sqlite-cqrs': '',
  'fullstack-javascript-javascript-react-express-sqlite-mvc': '',
  'fullstack-javascript-javascript-react-express-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-nestjs-mongodb-monolithic': '',
  'fullstack-javascript-javascript-react-nestjs-mongodb-microservices': '',
  'fullstack-javascript-javascript-react-nestjs-mongodb-cqrs': '',
  'fullstack-javascript-javascript-react-nestjs-mongodb-mvc': '',
  'fullstack-javascript-javascript-react-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-nestjs-postgresql-monolithic': '',
  'fullstack-javascript-javascript-react-nestjs-postgresql-microservices': '',
  'fullstack-javascript-javascript-react-nestjs-postgresql-cqrs': '',
  'fullstack-javascript-javascript-react-nestjs-postgresql-mvc': '',
  'fullstack-javascript-javascript-react-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-nestjs-mysql-monolithic': '',
  'fullstack-javascript-javascript-react-nestjs-mysql-microservices': '',
  'fullstack-javascript-javascript-react-nestjs-mysql-cqrs': '',
  'fullstack-javascript-javascript-react-nestjs-mysql-mvc': '',
  'fullstack-javascript-javascript-react-nestjs-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_REACT_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-react-nestjs-sqlite-monolithic': '',
  'fullstack-javascript-javascript-react-nestjs-sqlite-microservices': '',
  'fullstack-javascript-javascript-react-nestjs-sqlite-cqrs': '',
  'fullstack-javascript-javascript-react-nestjs-sqlite-mvc': '',
  'fullstack-javascript-javascript-react-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-express-mongodb-monolithic': '',
  'fullstack-javascript-javascript-vue-express-mongodb-microservices': '',
  'fullstack-javascript-javascript-vue-express-mongodb-cqrs': '',
  'fullstack-javascript-javascript-vue-express-mongodb-mvc': '',
  'fullstack-javascript-javascript-vue-express-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-express-postgresql-monolithic': '',
  'fullstack-javascript-javascript-vue-express-postgresql-microservices': '',
  'fullstack-javascript-javascript-vue-express-postgresql-cqrs': '',
  'fullstack-javascript-javascript-vue-express-postgresql-mvc': '',
  'fullstack-javascript-javascript-vue-express-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-express-mysql-monolithic': '',
  'fullstack-javascript-javascript-vue-express-mysql-microservices': '',
  'fullstack-javascript-javascript-vue-express-mysql-cqrs': '',
  'fullstack-javascript-javascript-vue-express-mysql-mvc': '',
  'fullstack-javascript-javascript-vue-express-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-express-sqlite-monolithic': '',
  'fullstack-javascript-javascript-vue-express-sqlite-microservices': '',
  'fullstack-javascript-javascript-vue-express-sqlite-cqrs': '',
  'fullstack-javascript-javascript-vue-express-sqlite-mvc': '',
  'fullstack-javascript-javascript-vue-express-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-nestjs-mongodb-monolithic': '',
  'fullstack-javascript-javascript-vue-nestjs-mongodb-microservices': '',
  'fullstack-javascript-javascript-vue-nestjs-mongodb-cqrs': '',
  'fullstack-javascript-javascript-vue-nestjs-mongodb-mvc': '',
  'fullstack-javascript-javascript-vue-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-nestjs-postgresql-monolithic': '',
  'fullstack-javascript-javascript-vue-nestjs-postgresql-microservices': '',
  'fullstack-javascript-javascript-vue-nestjs-postgresql-cqrs': '',
  'fullstack-javascript-javascript-vue-nestjs-postgresql-mvc': '',
  'fullstack-javascript-javascript-vue-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-nestjs-mysql-monolithic': '',
  'fullstack-javascript-javascript-vue-nestjs-mysql-microservices': '',
  'fullstack-javascript-javascript-vue-nestjs-mysql-cqrs': '',
  'fullstack-javascript-javascript-vue-nestjs-mysql-mvc': '',
  'fullstack-javascript-javascript-vue-nestjs-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VUE__NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-vue-nestjs-sqlite-monolithic': '',
  'fullstack-javascript-javascript-vue-nestjs-sqlite-microservices': '',
  'fullstack-javascript-javascript-vue-nestjs-sqlite-cqrs': '',
  'fullstack-javascript-javascript-vue-nestjs-sqlite-mvc': '',
  'fullstack-javascript-javascript-vue-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-express-mongodb-monolithic': '',
  'fullstack-javascript-javascript-svelte-express-mongodb-microservices': '',
  'fullstack-javascript-javascript-svelte-express-mongodb-cqrs': '',
  'fullstack-javascript-javascript-svelte-express-mongodb-mvc': '',
  'fullstack-javascript-javascript-svelte-express-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-express-postgresql-monolithic': '',
  'fullstack-javascript-javascript-svelte-express-postgresql-microservices': '',
  'fullstack-javascript-javascript-svelte-express-postgresql-cqrs': '',
  'fullstack-javascript-javascript-svelte-express-postgresql-mvc': '',
  'fullstack-javascript-javascript-svelte-express-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-express-mysql-monolithic': '',
  'fullstack-javascript-javascript-svelte-express-mysql-microservices': '',
  'fullstack-javascript-javascript-svelte-express-mysql-cqrs': '',
  'fullstack-javascript-javascript-svelte-express-mysql-mvc': '',
  'fullstack-javascript-javascript-svelte-express-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-express-sqlite-monolithic': '',
  'fullstack-javascript-javascript-svelte-express-sqlite-microservices': '',
  'fullstack-javascript-javascript-svelte-express-sqlite-cqrs': '',
  'fullstack-javascript-javascript-svelte-express-sqlite-mvc': '',
  'fullstack-javascript-javascript-svelte-express-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-monolithic': '',
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-microservices': '',
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-cqrs': '',
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-mvc': '',
  'fullstack-javascript-javascript-svelte-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-monolithic': '',
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-microservices': '',
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-cqrs': '',
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-mvc': '',
  'fullstack-javascript-javascript-svelte-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-nestjs-mysql-monolithic': '',
  'fullstack-javascript-javascript-svelte-nestjs-mysql-microservices': '',
  'fullstack-javascript-javascript-svelte-nestjs-mysql-cqrs': '',
  'fullstack-javascript-javascript-svelte-nestjs-mysql-mvc': '',
  'fullstack-javascript-javascript-svelte-nestjs-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_SVELTE_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-monolithic': '',
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-microservices': '',
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-cqrs': '',
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-mvc': '',
  'fullstack-javascript-javascript-svelte-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-express-mongodb-monolithic': '',
  'fullstack-javascript-javascript-nextjs-express-mongodb-microservices': '',
  'fullstack-javascript-javascript-nextjs-express-mongodb-cqrs': '',
  'fullstack-javascript-javascript-nextjs-express-mongodb-mvc': '',
  'fullstack-javascript-javascript-nextjs-express-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-express-postgresql-monolithic': '',
  'fullstack-javascript-javascript-nextjs-express-postgresql-microservices': '',
  'fullstack-javascript-javascript-nextjs-express-postgresql-cqrs': '',
  'fullstack-javascript-javascript-nextjs-express-postgresql-mvc': '',
  'fullstack-javascript-javascript-nextjs-express-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-express-mysql-monolithic': '',
  'fullstack-javascript-javascript-nextjs-express-mysql-microservices': '',
  'fullstack-javascript-javascript-nextjs-express-mysql-cqrs': '',
  'fullstack-javascript-javascript-nextjs-express-mysql-mvc': '',
  'fullstack-javascript-javascript-nextjs-express-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-express-sqlite-monolithic': '',
  'fullstack-javascript-javascript-nextjs-express-sqlite-microservices': '',
  'fullstack-javascript-javascript-nextjs-express-sqlite-cqrs': '',
  'fullstack-javascript-javascript-nextjs-express-sqlite-mvc': '',
  'fullstack-javascript-javascript-nextjs-express-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-monolithic': '',
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-microservices': '',
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-cqrs': '',
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-mvc': '',
  'fullstack-javascript-javascript-nextjs-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-monolithic':
    'https://github.com/thisismydesign/next-nest',
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-microservices': '',
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-cqrs': '',
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-mvc': '',
  'fullstack-javascript-javascript-nextjs-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-monolithic': '',
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-microservices': '',
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-cqrs': '',
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-mvc': '',
  'fullstack-javascript-javascript-nextjs-nestjs-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NEXTJS_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-monolithic': '',
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-microservices': '',
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-cqrs': '',
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-mvc': '',
  'fullstack-javascript-javascript-nextjs-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-monolithic': '',
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-microservices': '',
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-cqrs': '',
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-mvc': '',
  'fullstack-javascript-javascript-nuxtjs-express-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-monolithic': '',
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-microservices': '',
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-cqrs': '',
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-mvc': '',
  'fullstack-javascript-javascript-nuxtjs-express-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-express-mysql-monolithic': '',
  'fullstack-javascript-javascript-nuxtjs-express-mysql-microservices': '',
  'fullstack-javascript-javascript-nuxtjs-express-mysql-cqrs': '',
  'fullstack-javascript-javascript-nuxtjs-express-mysql-mvc': '',
  'fullstack-javascript-javascript-nuxtjs-express-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-monolithic': '',
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-microservices': '',
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-cqrs': '',
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-mvc': '',
  'fullstack-javascript-javascript-nuxtjs-express-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-monolithic': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-microservices': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-cqrs': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-mvc': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_POSTGRESQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-monolithic': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-microservices': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-cqrs': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-mvc': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-monolithic': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-microservices': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-cqrs': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-mvc': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_NUXTJS_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-monolithic': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-microservices': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-cqrs': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-mvc': '',
  'fullstack-javascript-javascript-nuxtjs-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-express-mongodb-monolithic': '',
  'fullstack-javascript-javascript-vanillajs-express-mongodb-microservices': '',
  'fullstack-javascript-javascript-vanillajs-express-mongodb-cqrs': '',
  'fullstack-javascript-javascript-vanillajs-express-mongodb-mvc': '',
  'fullstack-javascript-javascript-vanillajs-express-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_POSTGRESQL_REPOS: IRepo =
  {
    'fullstack-javascript-javascript-vanillajs-express-postgresql-monolithic':
      '',
    'fullstack-javascript-javascript-vanillajs-express-postgresql-microservices':
      '',
    'fullstack-javascript-javascript-vanillajs-express-postgresql-cqrs': '',
    'fullstack-javascript-javascript-vanillajs-express-postgresql-mvc': '',
    'fullstack-javascript-javascript-vanillajs-express-postgresql-event-driven':
      '',
  };

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-express-mysql-monolithic': '',
  'fullstack-javascript-javascript-vanillajs-express-mysql-microservices': '',
  'fullstack-javascript-javascript-vanillajs-express-mysql-cqrs': '',
  'fullstack-javascript-javascript-vanillajs-express-mysql-mvc': '',
  'fullstack-javascript-javascript-vanillajs-express-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_EXPRESS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-express-sqlite-monolithic': '',
  'fullstack-javascript-javascript-vanillajs-express-sqlite-microservices': '',
  'fullstack-javascript-javascript-vanillajs-express-sqlite-cqrs': '',
  'fullstack-javascript-javascript-vanillajs-express-sqlite-mvc': '',
  'fullstack-javascript-javascript-vanillajs-express-sqlite-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_MONGODB_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-monolithic': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-microservices': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-cqrs': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-mvc': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_POSTGRESQL_REPOS: IRepo =
  {
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-monolithic':
      '',
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-microservices':
      '',
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-cqrs': '',
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-mvc': '',
    'fullstack-javascript-javascript-vanillajs-nestjs-postgresql-event-driven':
      '',
  };

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_MYSQL_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-monolithic': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-microservices': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-cqrs': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-mvc': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-mysql-event-driven': '',
};

const FULLSTACK_JAVASCRIPT_JAVASCRIPT_VANILLAJS_NESTJS_SQLITE_REPOS: IRepo = {
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-monolithic': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-microservices': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-cqrs': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-mvc': '',
  'fullstack-javascript-javascript-vanillajs-nestjs-sqlite-event-driven': '',
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
  'fullstack-typescript-typescript-angular-nestjs-mongodb-monolithic': '',
  'fullstack-typescript-typescript-angular-nestjs-mongodb-microservices': '',
  'fullstack-typescript-typescript-angular-nestjs-mongodb-cqrs': '',
  'fullstack-typescript-typescript-angular-nestjs-mongodb-mvc': '',
  'fullstack-typescript-typescript-angular-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-angular-nestjs-postgresql-monolithic': '',
  'fullstack-typescript-typescript-angular-nestjs-postgresql-microservices': '',
  'fullstack-typescript-typescript-angular-nestjs-postgresql-cqrs': '',
  'fullstack-typescript-typescript-angular-nestjs-postgresql-mvc': '',
  'fullstack-typescript-typescript-angular-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-angular-nestjs-mysql-monolithic': '',
  'fullstack-typescript-typescript-angular-nestjs-mysql-microservices': '',
  'fullstack-typescript-typescript-angular-nestjs-mysql-cqrs': '',
  'fullstack-typescript-typescript-angular-nestjs-mysql-mvc': '',
  'fullstack-typescript-typescript-angular-nestjs-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_ANGULAR_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-angular-nestjs-sqlite-monolithic': '',
  'fullstack-typescript-typescript-angular-nestjs-sqlite-microservices': '',
  'fullstack-typescript-typescript-angular-nestjs-sqlite-cqrs': '',
  'fullstack-typescript-typescript-angular-nestjs-sqlite-mvc': '',
  'fullstack-typescript-typescript-angular-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-react-nestjs-mongodb-monolithic': '',
  'fullstack-typescript-typescript-react-nestjs-mongodb-microservices': '',
  'fullstack-typescript-typescript-react-nestjs-mongodb-cqrs': '',
  'fullstack-typescript-typescript-react-nestjs-mongodb-mvc': '',
  'fullstack-typescript-typescript-react-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-react-nestjs-postgresql-monolithic': '',
  'fullstack-typescript-typescript-react-nestjs-postgresql-microservices': '',
  'fullstack-typescript-typescript-react-nestjs-postgresql-cqrs': '',
  'fullstack-typescript-typescript-react-nestjs-postgresql-mvc': '',
  'fullstack-typescript-typescript-react-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-react-nestjs-mysql-monolithic': '',
  'fullstack-typescript-typescript-react-nestjs-mysql-microservices': '',
  'fullstack-typescript-typescript-react-nestjs-mysql-cqrs': '',
  'fullstack-typescript-typescript-react-nestjs-mysql-mvc': '',
  'fullstack-typescript-typescript-react-nestjs-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_REACT_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-react-nestjs-sqlite-monolithic': '',
  'fullstack-typescript-typescript-react-nestjs-sqlite-microservices': '',
  'fullstack-typescript-typescript-react-nestjs-sqlite-cqrs': '',
  'fullstack-typescript-typescript-react-nestjs-sqlite-mvc': '',
  'fullstack-typescript-typescript-react-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-vue-nestjs-mongodb-monolithic': '',
  'fullstack-typescript-typescript-vue-nestjs-mongodb-microservices': '',
  'fullstack-typescript-typescript-vue-nestjs-mongodb-cqrs': '',
  'fullstack-typescript-typescript-vue-nestjs-mongodb-mvc': '',
  'fullstack-typescript-typescript-vue-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-vue-nestjs-postgresql-monolithic': '',
  'fullstack-typescript-typescript-vue-nestjs-postgresql-microservices': '',
  'fullstack-typescript-typescript-vue-nestjs-postgresql-cqrs': '',
  'fullstack-typescript-typescript-vue-nestjs-postgresql-mvc': '',
  'fullstack-typescript-typescript-vue-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-vue-nestjs-mysql-monolithic': '',
  'fullstack-typescript-typescript-vue-nestjs-mysql-microservices': '',
  'fullstack-typescript-typescript-vue-nestjs-mysql-cqrs': '',
  'fullstack-typescript-typescript-vue-nestjs-mysql-mvc': '',
  'fullstack-typescript-typescript-vue-nestjs-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VUE_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-vue-nestjs-sqlite-monolithic': '',
  'fullstack-typescript-typescript-vue-nestjs-sqlite-microservices': '',
  'fullstack-typescript-typescript-vue-nestjs-sqlite-cqrs': '',
  'fullstack-typescript-typescript-vue-nestjs-sqlite-mvc': '',
  'fullstack-typescript-typescript-vue-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-monolithic': '',
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-microservices': '',
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-cqrs': '',
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-mvc': '',
  'fullstack-typescript-typescript-svelte-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-monolithic': '',
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-microservices': '',
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-cqrs': '',
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-mvc': '',
  'fullstack-typescript-typescript-svelte-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-svelte-nestjs-mysql-monolithic': '',
  'fullstack-typescript-typescript-svelte-nestjs-mysql-microservices': '',
  'fullstack-typescript-typescript-svelte-nestjs-mysql-cqrs': '',
  'fullstack-typescript-typescript-svelte-nestjs-mysql-mvc': '',
  'fullstack-typescript-typescript-svelte-nestjs-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_SVELTE_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-monolithic': '',
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-microservices': '',
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-cqrs': '',
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-mvc': '',
  'fullstack-typescript-typescript-svelte-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-monolithic': '',
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-microservices': '',
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-cqrs': '',
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-mvc': '',
  'fullstack-typescript-typescript-nextjs-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-monolithic':
    'https://github.com/thisismydesign/next-nest',
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-microservices': '',
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-cqrs': '',
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-mvc': '',
  'fullstack-typescript-typescript-nextjs-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-monolithic': '',
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-microservices': '',
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-cqrs': '',
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-mvc': '',
  'fullstack-typescript-typescript-nextjs-nestjs-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NEXTJS_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-monolithic': '',
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-microservices': '',
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-cqrs': '',
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-mvc': '',
  'fullstack-typescript-typescript-nextjs-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-monolithic': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-microservices': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-cqrs': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-mvc': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-monolithic': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-microservices': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-cqrs': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-mvc': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-monolithic': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-microservices': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-cqrs': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-mvc': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_NUXTJS_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-monolithic': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-microservices': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-cqrs': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-mvc': '',
  'fullstack-typescript-typescript-nuxtjs-nestjs-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_MONGODB_REPOS = {
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-monolithic': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-microservices': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-cqrs': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-mvc': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_POSTGRESQL_REPOS = {
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-monolithic': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-microservices':
    '',
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-cqrs': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-mvc': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-postgresql-event-driven':
    '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_MYSQL_REPOS = {
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-monolithic': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-microservices': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-cqrs': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-mvc': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_TYPESCRIPT_VANILLAJS_NESTJS_SQLITE_REPOS = {
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-monolithic': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-microservices': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-cqrs': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-mvc': '',
  'fullstack-typescript-typescript-vanillajs-nestjs-sqlite-event-driven': '',
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
  'fullstack-typescript-python-angular-django-mongodb-monolithic': '',
  'fullstack-typescript-python-angular-django-mongodb-microservices': '',
  'fullstack-typescript-python-angular-django-mongodb-cqrs': '',
  'fullstack-typescript-python-angular-django-mongodb-mvc': '',
  'fullstack-typescript-python-angular-django-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-django-postgresql-monolithic': '',
  'fullstack-typescript-python-angular-django-postgresql-microservices': '',
  'fullstack-typescript-python-angular-django-postgresql-cqrs': '',
  'fullstack-typescript-python-angular-django-postgresql-mvc': '',
  'fullstack-typescript-python-angular-django-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-django-mysql-monolithic': '',
  'fullstack-typescript-python-angular-django-mysql-microservices': '',
  'fullstack-typescript-python-angular-django-mysql-cqrs': '',
  'fullstack-typescript-python-angular-django-mysql-mvc': '',
  'fullstack-typescript-python-angular-django-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_DJANGO_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-django-sqlite-monolithic': '',
  'fullstack-typescript-python-angular-django-sqlite-microservices': '',
  'fullstack-typescript-python-angular-django-sqlite-cqrs': '',
  'fullstack-typescript-python-angular-django-sqlite-mvc': '',
  'fullstack-typescript-python-angular-django-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-flask-mongodb-monolithic': '',
  'fullstack-typescript-python-angular-flask-mongodb-microservices': '',
  'fullstack-typescript-python-angular-flask-mongodb-cqrs': '',
  'fullstack-typescript-python-angular-flask-mongodb-mvc': '',
  'fullstack-typescript-python-angular-flask-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-flask-postgresql-monolithic': '',
  'fullstack-typescript-python-angular-flask-postgresql-microservices': '',
  'fullstack-typescript-python-angular-flask-postgresql-cqrs': '',
  'fullstack-typescript-python-angular-flask-postgresql-mvc': '',
  'fullstack-typescript-python-angular-flask-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-flask-mysql-monolithic': '',
  'fullstack-typescript-python-angular-flask-mysql-microservices': '',
  'fullstack-typescript-python-angular-flask-mysql-cqrs': '',
  'fullstack-typescript-python-angular-flask-mysql-mvc': '',
  'fullstack-typescript-python-angular-flask-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FLASK_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-flask-sqlite-monolithic': '',
  'fullstack-typescript-python-angular-flask-sqlite-microservices': '',
  'fullstack-typescript-python-angular-flask-sqlite-cqrs': '',
  'fullstack-typescript-python-angular-flask-sqlite-mvc': '',
  'fullstack-typescript-python-angular-flask-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-fastapi-mongodb-monolithic': '',
  'fullstack-typescript-python-angular-fastapi-mongodb-microservices': '',
  'fullstack-typescript-python-angular-fastapi-mongodb-cqrs': '',
  'fullstack-typescript-python-angular-fastapi-mongodb-mvc': '',
  'fullstack-typescript-python-angular-fastapi-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-fastapi-postgresql-monolithic': '',
  'fullstack-typescript-python-angular-fastapi-postgresql-microservices': '',
  'fullstack-typescript-python-angular-fastapi-postgresql-cqrs': '',
  'fullstack-typescript-python-angular-fastapi-postgresql-mvc': '',
  'fullstack-typescript-python-angular-fastapi-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-fastapi-mysql-monolithic': '',
  'fullstack-typescript-python-angular-fastapi-mysql-microservices': '',
  'fullstack-typescript-python-angular-fastapi-mysql-cqrs': '',
  'fullstack-typescript-python-angular-fastapi-mysql-mvc': '',
  'fullstack-typescript-python-angular-fastapi-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_FASTAPI_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-fastapi-sqlite-monolithic': '',
  'fullstack-typescript-python-angular-fastapi-sqlite-microservices': '',
  'fullstack-typescript-python-angular-fastapi-sqlite-cqrs': '',
  'fullstack-typescript-python-angular-fastapi-sqlite-mvc': '',
  'fullstack-typescript-python-angular-fastapi-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-sanic-mongodb-monolithic': '',
  'fullstack-typescript-python-angular-sanic-mongodb-microservices': '',
  'fullstack-typescript-python-angular-sanic-mongodb-cqrs': '',
  'fullstack-typescript-python-angular-sanic-mongodb-mvc': '',
  'fullstack-typescript-python-angular-sanic-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-sanic-postgresql-monolithic': '',
  'fullstack-typescript-python-angular-sanic-postgresql-microservices': '',
  'fullstack-typescript-python-angular-sanic-postgresql-cqrs': '',
  'fullstack-typescript-python-angular-sanic-postgresql-mvc': '',
  'fullstack-typescript-python-angular-sanic-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-sanic-mysql-monolithic': '',
  'fullstack-typescript-python-angular-sanic-mysql-microservices': '',
  'fullstack-typescript-python-angular-sanic-mysql-cqrs': '',
  'fullstack-typescript-python-angular-sanic-mysql-mvc': '',
  'fullstack-typescript-python-angular-sanic-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_SANIC_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-sanic-sqlite-monolithic': '',
  'fullstack-typescript-python-angular-sanic-sqlite-microservices': '',
  'fullstack-typescript-python-angular-sanic-sqlite-cqrs': '',
  'fullstack-typescript-python-angular-sanic-sqlite-mvc': '',
  'fullstack-typescript-python-angular-sanic-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-angular-tornado-mongodb-monolithic': '',
  'fullstack-typescript-python-angular-tornado-mongodb-microservices': '',
  'fullstack-typescript-python-angular-tornado-mongodb-cqrs': '',
  'fullstack-typescript-python-angular-tornado-mongodb-mvc': '',
  'fullstack-typescript-python-angular-tornado-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-tornado-postgresql-monolithic': '',
  'fullstack-typescript-python-angular-tornado-postgresql-microservices': '',
  'fullstack-typescript-python-angular-tornado-postgresql-cqrs': '',
  'fullstack-typescript-python-angular-tornado-postgresql-mvc': '',
  'fullstack-typescript-python-angular-tornado-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-angular-tornado-mysql-monolithic': '',
  'fullstack-typescript-python-angular-tornado-mysql-microservices': '',
  'fullstack-typescript-python-angular-tornado-mysql-cqrs': '',
  'fullstack-typescript-python-angular-tornado-mysql-mvc': '',
  'fullstack-typescript-python-angular-tornado-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_ANGULAR_TORNADO_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-angular-tornado-sqlite-monolithic': '',
  'fullstack-typescript-python-angular-tornado-sqlite-microservices': '',
  'fullstack-typescript-python-angular-tornado-sqlite-cqrs': '',
  'fullstack-typescript-python-angular-tornado-sqlite-mvc': '',
  'fullstack-typescript-python-angular-tornado-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-react-django-mongodb-monolithic': '',
  'fullstack-typescript-python-react-django-mongodb-microservices': '',
  'fullstack-typescript-python-react-django-mongodb-cqrs': '',
  'fullstack-typescript-python-react-django-mongodb-mvc': '',
  'fullstack-typescript-python-react-django-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-react-django-postgresql-monolithic': '',
  'fullstack-typescript-python-react-django-postgresql-microservices': '',
  'fullstack-typescript-python-react-django-postgresql-cqrs': '',
  'fullstack-typescript-python-react-django-postgresql-mvc': '',
  'fullstack-typescript-python-react-django-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-react-django-mysql-monolithic': '',
  'fullstack-typescript-python-react-django-mysql-microservices': '',
  'fullstack-typescript-python-react-django-mysql-cqrs': '',
  'fullstack-typescript-python-react-django-mysql-mvc': '',
  'fullstack-typescript-python-react-django-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_DJANGO_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-react-django-sqlite-monolithic': '',
  'fullstack-typescript-python-react-django-sqlite-microservices': '',
  'fullstack-typescript-python-react-django-sqlite-cqrs': '',
  'fullstack-typescript-python-react-django-sqlite-mvc': '',
  'fullstack-typescript-python-react-django-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_MONGODB_REPOS: IRepo = {
  'fullstack-typescript-python-react-flask-mongodb-monolithic': '',
  'fullstack-typescript-python-react-flask-mongodb-microservices': '',
  'fullstack-typescript-python-react-flask-mongodb-cqrs': '',
  'fullstack-typescript-python-react-flask-mongodb-mvc': '',
  'fullstack-typescript-python-react-flask-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_POSTGRESQL_REPOS: IRepo = {
  'fullstack-typescript-python-react-flask-postgresql-monolithic': '',
  'fullstack-typescript-python-react-flask-postgresql-microservices': '',
  'fullstack-typescript-python-react-flask-postgresql-cqrs': '',
  'fullstack-typescript-python-react-flask-postgresql-mvc': '',
  'fullstack-typescript-python-react-flask-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_MYSQL_REPOS: IRepo = {
  'fullstack-typescript-python-react-flask-mysql-monolithic': '',
  'fullstack-typescript-python-react-flask-mysql-microservices': '',
  'fullstack-typescript-python-react-flask-mysql-cqrs': '',
  'fullstack-typescript-python-react-flask-mysql-mvc': '',
  'fullstack-typescript-python-react-flask-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FLASK_SQLITE_REPOS: IRepo = {
  'fullstack-typescript-python-react-flask-sqlite-monolithic': '',
  'fullstack-typescript-python-react-flask-sqlite-microservices': '',
  'fullstack-typescript-python-react-flask-sqlite-cqrs': '',
  'fullstack-typescript-python-react-flask-sqlite-mvc': '',
  'fullstack-typescript-python-react-flask-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-react-fastapi-mongodb-monolithic': '',
  'fullstack-typescript-python-react-fastapi-mongodb-microservices': '',
  'fullstack-typescript-python-react-fastapi-mongodb-cqrs': '',
  'fullstack-typescript-python-react-fastapi-mongodb-mvc': '',
  'fullstack-typescript-python-react-fastapi-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-react-fastapi-postgresql-monolithic': '',
  'fullstack-typescript-python-react-fastapi-postgresql-microservices': '',
  'fullstack-typescript-python-react-fastapi-postgresql-cqrs': '',
  'fullstack-typescript-python-react-fastapi-postgresql-mvc': '',
  'fullstack-typescript-python-react-fastapi-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-react-fastapi-mysql-monolithic': '',
  'fullstack-typescript-python-react-fastapi-mysql-microservices': '',
  'fullstack-typescript-python-react-fastapi-mysql-cqrs': '',
  'fullstack-typescript-python-react-fastapi-mysql-mvc': '',
  'fullstack-typescript-python-react-fastapi-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-react-fastapi-sqlite-monolithic': '',
  'fullstack-typescript-python-react-fastapi-sqlite-microservices': '',
  'fullstack-typescript-python-react-fastapi-sqlite-cqrs': '',
  'fullstack-typescript-python-react-fastapi-sqlite-mvc': '',
  'fullstack-typescript-python-react-fastapi-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-react-sanic-mongodb-monolithic': '',
  'fullstack-typescript-python-react-sanic-mongodb-microservices': '',
  'fullstack-typescript-python-react-sanic-mongodb-cqrs': '',
  'fullstack-typescript-python-react-sanic-mongodb-mvc': '',
  'fullstack-typescript-python-react-sanic-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-react-sanic-postgresql-monolithic': '',
  'fullstack-typescript-python-react-sanic-postgresql-microservices': '',
  'fullstack-typescript-python-react-sanic-postgresql-cqrs': '',
  'fullstack-typescript-python-react-sanic-postgresql-mvc': '',
  'fullstack-typescript-python-react-sanic-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-react-sanic-mysql-monolithic': '',
  'fullstack-typescript-python-react-sanic-mysql-microservices': '',
  'fullstack-typescript-python-react-sanic-mysql-cqrs': '',
  'fullstack-typescript-python-react-sanic-mysql-mvc': '',
  'fullstack-typescript-python-react-sanic-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-react-sanic-sqlite-monolithic': '',
  'fullstack-typescript-python-react-sanic-sqlite-microservices': '',
  'fullstack-typescript-python-react-sanic-sqlite-cqrs': '',
  'fullstack-typescript-python-react-sanic-sqlite-mvc': '',
  'fullstack-typescript-python-react-sanic-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-react-tornado-mongodb-monolithic': '',
  'fullstack-typescript-python-react-tornado-mongodb-microservices': '',
  'fullstack-typescript-python-react-tornado-mongodb-cqrs': '',
  'fullstack-typescript-python-react-tornado-mongodb-mvc': '',
  'fullstack-typescript-python-react-tornado-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-react-tornado-postgresql-monolithic': '',
  'fullstack-typescript-python-react-tornado-postgresql-microservices': '',
  'fullstack-typescript-python-react-tornado-postgresql-cqrs': '',
  'fullstack-typescript-python-react-tornado-postgresql-mvc': '',
  'fullstack-typescript-python-react-tornado-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-react-tornado-mysql-monolithic': '',
  'fullstack-typescript-python-react-tornado-mysql-microservices': '',
  'fullstack-typescript-python-react-tornado-mysql-cqrs': '',
  'fullstack-typescript-python-react-tornado-mysql-mvc': '',
  'fullstack-typescript-python-react-tornado-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_REACT_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-react-tornado-sqlite-monolithic': '',
  'fullstack-typescript-python-react-tornado-sqlite-microservices': '',
  'fullstack-typescript-python-react-tornado-sqlite-cqrs': '',
  'fullstack-typescript-python-react-tornado-sqlite-mvc': '',
  'fullstack-typescript-python-react-tornado-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-django-mongodb-monolithic': '',
  'fullstack-typescript-python-vue-django-mongodb-microservices': '',
  'fullstack-typescript-python-vue-django-mongodb-cqrs': '',
  'fullstack-typescript-python-vue-django-mongodb-mvc': '',
  'fullstack-typescript-python-vue-django-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-django-postgresql-monolithic': '',
  'fullstack-typescript-python-vue-django-postgresql-microservices': '',
  'fullstack-typescript-python-vue-django-postgresql-cqrs': '',
  'fullstack-typescript-python-vue-django-postgresql-mvc': '',
  'fullstack-typescript-python-vue-django-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-django-mysql-monolithic': '',
  'fullstack-typescript-python-vue-django-mysql-microservices': '',
  'fullstack-typescript-python-vue-django-mysql-cqrs': '',
  'fullstack-typescript-python-vue-django-mysql-mvc': '',
  'fullstack-typescript-python-vue-django-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-django-sqlite-monolithic': '',
  'fullstack-typescript-python-vue-django-sqlite-microservices': '',
  'fullstack-typescript-python-vue-django-sqlite-cqrs': '',
  'fullstack-typescript-python-vue-django-sqlite-mvc': '',
  'fullstack-typescript-python-vue-django-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-flask-mongodb-monolithic': '',
  'fullstack-typescript-python-vue-flask-mongodb-microservices': '',
  'fullstack-typescript-python-vue-flask-mongodb-cqrs': '',
  'fullstack-typescript-python-vue-flask-mongodb-mvc': '',
  'fullstack-typescript-python-vue-flask-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-flask-postgresql-monolithic': '',
  'fullstack-typescript-python-vue-flask-postgresql-microservices': '',
  'fullstack-typescript-python-vue-flask-postgresql-cqrs': '',
  'fullstack-typescript-python-vue-flask-postgresql-mvc': '',
  'fullstack-typescript-python-vue-flask-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-flask-mysql-monolithic': '',
  'fullstack-typescript-python-vue-flask-mysql-microservices': '',
  'fullstack-typescript-python-vue-flask-mysql-cqrs': '',
  'fullstack-typescript-python-vue-flask-mysql-mvc': '',
  'fullstack-typescript-python-vue-flask-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-flask-sqlite-monolithic': '',
  'fullstack-typescript-python-vue-flask-sqlite-microservices': '',
  'fullstack-typescript-python-vue-flask-sqlite-cqrs': '',
  'fullstack-typescript-python-vue-flask-sqlite-mvc': '',
  'fullstack-typescript-python-vue-flask-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-fastapi-mongodb-monolithic': '',
  'fullstack-typescript-python-vue-fastapi-mongodb-microservices': '',
  'fullstack-typescript-python-vue-fastapi-mongodb-cqrs': '',
  'fullstack-typescript-python-vue-fastapi-mongodb-mvc': '',
  'fullstack-typescript-python-vue-fastapi-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-fastapi-postgresql-monolithic': '',
  'fullstack-typescript-python-vue-fastapi-postgresql-microservices': '',
  'fullstack-typescript-python-vue-fastapi-postgresql-cqrs': '',
  'fullstack-typescript-python-vue-fastapi-postgresql-mvc': '',
  'fullstack-typescript-python-vue-fastapi-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-fastapi-mysql-monolithic': '',
  'fullstack-typescript-python-vue-fastapi-mysql-microservices': '',
  'fullstack-typescript-python-vue-fastapi-mysql-cqrs': '',
  'fullstack-typescript-python-vue-fastapi-mysql-mvc': '',
  'fullstack-typescript-python-vue-fastapi-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-fastapi-sqlite-monolithic': '',
  'fullstack-typescript-python-vue-fastapi-sqlite-microservices': '',
  'fullstack-typescript-python-vue-fastapi-sqlite-cqrs': '',
  'fullstack-typescript-python-vue-fastapi-sqlite-mvc': '',
  'fullstack-typescript-python-vue-fastapi-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-sanic-mongodb-monolithic': '',
  'fullstack-typescript-python-vue-sanic-mongodb-microservices': '',
  'fullstack-typescript-python-vue-sanic-mongodb-cqrs': '',
  'fullstack-typescript-python-vue-sanic-mongodb-mvc': '',
  'fullstack-typescript-python-vue-sanic-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-sanic-postgresql-monolithic': '',
  'fullstack-typescript-python-vue-sanic-postgresql-microservices': '',
  'fullstack-typescript-python-vue-sanic-postgresql-cqrs': '',
  'fullstack-typescript-python-vue-sanic-postgresql-mvc': '',
  'fullstack-typescript-python-vue-sanic-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-sanic-mysql-monolithic': '',
  'fullstack-typescript-python-vue-sanic-mysql-microservices': '',
  'fullstack-typescript-python-vue-sanic-mysql-cqrs': '',
  'fullstack-typescript-python-vue-sanic-mysql-mvc': '',
  'fullstack-typescript-python-vue-sanic-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-sanic-sqlite-monolithic': '',
  'fullstack-typescript-python-vue-sanic-sqlite-microservices': '',
  'fullstack-typescript-python-vue-sanic-sqlite-cqrs': '',
  'fullstack-typescript-python-vue-sanic-sqlite-mvc': '',
  'fullstack-typescript-python-vue-sanic-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-vue-tornado-mongodb-monolithic': '',
  'fullstack-typescript-python-vue-tornado-mongodb-microservices': '',
  'fullstack-typescript-python-vue-tornado-mongodb-cqrs': '',
  'fullstack-typescript-python-vue-tornado-mongodb-mvc': '',
  'fullstack-typescript-python-vue-tornado-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vue-tornado-postgresql-monolithic': '',
  'fullstack-typescript-python-vue-tornado-postgresql-microservices': '',
  'fullstack-typescript-python-vue-tornado-postgresql-cqrs': '',
  'fullstack-typescript-python-vue-tornado-postgresql-mvc': '',
  'fullstack-typescript-python-vue-tornado-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-vue-tornado-mysql-monolithic': '',
  'fullstack-typescript-python-vue-tornado-mysql-microservices': '',
  'fullstack-typescript-python-vue-tornado-mysql-cqrs': '',
  'fullstack-typescript-python-vue-tornado-mysql-mvc': '',
  'fullstack-typescript-python-vue-tornado-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VUE_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-vue-tornado-sqlite-monolithic': '',
  'fullstack-typescript-python-vue-tornado-sqlite-microservices': '',
  'fullstack-typescript-python-vue-tornado-sqlite-cqrs': '',
  'fullstack-typescript-python-vue-tornado-sqlite-mvc': '',
  'fullstack-typescript-python-vue-tornado-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-django-mongodb-monolithic': '',
  'fullstack-typescript-python-svelte-django-mongodb-microservices': '',
  'fullstack-typescript-python-svelte-django-mongodb-cqrs': '',
  'fullstack-typescript-python-svelte-django-mongodb-mvc': '',
  'fullstack-typescript-python-svelte-django-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-django-postgresql-monolithic': '',
  'fullstack-typescript-python-svelte-django-postgresql-microservices': '',
  'fullstack-typescript-python-svelte-django-postgresql-cqrs': '',
  'fullstack-typescript-python-svelte-django-postgresql-mvc': '',
  'fullstack-typescript-python-svelte-django-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-django-mysql-monolithic': '',
  'fullstack-typescript-python-svelte-django-mysql-microservices': '',
  'fullstack-typescript-python-svelte-django-mysql-cqrs': '',
  'fullstack-typescript-python-svelte-django-mysql-mvc': '',
  'fullstack-typescript-python-svelte-django-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-django-sqlite-monolithic': '',
  'fullstack-typescript-python-svelte-django-sqlite-microservices': '',
  'fullstack-typescript-python-svelte-django-sqlite-cqrs': '',
  'fullstack-typescript-python-svelte-django-sqlite-mvc': '',
  'fullstack-typescript-python-svelte-django-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-flask-mongodb-monolithic': '',
  'fullstack-typescript-python-svelte-flask-mongodb-microservices': '',
  'fullstack-typescript-python-svelte-flask-mongodb-cqrs': '',
  'fullstack-typescript-python-svelte-flask-mongodb-mvc': '',
  'fullstack-typescript-python-svelte-flask-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-flask-postgresql-monolithic': '',
  'fullstack-typescript-python-svelte-flask-postgresql-microservices': '',
  'fullstack-typescript-python-svelte-flask-postgresql-cqrs': '',
  'fullstack-typescript-python-svelte-flask-postgresql-mvc': '',
  'fullstack-typescript-python-svelte-flask-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-flask-mysql-monolithic': '',
  'fullstack-typescript-python-svelte-flask-mysql-microservices': '',
  'fullstack-typescript-python-svelte-flask-mysql-cqrs': '',
  'fullstack-typescript-python-svelte-flask-mysql-mvc': '',
  'fullstack-typescript-python-svelte-flask-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-flask-sqlite-monolithic': '',
  'fullstack-typescript-python-svelte-flask-sqlite-microservices': '',
  'fullstack-typescript-python-svelte-flask-sqlite-cqrs': '',
  'fullstack-typescript-python-svelte-flask-sqlite-mvc': '',
  'fullstack-typescript-python-svelte-flask-sqlite-event-driven': '',
};

// Svelte + FastAPI Framework Groups
const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-fastapi-mongodb-monolithic': '',
  'fullstack-typescript-python-svelte-fastapi-mongodb-microservices': '',
  'fullstack-typescript-python-svelte-fastapi-mongodb-cqrs': '',
  'fullstack-typescript-python-svelte-fastapi-mongodb-mvc': '',
  'fullstack-typescript-python-svelte-fastapi-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-fastapi-postgresql-monolithic': '',
  'fullstack-typescript-python-svelte-fastapi-postgresql-microservices': '',
  'fullstack-typescript-python-svelte-fastapi-postgresql-cqrs': '',
  'fullstack-typescript-python-svelte-fastapi-postgresql-mvc': '',
  'fullstack-typescript-python-svelte-fastapi-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-fastapi-mysql-monolithic': '',
  'fullstack-typescript-python-svelte-fastapi-mysql-microservices': '',
  'fullstack-typescript-python-svelte-fastapi-mysql-cqrs': '',
  'fullstack-typescript-python-svelte-fastapi-mysql-mvc': '',
  'fullstack-typescript-python-svelte-fastapi-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-fastapi-sqlite-monolithic': '',
  'fullstack-typescript-python-svelte-fastapi-sqlite-microservices': '',
  'fullstack-typescript-python-svelte-fastapi-sqlite-cqrs': '',
  'fullstack-typescript-python-svelte-fastapi-sqlite-mvc': '',
  'fullstack-typescript-python-svelte-fastapi-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-sanic-mongodb-monolithic': '',
  'fullstack-typescript-python-svelte-sanic-mongodb-microservices': '',
  'fullstack-typescript-python-svelte-sanic-mongodb-cqrs': '',
  'fullstack-typescript-python-svelte-sanic-mongodb-mvc': '',
  'fullstack-typescript-python-svelte-sanic-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-sanic-postgresql-monolithic': '',
  'fullstack-typescript-python-svelte-sanic-postgresql-microservices': '',
  'fullstack-typescript-python-svelte-sanic-postgresql-cqrs': '',
  'fullstack-typescript-python-svelte-sanic-postgresql-mvc': '',
  'fullstack-typescript-python-svelte-sanic-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-sanic-mysql-monolithic': '',
  'fullstack-typescript-python-svelte-sanic-mysql-microservices': '',
  'fullstack-typescript-python-svelte-sanic-mysql-cqrs': '',
  'fullstack-typescript-python-svelte-sanic-mysql-mvc': '',
  'fullstack-typescript-python-svelte-sanic-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-sanic-sqlite-monolithic': '',
  'fullstack-typescript-python-svelte-sanic-sqlite-microservices': '',
  'fullstack-typescript-python-svelte-sanic-sqlite-cqrs': '',
  'fullstack-typescript-python-svelte-sanic-sqlite-mvc': '',
  'fullstack-typescript-python-svelte-sanic-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-svelte-tornado-mongodb-monolithic': '',
  'fullstack-typescript-python-svelte-tornado-mongodb-microservices': '',
  'fullstack-typescript-python-svelte-tornado-mongodb-cqrs': '',
  'fullstack-typescript-python-svelte-tornado-mongodb-mvc': '',
  'fullstack-typescript-python-svelte-tornado-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-svelte-tornado-postgresql-monolithic': '',
  'fullstack-typescript-python-svelte-tornado-postgresql-microservices': '',
  'fullstack-typescript-python-svelte-tornado-postgresql-cqrs': '',
  'fullstack-typescript-python-svelte-tornado-postgresql-mvc': '',
  'fullstack-typescript-python-svelte-tornado-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-svelte-tornado-mysql-monolithic': '',
  'fullstack-typescript-python-svelte-tornado-mysql-microservices': '',
  'fullstack-typescript-python-svelte-tornado-mysql-cqrs': '',
  'fullstack-typescript-python-svelte-tornado-mysql-mvc': '',
  'fullstack-typescript-python-svelte-tornado-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_SVELTE_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-svelte-tornado-sqlite-monolithic': '',
  'fullstack-typescript-python-svelte-tornado-sqlite-microservices': '',
  'fullstack-typescript-python-svelte-tornado-sqlite-cqrs': '',
  'fullstack-typescript-python-svelte-tornado-sqlite-mvc': '',
  'fullstack-typescript-python-svelte-tornado-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-django-mongodb-monolithic': '',
  'fullstack-typescript-python-nextjs-django-mongodb-microservices': '',
  'fullstack-typescript-python-nextjs-django-mongodb-cqrs': '',
  'fullstack-typescript-python-nextjs-django-mongodb-mvc': '',
  'fullstack-typescript-python-nextjs-django-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-django-postgresql-monolithic': '',
  'fullstack-typescript-python-nextjs-django-postgresql-microservices': '',
  'fullstack-typescript-python-nextjs-django-postgresql-cqrs': '',
  'fullstack-typescript-python-nextjs-django-postgresql-mvc': '',
  'fullstack-typescript-python-nextjs-django-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-django-mysql-monolithic': '',
  'fullstack-typescript-python-nextjs-django-mysql-microservices': '',
  'fullstack-typescript-python-nextjs-django-mysql-cqrs': '',
  'fullstack-typescript-python-nextjs-django-mysql-mvc': '',
  'fullstack-typescript-python-nextjs-django-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-django-sqlite-monolithic': '',
  'fullstack-typescript-python-nextjs-django-sqlite-microservices': '',
  'fullstack-typescript-python-nextjs-django-sqlite-cqrs': '',
  'fullstack-typescript-python-nextjs-django-sqlite-mvc': '',
  'fullstack-typescript-python-nextjs-django-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-flask-mongodb-monolithic': '',
  'fullstack-typescript-python-nextjs-flask-mongodb-microservices': '',
  'fullstack-typescript-python-nextjs-flask-mongodb-cqrs': '',
  'fullstack-typescript-python-nextjs-flask-mongodb-mvc': '',
  'fullstack-typescript-python-nextjs-flask-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-flask-postgresql-monolithic': '',
  'fullstack-typescript-python-nextjs-flask-postgresql-microservices': '',
  'fullstack-typescript-python-nextjs-flask-postgresql-cqrs': '',
  'fullstack-typescript-python-nextjs-flask-postgresql-mvc': '',
  'fullstack-typescript-python-nextjs-flask-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-flask-mysql-monolithic': '',
  'fullstack-typescript-python-nextjs-flask-mysql-microservices': '',
  'fullstack-typescript-python-nextjs-flask-mysql-cqrs': '',
  'fullstack-typescript-python-nextjs-flask-mysql-mvc': '',
  'fullstack-typescript-python-nextjs-flask-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-flask-sqlite-monolithic': '',
  'fullstack-typescript-python-nextjs-flask-sqlite-microservices': '',
  'fullstack-typescript-python-nextjs-flask-sqlite-cqrs': '',
  'fullstack-typescript-python-nextjs-flask-sqlite-mvc': '',
  'fullstack-typescript-python-nextjs-flask-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-fastapi-mongodb-monolithic': '',
  'fullstack-typescript-python-nextjs-fastapi-mongodb-microservices': '',
  'fullstack-typescript-python-nextjs-fastapi-mongodb-cqrs': '',
  'fullstack-typescript-python-nextjs-fastapi-mongodb-mvc': '',
  'fullstack-typescript-python-nextjs-fastapi-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-fastapi-postgresql-monolithic': '',
  'fullstack-typescript-python-nextjs-fastapi-postgresql-microservices': '',
  'fullstack-typescript-python-nextjs-fastapi-postgresql-cqrs': '',
  'fullstack-typescript-python-nextjs-fastapi-postgresql-mvc': '',
  'fullstack-typescript-python-nextjs-fastapi-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-fastapi-mysql-monolithic': '',
  'fullstack-typescript-python-nextjs-fastapi-mysql-microservices': '',
  'fullstack-typescript-python-nextjs-fastapi-mysql-cqrs': '',
  'fullstack-typescript-python-nextjs-fastapi-mysql-mvc': '',
  'fullstack-typescript-python-nextjs-fastapi-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-fastapi-sqlite-monolithic': '',
  'fullstack-typescript-python-nextjs-fastapi-sqlite-microservices': '',
  'fullstack-typescript-python-nextjs-fastapi-sqlite-cqrs': '',
  'fullstack-typescript-python-nextjs-fastapi-sqlite-mvc': '',
  'fullstack-typescript-python-nextjs-fastapi-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-sanic-mongodb-monolithic': '',
  'fullstack-typescript-python-nextjs-sanic-mongodb-microservices': '',
  'fullstack-typescript-python-nextjs-sanic-mongodb-cqrs': '',
  'fullstack-typescript-python-nextjs-sanic-mongodb-mvc': '',
  'fullstack-typescript-python-nextjs-sanic-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-sanic-postgresql-monolithic': '',
  'fullstack-typescript-python-nextjs-sanic-postgresql-microservices': '',
  'fullstack-typescript-python-nextjs-sanic-postgresql-cqrs': '',
  'fullstack-typescript-python-nextjs-sanic-postgresql-mvc': '',
  'fullstack-typescript-python-nextjs-sanic-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-sanic-mysql-monolithic': '',
  'fullstack-typescript-python-nextjs-sanic-mysql-microservices': '',
  'fullstack-typescript-python-nextjs-sanic-mysql-cqrs': '',
  'fullstack-typescript-python-nextjs-sanic-mysql-mvc': '',
  'fullstack-typescript-python-nextjs-sanic-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-sanic-sqlite-monolithic': '',
  'fullstack-typescript-python-nextjs-sanic-sqlite-microservices': '',
  'fullstack-typescript-python-nextjs-sanic-sqlite-cqrs': '',
  'fullstack-typescript-python-nextjs-sanic-sqlite-mvc': '',
  'fullstack-typescript-python-nextjs-sanic-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-nextjs-tornado-mongodb-monolithic': '',
  'fullstack-typescript-python-nextjs-tornado-mongodb-microservices': '',
  'fullstack-typescript-python-nextjs-tornado-mongodb-cqrs': '',
  'fullstack-typescript-python-nextjs-tornado-mongodb-mvc': '',
  'fullstack-typescript-python-nextjs-tornado-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nextjs-tornado-postgresql-monolithic': '',
  'fullstack-typescript-python-nextjs-tornado-postgresql-microservices': '',
  'fullstack-typescript-python-nextjs-tornado-postgresql-cqrs': '',
  'fullstack-typescript-python-nextjs-tornado-postgresql-mvc': '',
  'fullstack-typescript-python-nextjs-tornado-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-nextjs-tornado-mysql-monolithic': '',
  'fullstack-typescript-python-nextjs-tornado-mysql-microservices': '',
  'fullstack-typescript-python-nextjs-tornado-mysql-cqrs': '',
  'fullstack-typescript-python-nextjs-tornado-mysql-mvc': '',
  'fullstack-typescript-python-nextjs-tornado-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NEXTJS_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-nextjs-tornado-sqlite-monolithic': '',
  'fullstack-typescript-python-nextjs-tornado-sqlite-microservices': '',
  'fullstack-typescript-python-nextjs-tornado-sqlite-cqrs': '',
  'fullstack-typescript-python-nextjs-tornado-sqlite-mvc': '',
  'fullstack-typescript-python-nextjs-tornado-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-django-mongodb-monolithic': '',
  'fullstack-typescript-python-nuxtjs-django-mongodb-microservices': '',
  'fullstack-typescript-python-nuxtjs-django-mongodb-cqrs': '',
  'fullstack-typescript-python-nuxtjs-django-mongodb-mvc': '',
  'fullstack-typescript-python-nuxtjs-django-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-django-postgresql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-django-postgresql-microservices': '',
  'fullstack-typescript-python-nuxtjs-django-postgresql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-django-postgresql-mvc': '',
  'fullstack-typescript-python-nuxtjs-django-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-django-mysql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-django-mysql-microservices': '',
  'fullstack-typescript-python-nuxtjs-django-mysql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-django-mysql-mvc': '',
  'fullstack-typescript-python-nuxtjs-django-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-django-sqlite-monolithic': '',
  'fullstack-typescript-python-nuxtjs-django-sqlite-microservices': '',
  'fullstack-typescript-python-nuxtjs-django-sqlite-cqrs': '',
  'fullstack-typescript-python-nuxtjs-django-sqlite-mvc': '',
  'fullstack-typescript-python-nuxtjs-django-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-flask-mongodb-monolithic': '',
  'fullstack-typescript-python-nuxtjs-flask-mongodb-microservices': '',
  'fullstack-typescript-python-nuxtjs-flask-mongodb-cqrs': '',
  'fullstack-typescript-python-nuxtjs-flask-mongodb-mvc': '',
  'fullstack-typescript-python-nuxtjs-flask-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-flask-postgresql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-flask-postgresql-microservices': '',
  'fullstack-typescript-python-nuxtjs-flask-postgresql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-flask-postgresql-mvc': '',
  'fullstack-typescript-python-nuxtjs-flask-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-flask-mysql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-flask-mysql-microservices': '',
  'fullstack-typescript-python-nuxtjs-flask-mysql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-flask-mysql-mvc': '',
  'fullstack-typescript-python-nuxtjs-flask-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-flask-sqlite-monolithic': '',
  'fullstack-typescript-python-nuxtjs-flask-sqlite-microservices': '',
  'fullstack-typescript-python-nuxtjs-flask-sqlite-cqrs': '',
  'fullstack-typescript-python-nuxtjs-flask-sqlite-mvc': '',
  'fullstack-typescript-python-nuxtjs-flask-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-monolithic': '',
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-microservices': '',
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-cqrs': '',
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-mvc': '',
  'fullstack-typescript-python-nuxtjs-fastapi-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-microservices': '',
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-mvc': '',
  'fullstack-typescript-python-nuxtjs-fastapi-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-microservices': '',
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-mvc': '',
  'fullstack-typescript-python-nuxtjs-fastapi-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-monolithic': '',
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-microservices': '',
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-cqrs': '',
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-mvc': '',
  'fullstack-typescript-python-nuxtjs-fastapi-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-monolithic': '',
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-microservices': '',
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-cqrs': '',
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-mvc': '',
  'fullstack-typescript-python-nuxtjs-sanic-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-microservices': '',
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-mvc': '',
  'fullstack-typescript-python-nuxtjs-sanic-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-sanic-mysql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-sanic-mysql-microservices': '',
  'fullstack-typescript-python-nuxtjs-sanic-mysql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-sanic-mysql-mvc': '',
  'fullstack-typescript-python-nuxtjs-sanic-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-monolithic': '',
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-microservices': '',
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-cqrs': '',
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-mvc': '',
  'fullstack-typescript-python-nuxtjs-sanic-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-monolithic': '',
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-microservices': '',
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-cqrs': '',
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-mvc': '',
  'fullstack-typescript-python-nuxtjs-tornado-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-microservices': '',
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-mvc': '',
  'fullstack-typescript-python-nuxtjs-tornado-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-nuxtjs-tornado-mysql-monolithic': '',
  'fullstack-typescript-python-nuxtjs-tornado-mysql-microservices': '',
  'fullstack-typescript-python-nuxtjs-tornado-mysql-cqrs': '',
  'fullstack-typescript-python-nuxtjs-tornado-mysql-mvc': '',
  'fullstack-typescript-python-nuxtjs-tornado-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_NUXTJS_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-monolithic': '',
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-microservices': '',
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-cqrs': '',
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-mvc': '',
  'fullstack-typescript-python-nuxtjs-tornado-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-django-mongodb-monolithic': '',
  'fullstack-typescript-python-vanillajs-django-mongodb-microservices': '',
  'fullstack-typescript-python-vanillajs-django-mongodb-cqrs': '',
  'fullstack-typescript-python-vanillajs-django-mongodb-mvc': '',
  'fullstack-typescript-python-vanillajs-django-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-django-postgresql-monolithic': '',
  'fullstack-typescript-python-vanillajs-django-postgresql-microservices': '',
  'fullstack-typescript-python-vanillajs-django-postgresql-cqrs': '',
  'fullstack-typescript-python-vanillajs-django-postgresql-mvc': '',
  'fullstack-typescript-python-vanillajs-django-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-django-mysql-monolithic': '',
  'fullstack-typescript-python-vanillajs-django-mysql-microservices': '',
  'fullstack-typescript-python-vanillajs-django-mysql-cqrs': '',
  'fullstack-typescript-python-vanillajs-django-mysql-mvc': '',
  'fullstack-typescript-python-vanillajs-django-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_DJANGO_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-django-sqlite-monolithic': '',
  'fullstack-typescript-python-vanillajs-django-sqlite-microservices': '',
  'fullstack-typescript-python-vanillajs-django-sqlite-cqrs': '',
  'fullstack-typescript-python-vanillajs-django-sqlite-mvc': '',
  'fullstack-typescript-python-vanillajs-django-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-flask-mongodb-monolithic': '',
  'fullstack-typescript-python-vanillajs-flask-mongodb-microservices': '',
  'fullstack-typescript-python-vanillajs-flask-mongodb-cqrs': '',
  'fullstack-typescript-python-vanillajs-flask-mongodb-mvc': '',
  'fullstack-typescript-python-vanillajs-flask-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-flask-postgresql-monolithic': '',
  'fullstack-typescript-python-vanillajs-flask-postgresql-microservices': '',
  'fullstack-typescript-python-vanillajs-flask-postgresql-cqrs': '',
  'fullstack-typescript-python-vanillajs-flask-postgresql-mvc': '',
  'fullstack-typescript-python-vanillajs-flask-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-flask-mysql-monolithic': '',
  'fullstack-typescript-python-vanillajs-flask-mysql-microservices': '',
  'fullstack-typescript-python-vanillajs-flask-mysql-cqrs': '',
  'fullstack-typescript-python-vanillajs-flask-mysql-mvc': '',
  'fullstack-typescript-python-vanillajs-flask-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FLASK_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-flask-sqlite-monolithic': '',
  'fullstack-typescript-python-vanillajs-flask-sqlite-microservices': '',
  'fullstack-typescript-python-vanillajs-flask-sqlite-cqrs': '',
  'fullstack-typescript-python-vanillajs-flask-sqlite-mvc': '',
  'fullstack-typescript-python-vanillajs-flask-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-monolithic': '',
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-microservices': '',
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-cqrs': '',
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-mvc': '',
  'fullstack-typescript-python-vanillajs-fastapi-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-monolithic': '',
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-microservices': '',
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-cqrs': '',
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-mvc': '',
  'fullstack-typescript-python-vanillajs-fastapi-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-fastapi-mysql-monolithic': '',
  'fullstack-typescript-python-vanillajs-fastapi-mysql-microservices': '',
  'fullstack-typescript-python-vanillajs-fastapi-mysql-cqrs': '',
  'fullstack-typescript-python-vanillajs-fastapi-mysql-mvc': '',
  'fullstack-typescript-python-vanillajs-fastapi-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_FASTAPI_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-monolithic': '',
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-microservices': '',
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-cqrs': '',
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-mvc': '',
  'fullstack-typescript-python-vanillajs-fastapi-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-sanic-mongodb-monolithic': '',
  'fullstack-typescript-python-vanillajs-sanic-mongodb-microservices': '',
  'fullstack-typescript-python-vanillajs-sanic-mongodb-cqrs': '',
  'fullstack-typescript-python-vanillajs-sanic-mongodb-mvc': '',
  'fullstack-typescript-python-vanillajs-sanic-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-sanic-postgresql-monolithic': '',
  'fullstack-typescript-python-vanillajs-sanic-postgresql-microservices': '',
  'fullstack-typescript-python-vanillajs-sanic-postgresql-cqrs': '',
  'fullstack-typescript-python-vanillajs-sanic-postgresql-mvc': '',
  'fullstack-typescript-python-vanillajs-sanic-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-sanic-mysql-monolithic': '',
  'fullstack-typescript-python-vanillajs-sanic-mysql-microservices': '',
  'fullstack-typescript-python-vanillajs-sanic-mysql-cqrs': '',
  'fullstack-typescript-python-vanillajs-sanic-mysql-mvc': '',
  'fullstack-typescript-python-vanillajs-sanic-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_SANIC_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-sanic-sqlite-monolithic': '',
  'fullstack-typescript-python-vanillajs-sanic-sqlite-microservices': '',
  'fullstack-typescript-python-vanillajs-sanic-sqlite-cqrs': '',
  'fullstack-typescript-python-vanillajs-sanic-sqlite-mvc': '',
  'fullstack-typescript-python-vanillajs-sanic-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_MONGODB_REPOS = {
  'fullstack-typescript-python-vanillajs-tornado-mongodb-monolithic': '',
  'fullstack-typescript-python-vanillajs-tornado-mongodb-microservices': '',
  'fullstack-typescript-python-vanillajs-tornado-mongodb-cqrs': '',
  'fullstack-typescript-python-vanillajs-tornado-mongodb-mvc': '',
  'fullstack-typescript-python-vanillajs-tornado-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_POSTGRESQL_REPOS = {
  'fullstack-typescript-python-vanillajs-tornado-postgresql-monolithic': '',
  'fullstack-typescript-python-vanillajs-tornado-postgresql-microservices': '',
  'fullstack-typescript-python-vanillajs-tornado-postgresql-cqrs': '',
  'fullstack-typescript-python-vanillajs-tornado-postgresql-mvc': '',
  'fullstack-typescript-python-vanillajs-tornado-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_MYSQL_REPOS = {
  'fullstack-typescript-python-vanillajs-tornado-mysql-monolithic': '',
  'fullstack-typescript-python-vanillajs-tornado-mysql-microservices': '',
  'fullstack-typescript-python-vanillajs-tornado-mysql-cqrs': '',
  'fullstack-typescript-python-vanillajs-tornado-mysql-mvc': '',
  'fullstack-typescript-python-vanillajs-tornado-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_PYTHON_VANILLAJS_TORNADO_SQLITE_REPOS = {
  'fullstack-typescript-python-vanillajs-tornado-sqlite-monolithic': '',
  'fullstack-typescript-python-vanillajs-tornado-sqlite-microservices': '',
  'fullstack-typescript-python-vanillajs-tornado-sqlite-cqrs': '',
  'fullstack-typescript-python-vanillajs-tornado-sqlite-mvc': '',
  'fullstack-typescript-python-vanillajs-tornado-sqlite-event-driven': '',
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
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-monolithic': '',
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-microservices': '',
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-cqrs': '',
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-mvc': '',
  'fullstack-typescript-csharp-angular-dotnetcore-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-monolithic': '',
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-microservices': '',
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-cqrs': '',
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-mvc': '',
  'fullstack-typescript-csharp-angular-dotnetcore-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-monolithic': '',
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-microservices': '',
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-cqrs': '',
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-mvc': '',
  'fullstack-typescript-csharp-angular-dotnetcore-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_ANGULAR_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-monolithic': '',
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-microservices': '',
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-cqrs': '',
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-mvc': '',
  'fullstack-typescript-csharp-angular-dotnetcore-sqlite-event-driven': '',
};

// ---------- React groups ----------
const FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-monolithic': '',
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-microservices': '',
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-cqrs': '',
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-mvc': '',
  'fullstack-typescript-csharp-react-dotnetcore-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-monolithic': '',
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-microservices': '',
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-cqrs': '',
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-mvc': '',
  'fullstack-typescript-csharp-react-dotnetcore-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-react-dotnetcore-mysql-monolithic': '',
  'fullstack-typescript-csharp-react-dotnetcore-mysql-microservices': '',
  'fullstack-typescript-csharp-react-dotnetcore-mysql-cqrs': '',
  'fullstack-typescript-csharp-react-dotnetcore-mysql-mvc': '',
  'fullstack-typescript-csharp-react-dotnetcore-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_REACT_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-monolithic': '',
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-microservices': '',
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-cqrs': '',
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-mvc': '',
  'fullstack-typescript-csharp-react-dotnetcore-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-monolithic': '',
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-microservices': '',
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-cqrs': '',
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-mvc': '',
  'fullstack-typescript-csharp-vue-dotnetcore-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-monolithic': '',
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-microservices': '',
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-cqrs': '',
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-mvc': '',
  'fullstack-typescript-csharp-vue-dotnetcore-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-monolithic': '',
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-microservices': '',
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-cqrs': '',
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-mvc': '',
  'fullstack-typescript-csharp-vue-dotnetcore-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VUE_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-monolithic': '',
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-microservices': '',
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-cqrs': '',
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-mvc': '',
  'fullstack-typescript-csharp-vue-dotnetcore-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-monolithic': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-microservices': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-cqrs': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-mvc': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-monolithic': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-microservices': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-cqrs': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-mvc': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-monolithic': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-microservices': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-cqrs': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-mvc': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_SVELTE_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-monolithic': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-microservices': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-cqrs': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-mvc': '',
  'fullstack-typescript-csharp-svelte-dotnetcore-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-monolithic': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-microservices': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-cqrs': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-mvc': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-monolithic': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-microservices': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-cqrs': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-mvc': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-monolithic': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-microservices': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-cqrs': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-mvc': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NEXTJS_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-monolithic': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-microservices': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-cqrs': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-mvc': '',
  'fullstack-typescript-csharp-nextjs-dotnetcore-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-monolithic': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-microservices': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-cqrs': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-mvc': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-monolithic': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-microservices': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-cqrs': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-mvc': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-postgresql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-monolithic': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-microservices': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-cqrs': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-mvc': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_NUXTJS_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-monolithic': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-microservices': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-cqrs': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-mvc': '',
  'fullstack-typescript-csharp-nuxtjs-dotnetcore-sqlite-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_MONGODB_REPOS = {
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-monolithic': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-microservices': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-cqrs': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-mvc': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mongodb-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_POSTGRESQL_REPOS = {
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-monolithic': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-microservices':
    '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-cqrs': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-mvc': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-postgresql-event-driven':
    '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_MYSQL_REPOS = {
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-monolithic': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-microservices': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-cqrs': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-mvc': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-mysql-event-driven': '',
};

const FULLSTACK_TYPESCRIPT_CSHARP_VANILLAJS_DOTNETCORE_SQLITE_REPOS = {
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-monolithic': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-microservices': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-cqrs': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-mvc': '',
  'fullstack-typescript-csharp-vanillajs-dotnetcore-sqlite-event-driven': '',
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
