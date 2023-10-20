const { Model, DataTypes } = require('sequelize');

// sequelize connection.js file
const sequelize = require('../config/connection.js');

// create our ProductTag model
class ProductTag extends Model {}

// define columns in ProductTag model
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, 
      allowNull : false, 
      primaryKey: true,
      autoIncrement: true
    },
    // define product_id column
    product_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // define tag_id column
    tag_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  // configure metadata
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;