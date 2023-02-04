import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/reducers/products/products";
import {
  getAllAvilableColors,
  getAllAvilableSizes,
  getCurrentColor,
} from "../../store/selectors/selectors";
import Select from "react-select";

function FilterBy() {
  const dispatch = useDispatch();
  const colors = useSelector(getAllAvilableColors);
  const sizes = useSelector(getAllAvilableSizes);

  const filterBy = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <Select
        options={colors.map((c) => ({ value: c, label: c }))}
        onChange={(event) => filterBy({ color: event?.value || null })}
        isSearchable={true}
        isClearable={true}
      />
      <Select
        options={sizes.map((s) => ({ value: s, label: s }))}
        onChange={(event) => filterBy({ size: event?.value || null })}
        isClearable={true}
      />
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
