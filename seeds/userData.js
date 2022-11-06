const { User } = require("../models/User");

const userData = [
  {
    username: "firstUser",
    email: "sam@email.com",
    password: "password123",
  },
  {
    username: "secondUser",
    email: "bob@email.com",
    password: "password123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
