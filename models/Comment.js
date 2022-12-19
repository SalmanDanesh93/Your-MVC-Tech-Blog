//Create connection with sequelize, Models, and DataTypes
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');


class Comment extends Model {}
// Initiates Comment Model and sets data type and then sequelizes
Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

// Exports Comment
module.exports = Comment;
