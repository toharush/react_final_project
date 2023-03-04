const {
  addCommentToDb,
  GetAllCommentsByIdFromDb,
} = require("../model/comments");
const { getUserById } = require("./auth");

exports.addComment = async (productsId, userId, rating, comment) => {
  return await addCommentToDb(productsId, userId, rating, comment);
};

exports.GetAllComments = async () => {
  return await GetAllCommentsFromDb();
};

exports.GetAllCommentsById = async (id) => {
  let comments = [];

  try {
    const res = await GetAllCommentsByIdFromDb(id);
    for (let comment of res.comments) {
      await comments.push({
        ...comment,
        userEmail: await getUserById(comment.userId),
      });
    }
  } catch (err) {
    console.log(err);
  }

  return await comments;
};
