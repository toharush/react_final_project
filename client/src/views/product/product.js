import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();

    return (
      <div>
        <h1>{id}</h1>
      </div>
    );
}
  
export default Product;