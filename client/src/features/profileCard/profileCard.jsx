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

const ProfileCard = () => {
  const user = useSelector(getCurrentUser);
  return (
    <Container className="profile-card" fixed>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <TextField
            fullWidth
            id="email"
            type="email"
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
