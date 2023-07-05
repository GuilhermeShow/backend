const express = require('express');
const route = require('./api/Routes')

const app = express();

const port = 3000;

route(app)

app.listen(port, () => console.log(`Servidor ligado na porta ${port}`));