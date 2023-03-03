import { useSelector } from "react-redux";
import { getAdminMsg } from "../../store/selectors/selectors";

const Admin = () => {
  const data = useSelector(getAdminMsg);
  return <div></div>;
};

export default Admin;
