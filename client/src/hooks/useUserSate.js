import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, isUserAdmin } from "../store/middlewares/auth/auth";
import { getCurrentPage } from "../store/selectors/router/router";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";

function useUserState() {
  const dispatch = useDispatch();
  const auth = useSelector(getCurrentUser);
  const admin = useSelector(isAdmin);

  useEffect(() => {
    if (!auth) {
      dispatch(getUserInfo());
    } else {
      if (!admin) {
        dispatch(isUserAdmin());
      }
    }
  }, [auth]);

  return {
    auth: auth, 
    admin: admin
  }
}

export default useUserState;
