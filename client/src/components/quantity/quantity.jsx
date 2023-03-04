import { Button, Card, IconButton, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import "./quantity.css";
import { Box } from "@mui/system";
const Quantity = ({ props }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Box component="form">
      <TextField
        type="number"
        id="outlined-basic"
        label="Quantity"
        variant="outlined"
        onChange={(e) =>
          e.target.value > 0 ? setQuantity(e.target.value) : null
        }
        value={quantity}
      />
    </Box>
  );
};

export default Quantity;
