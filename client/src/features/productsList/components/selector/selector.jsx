import { ToggleButtonGroup } from "@mui/material";
import { isEmpty } from "lodash";

const Selector = ({ value, setValue, children }) => {
  const handleChangeValue = (event, newValue) => {
    if (newValue || newValue === 0 && value != newValue) {
      setValue(newValue);
    }
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleChangeValue} >
      {children}
    </ToggleButtonGroup>
  );
};

export default Selector;
