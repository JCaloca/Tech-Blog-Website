const { Post } = require("../models/Post");

const postData = [
  {
    title: "First Blog Post",
    post_content: "This is an example of a blog post!",
    user_id: 1,
  },
  {
    title: "MVC the Model View Controller",
    post_content: "Second example of a blog post about the MVC!",
    user_id: 2,
  },
];

// Function to seed Post Model for testing
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
