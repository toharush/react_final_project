import { Card, Divider } from "@mui/material";
import { useRef, useState } from "react";
import Comment from "./components/comment/comment";
import NewComments from "./components/newComment/newComment";
import { Scrollbars } from "react-custom-scrollbars-2";
const Comments = ({ comments, handleNewComment, rating, setRating }) => {
  const comment = useRef();

  const handleSubmit = async () => {
    await handleNewComment(comment, rating, setRating);
  };

  return (
    <Scrollbars style={{ width: "100%", height: "85vh" }}>
    <Card>

        <NewComments
          onSubmit={handleSubmit}
          commentRef={comment}
          rating={rating}
          setRating={setRating}
        />
        <Divider variant="middle" />
        {comments &&
          comments.map((comment) => (
            <>
              <Comment comment={comment} />
              <Divider variant="middle" />
            </>
          ))}

    </Card>
    </Scrollbars>
  );
};

export default Comments;
