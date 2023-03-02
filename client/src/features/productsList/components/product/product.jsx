import "./product.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  Stack,
  ToggleButton,
} from "@mui/material";
import Selector from "../selector/selector";
import { useState } from "react";
import nameToClass from "../../../../utils/nameToClass";
import { Link } from "react-router-dom";
import { addToCart } from "../../../../store/reducers/cart/cart";
import { useDispatch } from "react-redux";
import CardImg from "react-bootstrap/esm/CardImg";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { name, color, supplier } = product;
  const [chosenColor, setChosenColor] = useState(0);
  const [chosenSize, setChosenSize] = useState(0);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        chosen: {
          chosenSize: chosenSize,
          chosenColor: chosenColor,
        },
      })
    );
  };

  return (
    <Card className="product">
      <Link to={`../${product._id}/${chosenColor}`}>
        <CardActionArea>
          <CardImg src={color[chosenColor].img} className="product-img" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="name"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {supplier}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Stack width={"345px"} alignItems="center">
          <Selector value={chosenSize} setValue={setChosenColor}>
            {color.map((c, index) => (
              <Avatar
                className={"avtr-btn " + nameToClass(c.color.name)}
                variant="circular"
                typeof="button"
                onClick={() => setChosenColor(index)}
                key={c.color.name}
              />
            ))}
          </Selector>
          <Selector value={chosenSize} setValue={setChosenSize}>
            {color[chosenColor].size.map((size, index) => (
              <ToggleButton value={index} key={chosenSize + size}>
                {size}
              </ToggleButton>
            ))}
          </Selector>

          <Button size="small" color="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Product;
