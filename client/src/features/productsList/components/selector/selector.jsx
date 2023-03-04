import { ToggleButtonGroup } from "@mui/material";
import { isEmpty } from "lodash";

const Selector = ({ value, setValue, children }) => {
  const handleChangeValue = (event) => {
    console.log(event.target.value)
    if (event.target.value || event.target.value === 0 && value != event.target.value) {
      setValue(event.target.value);
    }
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleChangeValue} >
      {children}
    </ToggleButtonGroup>
  );
};

export default Selector;
