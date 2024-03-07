const express = require('express');
const cors = require('cors');
const {
  loginRoute, signupRoute, dashboardRoute, userRoute,
} = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.send(`
    Server are healthy!
    <a href="https://github.com/luandersonalvesdev/store-smartphone-manager"> Click here</a> to see the documentation.
    `);
});

app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/dashboard', dashboardRoute);
app.use('/user', userRoute);

module.exports = app;
