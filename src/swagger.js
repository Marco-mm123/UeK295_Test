/* eslint-disable linebreak-style */
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:8080',
};

const outputFile = './swagger-output.json';
const routes = ['./server.js', './server.js'];

swaggerAutogen(outputFile, routes, doc);
