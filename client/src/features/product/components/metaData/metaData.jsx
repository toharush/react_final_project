import { Avatar, Chip } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { getDateById } from "../../../../services/dates";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../../store/reducers/products/products";
import { Link, Navigate } from "react-router-dom";
import classByName from "../../../../utils/nameToClass";
import { renderColorName } from "../../../../utils/renderColorName";

const MetaData = ({ product, handleChosenColor }) => {
  const dispatch = useDispatch();
  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
    Navigate({ to: "..", relative: "path" });
  };
  return (
    <div style={{ margin: "10px" }}>
      <Link to="../../products." relative="path">
        <Chip
          avatar={<Avatar>{product.supplier[0]}</Avatar>}
          style={{ marginBottom: "5px", marginRight: "5px" }}
          label={product.supplier}
          onClick={() => handleFilter({ supplier: product.supplier })}
        />
      </Link>
      <Link to="../../products" relative="path">
        {product.categories.map((category) => (
          <Chip
            avatar={<Avatar>{category[0]}</Avatar>}
            style={{ marginBottom: "5px", marginRight: "5px" }}
            label={category}
            onClick={() => handleFilter({ category: category })}
          />
        ))}
      </Link>
      <Link to="../../products" relative="path">
        {product.color.map((color) => (
          <Chip
            avatar={
              <Avatar className={classByName(color.color.name)}>
                {color.color.name[0]}
              </Avatar>
            }
            style={{ marginBottom: "5px", marginRight: "5px" }}
            label={renderColorName(color.color.name)}
            //   onClick={() => handleChosenColor(color)}
            onClick={() =>
              handleFilter({ color: renderColorName(color.color.name) })
            }
          />
        ))}
      </Link>
      <Chip avatar={<CalendarTodayIcon />} label={getDateById(product._id)} />
    </div>
  );
};

export default MetaData;
