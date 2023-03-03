import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAdmin } from "../services/authentication";
import { getCurrentUser, isAdmin as isAdminFromStore } from "../store/selectors/selectors";

const useNavbarPrefrences = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const userPermission = useSelector(isAdminFromStore);

  const loginSettings = [
    { name: user.email, route: "profile" },
    { name: "Logout", route: "Logout" },
  ];
  const regularSettings = [
    { name: "Guest", route: null },
    { name: "Login", route: "login" },
  ];

  const adminPages = [
    { name: "Browse", route: "products" },
    { name: "Cart", route: "cart" },
    { name: "Admin Panel", route: "admin" },
  ];
  const regularPages = [
    { name: "Browse", route: "products" },
    { name: "Cart", route: "cart" },
  ];

  const [settings, setSettings] = useState(regularSettings);
  const [pages, setPages] = useState(regularPages);

  useEffect(() => {
    if (!isEmpty(user)) {
      setSettings(loginSettings);
      dispatch(isAdmin());
      if (userPermission) {
        setPages(adminPages);
      }
    } else {
      setSettings(regularSettings);
      setPages(regularPages);
    }
  }, [user, userPermission]);



  return { settings, pages };
};

export default useNavbarPrefrences;
