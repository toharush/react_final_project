import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";

const useNavbarPrefrences = () => {
  const user = useSelector(getCurrentUser);
  const userPermission = useSelector(isAdmin);

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
