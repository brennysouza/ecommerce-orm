const { Model, DataTypes } = require('sequelize');

// sequelize connection.js file
const sequelize = require('../config/connection.js');

// create our Category model
class Category extends Model {}

// define columns in Category model
Category.init(
  {
    // defined columns below
        id: {
          type: DataTypes.INTEGER, 
          allowNull : false, 
          primaryKey: true,
          autoIncrement: true
        },
        category_name: {
          type: DataTypes.STRING,
          allowNull: false
        }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
