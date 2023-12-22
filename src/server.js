const express = require('express');
const session = require('express-session');
const autrouter = require('./aut');
const app = express();
const port = 3000;

//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger-output.json');
const router = require('./tasks');
//app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(session({
    secret: 'supersecret',
        resave: false,
        saveUninitialized: true,
    cookie: {}
  }))

app.use(express.json());

app.use(router);
app.use(autrouter);

/*app.get("/swagger-ui", (request, response) => {
  //#swagger.tags = ['swagger-ui']
  response.sendFile(__dirname + "/swagger-output.json");
});*/

app.listen(port, () => {
  console.log(`To-Do list app listening on port ${port}`);
});
