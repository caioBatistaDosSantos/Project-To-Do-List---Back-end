const express = require('express');
require('dotenv').config();
const routes = require('./routes/index');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log('ouvindo na porta', port));
