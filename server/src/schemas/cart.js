const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cart = new Schema(
  {
    productId: [],
    userId: String,
  },
  {
    collection: "cart",
  }
);

module.exports = mongoose.model("cart", cart);
