const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const res = await client.query('SELECT * FROM tasks');
    return res.rows;
  }
}

module.exports = UserService;
