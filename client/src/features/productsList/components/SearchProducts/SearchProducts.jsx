import { filter, union } from "lodash";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../../../components/search/search";
import { setSearchedProducts } from "../../../../store/reducers/products/products";
import { getProducts } from "../../../../store/selectors/selectors";

const SearchProducts = ({}) => {
  const dispatch = useDispatch();
  const searchField = useRef();
  const data = useSelector(getProducts);

  const handleFilterByColor = () =>
    filter(
      data,
      (product) =>
        product.color.filter((color) =>
          color.color.name.includes(searchField.current.value)
        ).length > 0
    );

  const handleFilterByName = () =>
    filter(data, (o) => o.name.includes(searchField.current.value));

  const handleSearch = (event) => {
    event.preventDefault();
    const color = handleFilterByColor();
    const name = handleFilterByName();
 
    dispatch(setSearchedProducts(union(color, name)));
  };

  return (
    <>
      <Search inputRef={searchField} onChange={handleSearch}/>
    </>
  );
};

export default SearchProducts;
