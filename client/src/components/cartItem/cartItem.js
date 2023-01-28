import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { setItem } from "../../store/reducers/cart/cart";

function CartItem({ product }) {
    const dispatch = useDispatch();
  const {
    img,
    name,
    price,
    quantity,
    supplier,
    description,
    chosenColor,
    chosenSize,
  } = product;

  const changeItemCount = (count) => {
    dispatch(setItem({
        ...product,
        quantity: count
    }));
  }
  return (
    <>
      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
        <MDBCol md="2" lg="2" xl="2">
          <MDBCardImage
            src={img}
            fluid
            className="rounded-3"
            alt="Cotton T-shirt"
          />
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3">
          <MDBTypography tag="h6" className="text-muted">
            {name} &#x2022; {chosenColor} &#x2022; {chosenSize}
          </MDBTypography>
          <MDBTypography tag="h6" className="text-muted">
            {description}
          </MDBTypography>
          <MDBTypography tag="h6" className="text-black mb-0">
            {supplier}
          </MDBTypography>
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
          <MDBBtn color="link" className="px-2">
            <MDBIcon fas icon="minus" />
          </MDBBtn>

          <MDBInput type="number" min="0" defaultValue={quantity} size="sm" onChange={(event) => changeItemCount(event.target.value)}/>

          <MDBBtn color="link" className="px-2">
            <MDBIcon fas icon="plus" />
          </MDBBtn>
        </MDBCol>
        <MDBCol md="3" lg="2" xl="2" className="text-end">
          <MDBTypography tag="h6" className="mb-0">
            ${price}
          </MDBTypography>
        </MDBCol>
        <MDBCol md="1" lg="1" xl="1" className="text-end">
          <a href="#!" className="text-muted">
            <MDBIcon fas icon="times" />
          </a>
        </MDBCol>
      </MDBRow>
      <hr className="my-4" />
    </>
  );
}

export default CartItem;
