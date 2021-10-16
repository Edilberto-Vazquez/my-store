const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor() {}

  async create(data) {
    const res = await models.Customer.create(data, {
      include: ['user'],
    });
    return res;
  }

  async find() {
    const res = await models.Customer.findAll({ include: ['user'] });
    return res;
  }

  async findOne(id) {
    const res = await models.Customer.findByPk(id);
    if (!res) {
      throw boom.notFound('customer not found');
    }
    return res;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const res = await user.update(changes);
    return res;
  }

  async delete(id) {
    const user = await this.findOne(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    await user.destroy();
    return { id };
  }
}

module.exports = CustomerService;
