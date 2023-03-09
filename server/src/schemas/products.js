const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const products = new Schema(
  {
    _id: ObjectId,
    name: String,
    supplier: String,
    categories: [],
    color: [],
    size: [],
    price: Number,
    description: String,
    img: String,
  },
  {
    collection: "products",
    versionKey: false
  }
);

module.exports = mongoose.model("products", products);
