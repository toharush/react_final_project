import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/selectors/auth/auth";
import ProfileImageUploader from "../../components/profileImageUploader/profileImageUploader";
import { useRef, useState } from "react";
import { handleUpload } from "../../lib/storage";
import { changePassword } from "../../services/firebase";
import "./profileCard.css";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const password = useRef();
  const user = useSelector(getCurrentUser);
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state

  const handleSubmit = async () => {
    await handleUpload(file, user?.uid, setPercent, dispatch);

    if (password.current.value) {
      await changePassword(user, password.current.value);
    }
  };

  return (
    <Container className="profile-card" fixed>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <ProfileImageUploader
            id={user?.uid}
            file={file}
            percent={percent}
            setFile={setFile}
          />
          <TextField
            fullWidth
            id="email"
            type="email"
            disabled
            label="email"
            variant="outlined"
            value={user?.email ?? ""}
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
            inputRef={password}
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
