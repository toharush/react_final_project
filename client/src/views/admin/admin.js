import { useSelector } from "react-redux";
import { getAdminMsg } from "../../store/selectors/selectors";

function Admin() {
  const data = useSelector(getAdminMsg);
  return (
    <div>
      admin
      {data}
    </div>
  );
}

export default Admin;
