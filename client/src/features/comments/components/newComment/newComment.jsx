import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import {
  Button,
  CardActionArea,
  CardActions,
  Rating,
  TextField,
} from "@mui/material";

const NewComments = ({ onSubmit, commentRef, rating, setRating }) => {
  
  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Me"
        subheader={new Date().toDateString()}
      />
      <CardContent>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <TextField
          variant="outlined"
          label="comment"
          fullWidth
          inputRef={commentRef}
        />
      </CardContent>
      <CardActions>
        <Button onClick={onSubmit}>Send</Button>
      </CardActions>
    </>
  );
};

export default NewComments;
