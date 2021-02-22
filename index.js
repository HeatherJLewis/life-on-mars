const express = require('express');
const createRoutes = require('./src/routes.js');

const app = express();
const port = 3000;

app.use(createRoutes());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
