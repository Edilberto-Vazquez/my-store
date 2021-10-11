const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'edi',
  password: '1234',
  database: 'my_store',
});

module.exports = pool;
