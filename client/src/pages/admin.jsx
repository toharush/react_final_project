import { useSelector } from "react-redux";
import useAdminWs from "../hooks/useAdminWs";
import { getAdminMsg } from "../store/selectors/selectors";

const Admin = () => {
  useAdminWs();
  const data = useSelector(getAdminMsg);
  return <div></div>;
};

export default Admin;
