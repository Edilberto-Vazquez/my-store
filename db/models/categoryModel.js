const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIES_TABLE = 'Categories';

const CategorySchema = {
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

class Category extends Model {
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIES_TABLE,
      modelName: 'Category',
      timestamps: false,
    };
  }
}

module.exports = { CATEGORIES_TABLE, CategorySchema, Category };
