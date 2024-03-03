const express = require('express');
const cors = require('cors');
const {
  loginRoute, signupRoute, dashboardRoute, userRoute,
} = require('./routes');

const app = express();

const allowedOrigins = [process.env.FRONTEND_BASE_URL || 'http://localhost:3000'];

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (_req, res) => {
  res.send('Server are healthy!');
});

app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/dashboard', dashboardRoute);
app.use('/user', userRoute);

module.exports = app;
