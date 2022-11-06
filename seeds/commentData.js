const { Comment } = require("../models/Comment");

// Creating example comments to test
const commentData = [
  {
    comment_text: "Wow such an amazing point!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This is a great description of MVC!",
    user_id: 2,
    post_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
