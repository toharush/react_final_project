import { Badge, Avatar, Input } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";

const ProfileImageUploader = ({ percent, file, setFile, id }) => {
  const inputRef = useRef();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Input
        typeof="image"
        type="file"
        inputProps={{
          accept: "image/*",
        }}
        style={{
          display: "none",
        }}
        inputRef={inputRef}
        onChange={handleChange}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginBottom: "30px",
        }}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          badgeContent={
            <EditIcon
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          }
        >
          <Avatar
            alt="Guest"
            style={{
              width: "90px",
              height: "90px",
            }}
            src={
              file
                ? URL.createObjectURL(file)
                : id
                ? `https://firebasestorage.googleapis.com/v0/b/terminal-a408f.appspot.com/o/profile%2F${id}?alt=media&token=6096a587-1e62-4824-a487-a7cd2e81fa3d`
                : null
            }
            onClick={() => console.log(inputRef.current.click())}
          />
        </Badge>
      </div>
    </>
  );
};

export default ProfileImageUploader;
