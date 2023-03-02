import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../store/middlewares/auth/auth";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";

function useUserState() {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState();
  //const auth = useSelector(getCurrentUser);
  const admin = useSelector(isAdmin);

  useEffect(() => {
    if(!auth) {
      dispatch(getUserInfo());
    } 
  }, [auth]);

  return {
    auth: auth, 
    admin: admin
  }
}

export default useUserState;
