import { TextField, Typography } from "@mui/material";

const AdminEditAbleValue = ({ value, setValue, admin, textSize, ...props }) => {
  return admin ? (
    <TextField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...props}
    />
  ) : (
    <Typography variant={textSize} {...props}>{value}</Typography>
  );
};

export default AdminEditAbleValue;
