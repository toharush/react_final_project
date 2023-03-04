import Grid2 from "@mui/material/Unstable_Grid2";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/selectors/auth/auth";
import ProfileImageUploader from "../../components/profileImageUploader/profileImageUploader";
import { useState } from "react";
import { handleUpload } from "../../lib/storage";
import { setReloadUser } from "../../store/reducers/auth/auth";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state

  const handleSubmit = () => {
    if(file) {
      handleUpload(file, user.uid, setPercent);
      dispatch(setReloadUser());
    }
  }

  return (
    <Container className="profile-card" fixed>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <ProfileImageUploader id={user.uid} file={file} percent={percent} setFile={setFile}/>
          <TextField
            fullWidth
            id="email"
            type="email"
            disabled
            label="email"
            variant="outlined"
            value={user.email}
            sx={{
              padding: "10px !important",
            }}
          />
          <TextField
            fullWidth
            id="password"
            type="password"
            label="password"
            variant="outlined"
            sx={{
              padding: "10px !important",
            }}
          />
        </CardContent>
        <CardActions>
          <Button onClick={handleSubmit}>Save</Button>

          <Button>Cancel</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProfileCard;
