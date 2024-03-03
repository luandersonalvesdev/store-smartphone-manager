require('dotenv').config();

const enviroment = process.env.NODE_ENV || 'development';

const options = {
  username: process.env.PG_DB_USERNAME || 'root',
  password: process.env.PG_DB_PASSWORD || null,
  database: process.env.PG_DB_DATABASE || `database_${enviroment}`,
  host: process.env.PG_DB_HOST || 'localhost',
  port: process.env.PG_DB_PORT || 5432,
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
