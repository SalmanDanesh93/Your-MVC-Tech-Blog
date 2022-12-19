//Create connection with sequelize, Models, and DataTypes
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

// Initiates Post Model and sets data type for title and body then sequelizes
Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);
// Exports Post
module.exports = Post;
