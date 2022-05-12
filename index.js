const express = require('express');
const app = express();
const routeApi = require('./router/index');

const port = process.env.port || 4200;

app.use(express.json());

routeApi(app);

app.listen(port, () => {
  console.log('Puerto: ' + port);
});
