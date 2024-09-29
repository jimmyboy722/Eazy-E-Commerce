// MODEL IS THE BASE CLASS FOR ALL MODELS AND DATATYPES PROVIDE THE VARIOUS DATA TYPES LIKE 'INTEGER', 'STRING', ETC...
const { Model, DataTypes } = require("sequelize");
// LINE 2 IMPORTS THE SEQUELIZE INSTANCE AND LINE 4 CONNECTS TO THE DATABASE
const sequelize = require("../config/connection.js");

// DEFINING THE CATEGORY CLASS AND EXTENDS THE MODEL CLASS GIVEN BY SEQUELIZE. CATEGORY WILL INHERIT FROM THE MODEL
class Category extends Model {}

// INITIALIZING THE CATEGORY CLASS, DEFINING THE MODEL'S ATTRIBUTES AND VALUES
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // PREVENTS NULL VALUES
      primaryKey: true, // TELLS SEQUELIZE THAT THIS IS THE PRIMARY KEY
      autoIncrement: true, // THE VALUE OF ID WILL INCREMENT WITH EVERY NEW ENTRY
    },
    category_name: {
      type: DataTypes.STRING, // TELLS SEQUELIZE THAT category_name IS A STRING
      allowNull: false,
    },
  },
  {
    // SPECIFYING THE INSTANCE OF SEQUELIZE TO USE
    sequelize,
    timestamps: false, // TELLS SEQUELIZE TO NOT ADD TIMESTAMP COLUMNS
    // PREVENTS SEQUELIZE FROM REPLACING TABLE NAME
    freezeTableName: true,
    underscored: true, // CONVERTS camelCase TO snake_case
    modelName: "category",
  }
);

module.exports = Category;
