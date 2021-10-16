'use strict';

const { CategorySchema, CATEGORIES_TABLE } = require('../models/categoryModel');
const { ProductSchema, PRODUCT_TABLE } = require('../models/productModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORIES_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORIES_TABLE, CategorySchema);
    await queryInterface.dropTable(PRODUCT_TABLE, ProductSchema);
  },
};
