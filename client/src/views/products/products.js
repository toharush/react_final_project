import { connect } from 'react-redux';
import Product from '../../components/product/product';

function Products({ products }) {
  return (
    <div>
        {   
            products.map(product => <Product product={product} key={product.id} />)
        }
    </div>
  );

}
const mapStateToProps = state => ({
    products: state.productsReducer.products
});
  
export default connect(mapStateToProps)(Products);