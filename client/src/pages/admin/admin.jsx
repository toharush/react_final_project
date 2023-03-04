import { useSelector } from "react-redux";
import { getAdminMsg, isAdmin } from "../../store/selectors/selectors";
import LoggedInGraph from "../../features/loggedInGraph";

const Admin = () => {
  const data = useSelector(getAdminMsg);
  const admin = useSelector(isAdmin);

  return admin ? <LoggedInGraph data={data} /> : null;
};

export default Admin;
