import { TextField } from "@mui/material";
import { filter, union } from "lodash";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedProducts } from "../../store/reducers/products/products";
import { getProducts } from "../../store/selectors/selectors";

const Search = ({}) => {
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
      <TextField
        id="search"
        label="search"
        variant="standard"
        InputProps={{
          type: "search",
        }}
        inputRef={searchField}
        onKeyUp={handleSearch}
      />
    </>
  );
};

export default Search;
