const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cart = new Schema(
  {
    products: [],
    userId: String,
  },
  {
    collection: "cart",
  }
);

module.exports = mongoose.model("cart", cart);
