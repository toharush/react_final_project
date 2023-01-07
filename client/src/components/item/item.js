import { connect } from 'react-redux';

function Item({ items }) {
  return (
    <div>
        {   
             items.map(item => <div key={item}>
                <h1>{item.name}</h1>
                <span>{item.supplier} </span>
                <span>{item.price}$</span>
                <img src={item.img} />
             </div>)
        }
    </div>
  );

}
const mapStateToProps = state => ({
    items: state.itemsReducer.items
});
  
export default connect(mapStateToProps)(Item);