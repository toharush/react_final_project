import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./quantity.css";
import { Box } from "@mui/system";

const Quantity = ({ max }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(max <= 0 ? 0 : 1);
  }, [max]);

  return (
    <Box component="form">
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
