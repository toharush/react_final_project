import { useDispatch } from "react-redux";
import { setFilter, setSearch } from "../../store/reducers/products/products";
import { MDBInput } from "mdb-react-ui-kit";

function FilterBy() {
  const dispatch = useDispatch();

  const filterBy = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <button
        onClick={() => {
          filterBy(({ price }) => price < 50);
        }}
      >
        Filter By Price
      </button>
      <button
        onClick={() => {
          filterBy(({ name }) =>
            name.includes("טופ עיגולי מראה / Purim Collection")
          );
        }}
      >
        Filter By Name
      </button>
    </>
  );
}

export default FilterBy;
