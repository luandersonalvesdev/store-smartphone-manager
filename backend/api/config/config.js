require('dotenv').config();

const enviroment = process.env.NODE_ENV || 'development';

const options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || `database_${enviroment}`,
  host: process.env.DB_URL_NO_SSL || 'localhost',
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
