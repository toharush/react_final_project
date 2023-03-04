import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Rating } from "@mui/material";
import ProfileImage from "../../../../components/profileImage/profileImage";

const Comment = ({ comment }) => {
  return (
    <>
      <CardHeader
        avatar={
          <ProfileImage id={comment.userId} date={false} />
        }
        title={comment.userEmail}
        subheader={comment.date}
      />
      <CardContent>
        <Rating name="simple-controlled" value={comment?.rating ?? 0} readOnly />
        <Typography variant="body2" color="text.secondary">
          {comment.comment}
        </Typography>
      </CardContent>
    </>
  );
};

export default Comment;
