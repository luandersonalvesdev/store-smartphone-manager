const express = require('express');
const cors = require('cors');
const {
  loginRoute, signupRoute, dashboardRoute, userRoute,
} = require('./routes');

const app = express();

const allowedOrigins = [process.env.FRONTEND_BASE_URL || 'http://localhost:3000'];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));

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
