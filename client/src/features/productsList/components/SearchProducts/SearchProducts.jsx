import { useDispatch } from "react-redux";
import Search from "../../../../components/search/search";
import { setFilter } from "../../../../store/reducers/products/products";

const SearchProducts = ({}) => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();

    dispatch(setFilter({ search: event.target.value }));
  };

  return (
    <>
      <Search onChange={handleSearch} />
    </>
  );
};

export default SearchProducts;
