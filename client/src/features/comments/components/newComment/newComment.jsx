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
import Loader from "../../../../components/loader/loader";
import { Box } from "@mui/system";
import ProfileImage from "../../../../components/profileImage/profileImage";

const NewComments = ({
  onSubmit,
  commentRef,
  rating,
  setRating,
  loading,
  userId,
}) => {
  return userId ? (
    !loading ? (
      <>
        <CardHeader
          avatar={<ProfileImage id={userId} date={false} />}
          title="Me"
          subheader={new Date().toDateString()}
        />
        <CardContent>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
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
    ) : (
      <Box
        style={{
          height: "100px",
        }}
      >
        <Loader />
      </Box>
    )
  ) : null;
};

export default NewComments;
