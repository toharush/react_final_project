const comments = require("../schemas/comments");

exports.addCommentToDb = async (productsId, userId, comment) => {
  return await comments.findOneAndUpdate(
    { productId: productsId },
    {
      $push: {
        comments: {
          userId: userId,
          comment: comment,
          date: new Date().toDateString()
        },
      },
    },
    { upsert: true, new: true }
  );
};

exports.GetAllCommentsFromDb = async () => {
  let res = [];

  try {
    res = await comments.find({});
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};

exports.GetAllCommentsByIdFromDb = async (id) => {
  let res = {};

  try {
    res = await comments.findOne({ productId: id });
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};
