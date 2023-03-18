import { useEffect } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./quantity.css";

const Quantity = ({ max, quantity, setQuantity, ...props }) => {
  useEffect(() => {
    setQuantity(max <= 0 ? 0 : 1);
  }, [max]);

  return (
    <Box component="form" {...props}>
      <TextField
        type="number"
        id="outlined-basic"
        label="Quantity"
        variant="outlined"
        onChange={(e) =>
          e.target.value > 0 && e.target.value <= max
            ? setQuantity(e.target.value)
            : null
        }
        value={quantity}
      />
    </Box>
  );
};

export default Quantity;
