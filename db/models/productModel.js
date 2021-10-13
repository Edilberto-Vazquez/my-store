const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'Products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  img: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultvalue: Sequelize.NOW,
  },
};

class Product extends Model {
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
