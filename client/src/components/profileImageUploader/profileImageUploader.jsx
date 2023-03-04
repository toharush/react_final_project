import { Badge, Avatar, Input } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";

const ProfileImageUploader = ({ percent, file, setFile }) => {
  const inputRef = useRef();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Input
        type="file"
        accept="/image/*"
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
          marginBottom: "30px"
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
            src={file ? URL.createObjectURL(file) : null}
            onClick={() => console.log(inputRef.current.click())}
          />
        </Badge>
      </div>
    </>
  );
};

export default ProfileImageUploader;
