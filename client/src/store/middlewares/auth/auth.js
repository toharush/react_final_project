import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../config/auth";
import {
  setLoading,
  setError,
  setUser,
  setAdmin,
} from "../../reducers/auth/auth";
import Cookies from "universal-cookie";
import { navigate } from "../router/router";
import axios from "../../../utils/axios";
import { routes } from "../../../routes/router";
import { useSelector } from "react-redux";

const cookies = new Cookies();

export const loginAndSignUp = (login, email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  let user;
  try {
    if (!cookies.get("user")) {
      if (login) {
        user = await signInWithEmailAndPassword(auth, email, password);
      } else {
        user = await createUserWithEmailAndPassword(auth, email, password);
      }

      await axios.post(
        "/auth",
        {},
        {
          headers: {
            Authorization: user.user.stsTokenManager.accessToken,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      await dispatch(getUserInfo());
    }
  } catch (err) {
    dispatch(setError(err));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getUserInfo = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await (await axios.get("/auth")).data;
    await dispatch(setUser(user));
    if (user) await dispatch(navigate(routes.HOME));
    await dispatch(isUserAdmin());
  } catch (err) {
    dispatch(setError(err));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.get("/auth/logout");
    await dispatch(setUser(null));
    await dispatch(navigate(routes.AUTH));
  } catch (err) {
    dispatch(setError(err));
  } finally {
    dispatch(setLoading(false));
  }
};

export const isUserAdmin = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const admin = await (await axios.get("/auth/isAdmin")).data;
    await dispatch(setAdmin(admin ? admin : false));
    if (admin) await dispatch(navigate(routes.ADMIN));
  } catch (err) {
    dispatch(setError(err));
  } finally {
    dispatch(setLoading(false));
  }
};
