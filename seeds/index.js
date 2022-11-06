const sequelize = require("../config/connection");
// Requiring seed files
const seedUser = require("./userData");
const seedPost = require("./postData");
const seedComment = require("./commentData");

const seedAll = async () => {
  // force: true, creates the table dropping it if it already exists
  await sequelize.sync({ force: true });
  console.log("\n--- DATABASE SYNCED ---\n");
  // Seeding model tables
  await seedUser();
  console.log("\n--- USER SEEDED ---\n");

  await seedPost();
  console.log("\n--- POST SEEDED ---\n");

  await seedComment();
  console.log("\n--- COMMENT SEEDED ---\n");

  process.exit(0);
};

seedAll();
