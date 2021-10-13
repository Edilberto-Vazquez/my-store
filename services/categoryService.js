const { models } = require('../libs/sequelize');

class CategoryService {
  constructor() {}

  async find() {
    const res = await models.Category.findAll();
    return res;
  }
}

module.exports = CategoryService;
