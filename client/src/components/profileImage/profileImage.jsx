import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";

const ProfileImage = ({ id }) => {
  console.log(id);
  return id ? (
    <Avatar
      aria-label="user"
      src={`https://firebasestorage.googleapis.com/v0/b/terminal-a408f.appspot.com/o/profile%2F${id}?alt=media&token=6096a587-1e62-4824-a487-a7cd2e81fa3d`}
    />
  ) : (
    <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
      G
    </Avatar>
  );
};

export default ProfileImage;
