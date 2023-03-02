const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const comments = new Schema(
  {
    productId: ObjectId,
    comments: [],
  },
  {
    collection: "comments",
  }
);

module.exports = mongoose.model("comments", comments);
