import { Avatar, Chip, Icon } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { getDateById } from "../../../../services/dates";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../../store/reducers/products/products";
import { Link, Navigate } from "react-router-dom";
import classByName from "../../../../utils/nameToClass";
import { renderColorName } from "../../../../utils/renderColorName";
import { useRef } from "react";

const MetaData = ({ product, handleChosenColor }) => {
  const dispatch = useDispatch();
  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
    Navigate({ to: "..", relative: "path" });
  };
  return (
    <>
      <Link to=".." relative="path">
        <Chip
          avatar={<Avatar>{product.supplier[0]}</Avatar>}
          label={product.supplier}
          onClick={() => handleFilter({ supplier: product.supplier })}
        />
      </Link>
      <Link to=".." relative="path">
        {product.color.map((color) => (
          <Chip
            avatar={
              <Avatar className={classByName(color.color.name)}>
                {color.color.name[0]}
              </Avatar>
            }
            label={renderColorName(color.color.name)}
            //   onClick={() => handleChosenColor(color)}
            onClick={() => handleFilter({ color: color.color.name })}
          />
        ))}
      </Link>
      <Chip avatar={<CalendarTodayIcon />} label={getDateById(product._id)} />
    </>
  );
};

export default MetaData;
