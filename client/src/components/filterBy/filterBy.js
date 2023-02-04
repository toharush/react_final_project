import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/reducers/products/products";
import {
  getAllAvilableColors,
  getAllAvilableSizes,
} from "../../store/selectors/selectors";
import Select from "react-select";
import { MDBInput } from "mdb-react-ui-kit";
import "./filterBy.css";

function FilterBy() {
  const dispatch = useDispatch();
  const colors = useSelector(getAllAvilableColors);
  const sizes = useSelector(getAllAvilableSizes);

  const filterBy = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <MDBInput
        type="search"
        onChange={(event) => filterBy({ name: event.target.value })}
        placeholder="search"
      />

      <Select
        options={colors.map((c) => ({ value: c, label: c }))}
        onChange={(event) => filterBy({ color: event?.value || null })}
        isSearchable={true}
        isClearable={true}
        placeholder="color"
        className="select"
      />
      <Select
        options={sizes.map((s) => ({ value: s, label: s }))}
        onChange={(event) => filterBy({ size: event?.value || null })}
        isClearable={true}
        placeholder="size"
        className="select"
      />
    </>
  );
}

export default FilterBy;
