import { useSelector } from "react-redux";
import { getAdminMsg } from "../../store/selectors/selectors";
import LoggedInGraph from "../../features/loggedInGraph";

const Admin = () => {
  const data = useSelector(getAdminMsg);
  
  return (
    <LoggedInGraph data={data}/>
  );
};

export default Admin;
