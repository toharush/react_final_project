import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/reducers/products/products";
import {
  getAllAvilableCategories,
  getAllAvilableColors,
  getAllAvilableSizes,
  getFilters,
  getSuppliers,
} from "../../store/selectors/selectors";
import FilterField from "./components/filterField";

const Filter = ({}) => {
  const dispatch = useDispatch();
  const colors = useSelector(getAllAvilableColors);
  const categories = useSelector(getAllAvilableCategories);
  const sizes = useSelector(getAllAvilableSizes);
  const filters = useSelector(getFilters);
  const suppliers = useSelector(getSuppliers);

  const handleFilterBy = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div style={{ marginLeft: "3%" }}>
      <FilterField
        inputLabel="Colors"
        selectValue={filters.color}
        handleFilterBy={(event) =>
          handleFilterBy({ color: event.target.value })
        }
        array={colors}
        key="Color"
      />

      <FilterField
        inputLabel="Sizes"
        selectValue={filters.size}
        handleFilterBy={(event) => handleFilterBy({ size: event.target.value })}
        array={sizes}
        key="Size"
      />

      <FilterField
        inputLabel="suppliers"
        selectValue={filters.supplier}
        handleFilterBy={(event) =>
          handleFilterBy({ supplier: event.target.value })
        }
        array={suppliers}
        key="suppliers"
      />

      <FilterField
        inputLabel="categories"
        selectValue={filters.category}
        handleFilterBy={(event) =>
          handleFilterBy({ category: event.target.value })
        }
        array={categories}
        key="categories"
      />
    </div>
  );
};

export default Filter;
