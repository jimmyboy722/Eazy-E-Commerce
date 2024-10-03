// CONNECTING TO ENVIRONMENT VARIABLES
require("dotenv").config();
//IMPORTING SEQUELIZE
const Sequelize = require("sequelize");

// USING THOSE ENVIRONMENT VARIABLES TO CONNECT TO DATABASE
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// EXPORTING SEQUELIZE
module.exports = sequelize;
