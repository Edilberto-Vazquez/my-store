'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../models/costumerModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameTable('costumers', 'Customers', CustomerSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
