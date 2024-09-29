// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // THE VALUE OF ID WILL INCREMENT WITH EVERY NEW ENTRY
    },
    product_name: {
      type: DataTypes.STRING, // TELLS SEQUELIZE THAT product_name IS A STRING
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // SETS THE DEFAULT VALUE TO 10
      validate: {
        isNumeric: true, // VALIDATES THAT THE VALUE IS NUMERIC
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true, // PREVENTS SEQUELIZE FROM REPLACING TABLE NAME
    underscored: true,
    modelName: "product",
  }
);

// EXPORTING THE PRODUCT CLASS
module.exports = Product;
