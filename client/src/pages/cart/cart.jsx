import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import CartCreditCart from "../../components/cartCreditCard/cartCreditCard";
import CartItem from "../../components/cartItem/cartItem";
import { getCartItems } from "../../store/selectors/cart/cart";

const Cart = () => {
  const products = useSelector(getCartItems);

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
                    products.map((product) =>
                      product.chosen.map((chosen) => (
                        <CartItem
                          product={product}
                          chosen={chosen}
                          key={
                            product._id +
                            chosen.chosenColor +
                            chosen.chosenSize
                          }
                        />
                      ))
                    )}
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
