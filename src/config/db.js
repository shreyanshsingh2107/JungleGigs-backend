const pgp = require('pg-promise')();

const db = pgp({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  searchPath: process.env.PG_SEARCH_PATH,
});

db.connect()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

module.exports = db;
