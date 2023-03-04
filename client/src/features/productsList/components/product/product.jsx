import "./product.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  Stack,
  ToggleButton,
} from "@mui/material";
import Selector from "../selector/selector";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../../../store/reducers/cart/cart";
import { useDispatch } from "react-redux";
import ImageSlider from "../imageSlider/imageSlider";
import "./product.css";

const Product = ({ product, addToCart }) => {
  const dispatch = useDispatch();
  const { name, color, supplier } = product;
  const [chosenColor, setChosenColor] = useState(0);
  const [chosenSize, setChosenSize] = useState(0);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      chosen: {
        chosenSize: chosenSize,
        chosenColor: chosenColor,
      },
    })
  };

  return (
    <Card className="product-card">
      <ImageSlider
        slides={color.map((color) => color)}
        className="product-img"
        currentIndex={chosenColor}
        setCurrentIndex={setChosenColor}
        link={`/${product._id}/${chosenColor}`}
      />
      <Link to={`/${product._id}/${chosenColor}`} >
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
      </Link>
      <CardActions>
        <Stack width={"345px"} alignItems="center">
          <Selector value={chosenSize} setValue={setChosenSize}>
            {color[chosenColor].size.map((size, index) => (
              <ToggleButton value={index} key={product._id + size}>
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
