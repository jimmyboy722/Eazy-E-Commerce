const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // ATTRIBUTES
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // ESTABLISHES A FOREIGN KEY RELATIONSHIP WITH THE PRODUCT MODEL/TABLE
        model: "product",
        key: "id", // SHOWS LINK TO THE ID COLUMN IN THE PRODUCT TABLE
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id", // ALSO SHOWS LINK TO THE ID COLUMN IN THE TAG TABLE
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
