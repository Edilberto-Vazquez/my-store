const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class OrderService {
  constructor() {}

  async create(data) {
    const res = await models.Order.create(data);
    return res;
  }

  async addItem(data) {
    const res = await models.OrderProduct.create(data);
    return res;
  }

  async findOne(id) {
    const res = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        'items',
      ],
    });
    if (!res) {
      throw boom.notFound('customer not found');
    }
    return res;
  }
}

module.exports = OrderService;
