import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const FilterField = ({ inputLabel, array, handleFilterBy, selectValue }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select value={selectValue} label={inputLabel} onChange={handleFilterBy}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {array.map((s) => (
          <MenuItem value={s} key={s}>
            {s}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterField;
