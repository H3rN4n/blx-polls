'use strict';

const Hapi = require('hapi');
const db = require('./database').db;

const server = Hapi.server({
  port: 4001,
  host: 'localhost',
  routes: {
    cors: true
  }
});

server.events.on('log', (event, tags) => {

  if (tags.error) {
    console.log(`Server error: ${event.error ? event.error.message : 'unknown'}`);
  }
});

const init = async () => {

  await server.register(require('inert'));

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.file('./public/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public/',
        listing: true
      }
    }
  });

  const routes = require('./routes');
  server.route(routes);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
