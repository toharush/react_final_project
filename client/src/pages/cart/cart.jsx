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
import CartFeat from "../../features/cart/cart";
import { fetchProduct } from "../../features/product/services/product";
import { loadCart, syncCart } from "../../services/cart";
import { getCartItems } from "../../store/selectors/cart/cart";
import { getCurrentUser } from "../../store/selectors/selectors";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const user = useSelector(getCurrentUser);


  useEffect(() => {
    if (user?.uid) {
      dispatch(loadCart({ userId: user.uid }));
    }
  }, [user]);

  return (
    <CartFeat user={user} cartItems={cartItems}/>
  );
};

export default Cart;
