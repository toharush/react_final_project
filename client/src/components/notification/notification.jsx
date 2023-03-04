import { useEffect, useState } from "react";

const { Alert, Snackbar } = require("@mui/material");

const Notification = ({ data, type }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  }, [data]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open && Boolean(data)}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={type}
          sx={{ width: "100%" }}
        >
          {data}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Notification;
