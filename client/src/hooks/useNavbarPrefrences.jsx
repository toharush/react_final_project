import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";

const useNavbarPrefrences = () => {
  const user = useSelector(getCurrentUser);
  const userPermission = useSelector(isAdmin);
  const [settings, setSettings] = useState([]);
  const [pages, setPages] = useState([
    { name: "Browse", route: "products" },
    { name: "Cart", route: "cart" },
    { name: "Admin Panel", route: "admin" }
  ]);

  useEffect(() => {
    if (!isEmpty(user)) {
      setSettings([
        { name: user.email, route: "profile" },
        { name: "Logout", route: "Logout" },
      ]);
      if (
        userPermission &&
        !pages.includes({ name: "Admin Panel", route: "admin" })
      ) {
        setPages([...pages, { name: "Admin Panel", route: "admin" }]);
      }
    } else {
      setSettings([
        { name: "Guest", route: null },
        { name: "Login", route: "login" },
      ]);
      if (pages.includes({ name: "Admin Panel", route: "admin" })) {
        setPages(
          pages.filter(
            (item) => item != { name: "Admin Panel", route: "admin" }
          )
        );
      }
    }
  }, [user, userPermission]);

  return { settings, pages };
};

export default useNavbarPrefrences;
