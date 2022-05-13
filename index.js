const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { config } = require('./config/config');
const app = express();
const routeApi = require('./router/index');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const port = process.env.port;

app.use(express.json());

routeApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port, config.dbHost, () => {
  console.log(`App listening on http://${config.dbHost}:${config.port}`);
});
