'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customerModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameTable('customers', 'Customers', CustomerSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
