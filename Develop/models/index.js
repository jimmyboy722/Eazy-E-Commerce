// THIS INDEX.JS FILE SERVES AS A CENTRAL PONT TO ESTABLISH THE RELATIONSHIP BETWEEN MODELS
// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// ESTABLISHING A ONE TO MANY RELATIONSHIP BETWEEN CATEGORY AND PRODUCT
Product.belongsTo(Category, {
  foreignKey: "category_id", // THIS IS THE FOREIGN KEY IN THE PRODUCT TABLE THAT LINKS TO THE CATEGORY TABLE
  onDelete: "CASCADE", // IF A CATEGORY IS DELETED, ALL ASSOCIATED PRODUCTS WILL BE DELETED
});

// ESTABLISHING THE REVERSE, THAT ONE CATEGORY HAS MANY ASSOCIATED PRODUCTS
Category.hasMany(Product, {
  foreignKey: "category_id", // THIS IS THE FOREIGN KEY IN THE CATEGORY TABLE THAT LINKS TO THE PRODUCT TABLE
});

// ESTABLISHING A MANY TO MANY RELATIONSHIP BETWEEN PRODUCT AND TAG USING A JOIN TABLE (ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // SPECIFIES THAT THE ProductTag MODEL WILL BE USED TO LINK TO THE PRODUCT AND TAG TABLES
  foreignKey: "product_id",
});

// ESTABLISHING THE REVERSE MANY TO MANY RELATIONSHIP THAT TAG HAS MANY ASSOCIATED PRODUCTS
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

// EXPORTING MODELS
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
