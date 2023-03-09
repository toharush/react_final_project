import {
  Divider,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CardImg from "react-bootstrap/esm/CardImg";

function CartItem({ userId, products, product, handleChange, cartItem }) {
  const { name, price, color, supplier, description } = product;

  const changeItemCount = (count) => {
    handleChange({
      userId: userId,
      cart: products,
      count: count,
      newProduct: product,
    });
  };

  return cartItem ? (
    <>
      <TableRow className="mb-4 d-flex justify-content-between align-items-center">
        <TableCell md="2" lg="2" xl="2">
          <CardImg
            src={color[product.chosen.chosenColor].img}
            className="rounded-3"
            alt="Cotton T-shirt"
          />
        </TableCell>
        <TableCell md="3" lg="3" xl="3">
          <Typography tag="h6">
            {name} &#x2022; {color[product.chosen.chosenColor].color.name}{" "}
            &#x2022;
            {color[product.chosen.chosenColor].size[product.chosen.chosenSize]}
          </Typography>
          <Typography tag="h6" className="text-muted">
            {description}
          </Typography>
          <Typography tag="h6" className="text-black mb-0">
            {supplier}
          </Typography>
        </TableCell>
        <TextField
          type="number"
          min="0"
          value={cartItem.quantity}
          size="sm"
          style={{
            width: "10vw",
            marginRight: "1vw",
          }}
          onChange={(event) => changeItemCount(event.target.value)}
        />
        <Typography tag="h6" className="mb-0">
          ${price}
        </Typography>
      </TableRow>
      <Divider />
    </>
  ) : null;
}

export default CartItem;
