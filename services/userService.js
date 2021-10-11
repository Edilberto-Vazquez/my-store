const boom = require('@hapi/boom');
const pool = require('../libs/postgresPool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const res = await this.pool.query(query);
    return res.rows;
  }
}

module.exports = UserService;
