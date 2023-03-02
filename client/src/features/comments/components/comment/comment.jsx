import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const Comment = ({ comment }) => {
  return (
    <Card style={{ margin: "5px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={comment.userId}
        subheader={comment.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment.comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
