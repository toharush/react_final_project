import {
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBTypography
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { getItemPrice, getTotalPrice } from "../../store/selectors/cart/cart";

function CartCreditCart({ count }) {
    const totalPrice = useSelector(getTotalPrice);
    const itemPrice = useSelector(getItemPrice);
  return (
    <>
      <MDBCol lg="4" className="bg-grey">
        <div className="p-5">
          <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
            Summary
          </MDBTypography>

          <hr className="my-4" />

          <div className="d-flex justify-content-between mb-4">
            <MDBTypography tag="h5" className="text-uppercase">
              items {count}
            </MDBTypography>
            <MDBTypography tag="h5">${itemPrice}</MDBTypography>
          </div>
          <MDBTypography tag="h5" className="text-uppercase mb-3">
            Credit Card
          </MDBTypography>

          <div className="mb-5">
            <MDBInput size="lg" label="Enter your credit card" />
          </div>

          <MDBTypography tag="h5" className="text-uppercase mb-3">
            ID Number
          </MDBTypography>

          <div className="mb-5">
            <MDBInput size="lg" label="Enter your ID Number" />
          </div>

          <hr className="my-4" />

          <div className="d-flex justify-content-between mb-5">
            <MDBTypography tag="h5" className="text-uppercase">
              Total price
            </MDBTypography>
            <MDBTypography tag="h5">${totalPrice}</MDBTypography>
          </div>

          <MDBBtn color="dark" block size="lg">
            Buy
          </MDBBtn>
        </div>
      </MDBCol>
    </>
  );
}

export default CartCreditCart;
