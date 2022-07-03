const express = require('express');
const cors = require('cors');

require('dotenv').config();

const routes = require('./routes/index');

const app = express();

const port = process.env.PORT || 3000;

// solution for problem in CORS, link stackoverflow: https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios
app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log('ouvindo na porta', port));
