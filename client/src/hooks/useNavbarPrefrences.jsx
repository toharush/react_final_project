import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";

const useNavbarPrefrences = () => {
  const user = useSelector(getCurrentUser);
  const userPermission = useSelector(isAdmin);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (!isEmpty(user)) {
      setSettings([
        { name: user.email, route: "profile" },
        { name: "Logout", route: "Logout" },
      ]);
    } else {
      setSettings([
        { name: "Guest", route: null },
        { name: "Login", route: "login" },
      ]);
    }
  }, [user, userPermission]);

  return { settings };
};

export default useNavbarPrefrences;
