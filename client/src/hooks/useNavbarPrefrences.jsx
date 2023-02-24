import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../services/authentication";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";

const useNavbarPrefrences = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const userPermission = useSelector(isAdmin);
  const [settings, setSettings] = useState([]);
  const [pages, setPages] = useState([
    { name: "Browse", route: "products" },
    { name: "Cart", route: "cart" },
  ]);

  useEffect(() => {
    if (!isEmpty(user)) {
      setSettings([
        { name: user.email, route: "profile" },
        { name: "Logout", route: "Logout" },
      ]);
      if (userPermission) {
        setPages([...pages, { name: "Admin Panel", route: "admin" }]);
      }
    } else {
      setSettings([
        { name: "Guest", route: null },
        { name: "Login", route: "login" },
      ]);
    }
  }, [user]);

  return { settings, pages };
};

export default useNavbarPrefrences;
