import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/reducers/products/products";
import { getAllAvilableColors, getAllAvilableSizes } from "../../store/selectors/selectors";

function FilterBy() {
  const dispatch = useDispatch();
  const colors = useSelector(getAllAvilableColors);
  const sizes = useSelector(getAllAvilableSizes);

  const filterBy = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <select className="select" multiple>
        {colors.map((selectedColor) => (
          <option onClick={() => filterBy({ color: selectedColor })}>
            {selectedColor}
          </option>
        ))}
      </select>
      <select className="select" multiple>
        {sizes.map((selectedSize) => (
          <option onClick={() => filterBy({ size: selectedSize })}>
            {selectedSize}
          </option>
        ))}
      </select>
      <input
        type="radio"
        value="0 - 100"
        name="filter"
        onClick={() => filterBy({ price: 100 })}
      />
    </>
  );
}

export default FilterBy;
