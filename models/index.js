const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// User can have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Post is associated with the User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Post can have many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// Comment belongs to a specific post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// Comment belongs to specific user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Comment };
