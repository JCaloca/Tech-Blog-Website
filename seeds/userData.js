const { User } = require("../models");

const userData = [
  {
    username: "firstUser",
    email: "sam@email.com",
    password: "password123"
  },
  {
    username: "secondUser",
    email: "bob@email.com",
    password: "password123"
  }
];

const seedUser = async () => {
  console.log(typeof User);
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};
module.exports = seedUser;
