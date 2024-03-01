const express = require('express');
const { loginRoute } = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Server are healthy!');
});

app.use('/login', loginRoute);

module.exports = app;
