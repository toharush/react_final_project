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
import { fetchProduct } from "../../features/product/services/product";
import { loadCart } from "../../services/cart";
import { getCartItems } from "../../store/selectors/cart/cart";
import { getCurrentUser } from "../../store/selectors/selectors";

const Cart = () => {
  const dispatch = useDispatch();
  const [products, setProdcts] = useState([]);
  const cartItems = useSelector(getCartItems);
  const user = useSelector(getCurrentUser);

  const loadItems = async () => {
    console.log("loadItems");
    let productsItems = [];
    for (let cartItem of cartItems) {
      console.log(cartItem);
      const res = await fetchProduct(cartItem.productId, dispatch);
      productsItems.push({
        ...res,
        chosen: {
          chosenColor: cartItem.color,
          chosenSize: cartItem.size,
          quantity: cartItem.quantity,
        },
      });
    }

    setProdcts(productsItems);
  };

  useEffect(() => {
    if (user?.uid) {
      dispatch(loadCart({ userId: user.uid }));
    }
    if (cartItems.length > 0) {
      loadItems();
    }
  }, [user]);

  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center h-100">
        <MDBCol size="12">
          <MDBCard
            className="card-registration card-registration-2"
            style={{ borderRadius: "15px" }}
          >
            <MDBCardBody className="p-0">
              <MDBRow className="g-0">
                <MDBCol lg="8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <MDBTypography
                        tag="h2"
                        className="fw-bold mb-0 text-black"
                      >
                        Shopping Cart
                      </MDBTypography>
                      <MDBTypography className="mb-0 text-muted">
                        {products.length} items
                      </MDBTypography>
                    </div>
                    <hr className="my-4" />

                    {products.length > 0 &&
                      products.map((product) => (
                        <CartItem
                          handleChange={() => loadItems()}
                          products={cartItems}
                          userId={user.uid}
                          product={product}
                          chosen={product.chosen}
                          key={
                            product._id +
                            product.chosen.chosenColor +
                            product.chosen.chosenSize
                          }
                        />
                      ))}
                  </div>
                </MDBCol>
                <CartCreditCart count={products.length} />
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Cart;
