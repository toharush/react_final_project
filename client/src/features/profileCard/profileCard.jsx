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
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/selectors/auth/auth";
import ProfileImageUploader from "../../components/profileImageUploader/profileImageUploader";
import { useState } from "react";

const ProfileCard = () => {
  const user = useSelector(getCurrentUser);
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state

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
          <Button>Save</Button>

          <Button>Cancel</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProfileCard;
