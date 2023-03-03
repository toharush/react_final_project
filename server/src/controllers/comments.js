const {
  addCommentToDb,
  GetAllCommentsByIdFromDb,
} = require("../model/comments");
const { getUserById } = require("./auth");

exports.addComment = async (productsId, userId, comment) => {
  return await addCommentToDb(productsId, userId, comment);
};

exports.GetAllComments = async () => {
  return await GetAllCommentsFromDb();
};

exports.GetAllCommentsById = async (id) => {
  let comments = [];
  for (let comment of (await GetAllCommentsByIdFromDb(id)).comments) {
    await comments.push({
      ...comment,
      userId: await getUserById(comment.userId),
    });
  }
  return await comments;
};
