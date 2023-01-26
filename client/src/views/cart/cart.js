import { useSelector } from "react-redux";
import { getCartItems } from "../../store/selectors/cart/cart";

function Cart() {
  const cartItems = useSelector(getCartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <span>{item.id} </span>
      ))}
    </div>
  );
}

export default Cart;
