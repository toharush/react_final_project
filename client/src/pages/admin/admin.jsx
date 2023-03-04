import { useSelector } from "react-redux";
import { getAdminMsg, isAdmin } from "../../store/selectors/selectors";
import LoggedInGraph from "../../features/loggedInGraph";
import FourOFour from "../404/404";

const Admin = () => {
  const data = useSelector(getAdminMsg);
  const admin = useSelector(isAdmin);

  return admin ? (
    <LoggedInGraph data={data} />
  ) : (
    <FourOFour
      errorNumber="404"
      errorName="Look like you're lost"
      errorMsg="the page you are looking for not avaible!"
    />
  );
};

export default Admin;
