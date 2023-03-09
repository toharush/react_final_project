import { Button, Divider, TextField, Typography } from "@mui/material";
import { MDBCol } from "mdb-react-ui-kit";
import "./cartCreditCard.css";

function CartCreditCart({ price }) {

  return (
    <>
      <MDBCol lg="4" className="bg-grey">
        <div className="p-5">
          <Typography
            variant="h5"
            fontWeight="bold"
            style={{
              margin: "10px",
            }}
          >
            Summary
          </Typography>

          <Divider variant="middle" />

          <TextField
            variant="outlined"
            label="credit card"
            fullWidth
            style={{
              margin: "10px",
            }}
          />

          <TextField
            variant="outlined"
            label="ID Number"
            fullWidth
            style={{
              margin: "10px",
            }}
          />

          <Divider variant="middle" />

          <div
            className="d-flex justify-content-between mb-5"
            style={{
              margin: "10px",
            }}
          >
            <Typography variant="h5">Total price</Typography>

            <Typography variant="h5" className="totalPrice">
              ${price}
            </Typography>
          </div>

          <Button variant="contained">Buy</Button>
        </div>
      </MDBCol>
    </>
  );
}

export default CartCreditCart;
