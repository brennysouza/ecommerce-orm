const { Model, DataTypes } = require('sequelize');

// sequelize connection.js file
const sequelize = require('../config/connection.js');

// create our Tag model
class Tag extends Model {}

Tag.init(
  {
    // define columns
        id: {
          type: DataTypes.INTEGER, 
          allowNull : false, 
          primaryKey: true,
          autoIncrement: true
        },
        // define tag_name column
        tag_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        
  },
  // configure metadata
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;