import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/reducers/products/products";
import {
  getAllAvilableColors,
  getAllAvilableSizes,
  getFilters,
  getSuppliers,
} from "../../store/selectors/selectors";

const Filter = ({}) => {
  const dispatch = useDispatch();
  const colors = useSelector(getAllAvilableColors);
  const sizes = useSelector(getAllAvilableSizes);
  const filters = useSelector(getFilters);
  const suppliers = useSelector(getSuppliers);
  
  const handleFilterBy = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Colors</InputLabel>
        <Select
          value={filters.color}
          label="Color"
          onChange={(event) => handleFilterBy({ color: event.target.value })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {colors.map((c) => (
            <MenuItem value={c} key={c}>
              {c.replace(" : צבע", "")}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Sizes</InputLabel>
        <Select
          value={filters.size}
          label="Size"
          onChange={(event) => handleFilterBy({ size: event.target.value })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {sizes.map((s) => (
            <MenuItem value={s} key={s}>
              {s}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>suppliers</InputLabel>
        <Select
          value={filters.supplier}
          label="supplier"
          onChange={(event) => handleFilterBy({ supplier: event.target.value })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {suppliers.map((s) => (
            <MenuItem value={s} key={s}>
              {s}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Filter;
