// IMPORTING ALL THE SEEDS
const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");
// CONNECTING TO THE DATABASE
const sequelize = require("../config/connection");

// ASYNCHRONOUS FUNCTION THAT SEEDS THE DATABASE WITH PRODUCTS, CATEGORIES, TAGS AND PRODUCT TAGS
// THEN LOGS THAT THE DATABASE HAS BEEN SYNCED AND CATEGORIES, PRODUCTS, TAGS AND PRODUCT TAGS HAVE BEEN SEEDED
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedProducts();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await seedTags();
  console.log("\n----- TAGS SEEDED -----\n");

  await seedProductTags();
  console.log("\n----- PRODUCT TAGS SEEDED -----\n");

  // EXITS WITH A SUCCESS CODE OF 0
  process.exit(0);
};

seedAll();
