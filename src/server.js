/* eslint-disable */
/* eslint-disable linebreak-style */
// Imports the other files and all the other needed packets
const express = require('express');
const session = require('express-session');
const autrouter = require('./aut');
const router = require('./tasks');

const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {},
}));

app.use(express.json());

// With these lines you the imported files can be used whenever one of their requests are called.
app.use(router);
app.use(autrouter);

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the mainpage of this Backend API");
});

app.get("/swagger-ui", (request, response) => {
  //#swagger.tags = ['swagger-ui']
  response.sendFile(__dirname + "/swagger-output.json");
});

// This just say the server on which port it should listen.
app.listen(port, () => {
  console.log(`To-Do list app listening on port ${port}`);
});
