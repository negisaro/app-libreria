const express = require('express');
require('dotenv').config();
const { config } = require('./config/config');
const app = express();
const routeApi = require('./router/index');

const port = process.env.port;

app.use(express.json());

routeApi(app);

app.listen(port, () => {
  console.log('Puerto: ' + port);
});

app.listen(config.port, config.dbHost, () => {
  console.log(`App listening on http://${config.dbHost}:${config.port}`);
});
