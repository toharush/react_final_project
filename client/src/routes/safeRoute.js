import { useDispatch, useSelector } from "react-redux";
import useUserState from "../hooks/useUserSate";
import { navigate } from "../store/middlewares/router/router";
import { getCurrentUser } from "../store/selectors/selectors";
import Route from "./route";
import { routes } from "./router";

function SafeRoutes({ Components }) {
  const dispatch = useDispatch();
  const auth = useUserState();

  const handleUnauthorized = () => {
    dispatch(navigate(routes.AUTH));
  };

  return (
    <>
      {auth.auth
        ? Components.map((component) => {
            if (component.condition == undefined || component.condition) {
              return (
                <Route
                  Component={component.Component}
                  route={component.route}
                  key={component.route}
                />
              );
            }
          })
        : handleUnauthorized()}
    </>
  );
}

export default SafeRoutes;
