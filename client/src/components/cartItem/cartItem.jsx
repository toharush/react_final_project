import {
  Button,
  ButtonGroup,
  Divider,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import CardImg from "react-bootstrap/esm/CardImg";
import { useDispatch } from "react-redux";
import { setItem } from "../../store/reducers/cart/cart";

function CartItem({ product, chosen }) {
  const dispatch = useDispatch();
  const { img, name, price, quantity, color, supplier, description } = product;

  const changeItemCount = (count) => {
    if (count > 0) {
      dispatch(
        setItem({
          ...product,
          chosen: [
            ...product.chosen.filter((item) => item != chosen),
            {
              ...chosen,
              quantity: count,
            },
          ],
        })
      );
    } else {
      dispatch(
        setItem({
          ...product,
          chosen: [...product.chosen.filter((item) => item != chosen)],
        })
      );
    }
  };
  return (
    <>
      <TableRow className="mb-4 d-flex justify-content-between align-items-center">
        <TableCell md="2" lg="2" xl="2">
          <CardImg
            src={color[chosen.chosenColor].img}
            className="rounded-3"
            alt="Cotton T-shirt"
          />
        </TableCell>
        <TableCell md="3" lg="3" xl="3">
          <Typography tag="h6" className="text-muted">
            {name} &#x2022; {color[chosen.chosenColor].color.name} &#x2022;{" "}
            {color[chosen.chosenColor].size[chosen.chosenSize]}
          </Typography>
          <Typography tag="h6" className="text-muted">
            {description}
          </Typography>
          <Typography tag="h6" className="text-black mb-0">
            {supplier}
          </Typography>
        </TableCell>
        <TableCell md="3" lg="3" xl="3" className="d-flex align-items-center">
          <TextField
            type="number"
            min="0"
            value={chosen.quantity}
            size="sm"
            onChange={(event) => changeItemCount(event.target.value)}
          />
        </TableCell>
        <TableCell md="3" lg="2" xl="2" className="text-end">
          <Typography tag="h6" className="mb-0">
            ${price}
          </Typography>
        </TableCell>
        <TableCell md="1" lg="1" xl="1" className="text-end">
          <a href="#!" className="text-muted">
            <MDBIcon fas icon="times" />
          </a>
        </TableCell>
      </TableRow>
      <Divider />
    </>
  );
}

export default CartItem;
