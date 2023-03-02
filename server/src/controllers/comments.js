const { addCommentToDb, GetAllCommentsByIdFromDb } = require("../model/comments");
const { getUserById } = require("./auth");

exports.addComment = async (productsId, userId, comment) => {
  return await addCommentToDb(productsId, userId, comment);
};

exports.GetAllComments = async () => {
  return await GetAllCommentsFromDb();
};

exports.GetAllCommentsById = async (id) => {
    const comments = await GetAllCommentsByIdFromDb(id);
    await comments?.comments.map(comment => ({
        ...comment,
        userId: getUserById(comment.userId)
    }));
    return comments;
}
