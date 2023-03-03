import { Card } from "@mui/material";
import { useRef } from "react";
import Comment from "./components/comment/comment";
import NewComments from "./components/newComment/newComment";

const Comments = ({ comments, productId, handleNewComment }) => {
  const comment = useRef();

  const handleSubmit = async () => {
    await handleNewComment(comment);
  };

  return (
    <Card style={{ margin: "10px" }}>
      <NewComments onSubmit={handleSubmit} commentRef={comment} />
      {comments && comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </Card>
  );
};

export default Comments;
