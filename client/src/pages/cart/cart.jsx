import { Modal } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCreditCart from "../../components/cartCreditCard/cartCreditCard";
import CartItem from "../../components/cartItem/cartItem";
import LoginModalError from "../../components/loginErrorModal/loginModalError";
import CartFeat from "../../features/cart/cart";
import { buyServer } from "../../features/cart/services/cart";
import { fetchProduct } from "../../features/product/services/product";
import { loadCart, syncCart } from "../../services/cart";
import { getCartItems } from "../../store/selectors/cart/cart";
import { getCurrentUser } from "../../store/selectors/selectors";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const [open, setOpen] = useState(false);
  const user = useSelector(getCurrentUser);

  const handleBuy = async() => {
    if (user?.uid) {
      await buyServer(user.uid, cartItems, dispatch);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (user?.uid) {
      dispatch(loadCart({ userId: user.uid }));
    }
  }, [user]);

  return (
    <>
      <CartFeat
        user={user}
        cartItems={cartItems}
        handleBuy={() => handleBuy()}
      />
      <LoginModalError open={open} setOpen={setOpen} />
    </>
  );
};

export default Cart;
