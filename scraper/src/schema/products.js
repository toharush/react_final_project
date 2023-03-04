const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productsSchema = new Schema(
  {
    price: String,
    name: String,
    supplier: String,
    categories: [],
    color: [],
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("products", productsSchema);
