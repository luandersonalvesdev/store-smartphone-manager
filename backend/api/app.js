const express = require('express');
const { loginRoute, signupRoute } = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Server are healthy!');
});

app.use('/login', loginRoute);
app.use('/signup', signupRoute);

module.exports = app;
