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
    <>
      <NewComments onSubmit={handleSubmit} commentRef={comment} />
      {comments?.map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  );
};

export default Comments;
