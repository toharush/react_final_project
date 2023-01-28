const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productsMetadata = new Schema(
  {
    productId: ObjectId,
    userId: String,
    buy: Boolean,
  },
  {
    collection: "productsMetadata",
  }
);

module.exports = mongoose.model("productsMetadata", productsMetadata);
