import { Card } from "@mui/material";
import { isEmpty } from "lodash";
import { useRef } from "react";
import Comment from "./components/comment/comment";
import NewComments from "./components/newComment/newComment";
import { fetchNewComments } from "./services/comments";

const Comments = ({ comments, productId }) => {
  const comment = useRef();

  const handleSubmit = async () => {
    if (!isEmpty(comment.current.value)) {
      await fetchNewComments(comment.current.value, productId);
    }
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
