const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const res = await models.User.findAll();
    return res;
  }
}

module.exports = UserService;
