const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Creates post with with hook to User
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Creates post with many Comments
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// Creates Comment belonging to User identified in logic above
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Exports User, Comment, & Post
module.exports = {
  User,
  Comment,
  Post
};