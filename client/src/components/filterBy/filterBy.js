import { useDispatch } from "react-redux";
import { setFilter } from "../../store/reducers/products/products";

  function FilterBy({  }) {
    const dispatch = useDispatch();
    const filterBy = (filter) => {
        dispatch(setFilter(filter));
    }
    return (
      <>
        <button onClick={() => {filterBy((item) => item.price < 40)}}>Filter By Price</button>
      </>
    );
  }
  
  export default FilterBy;
  