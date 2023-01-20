import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cart/cart";

function Product({ product }) {
  const dispatch = useDispatch();
  const { name, supplier, price, img } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <h1>{name}</h1>
      <span>{supplier} </span>
      <span>{price}$</span>
      <img src={img} />
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

export default Product;