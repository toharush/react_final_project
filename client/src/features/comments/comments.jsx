import { Card, Divider } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Comment from "./components/comment/comment";
import NewComments from "./components/newComment/newComment";
import { Scrollbars } from "react-custom-scrollbars-2";
import { getCurrentUser } from "../../store/selectors/auth/auth";
import { useSelector } from "react-redux";

const Comments = ({
  comments,
  handleNewComment,
  rating,
  setRating,
  loading,
}) => {
  const comment = useRef();
  const user = useSelector(getCurrentUser)

  const handleSubmit = async () => {
    await handleNewComment(comment, user?.uid);
  };

  return (
    <Scrollbars style={{ width: "100%", height: "85vh" }}>
      <Card>
        {user ? (
          <NewComments
            onSubmit={handleSubmit}
            commentRef={comment}
            rating={rating}
            setRating={setRating}
            loading={loading}
          />
        ) : null}
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
