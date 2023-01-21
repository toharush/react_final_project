import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/auth";
import { setLoading, setError, setUser, setAdmin } from "../../reducers/auth/auth";
import Cookies from 'universal-cookie';
import { navigate } from "../router/router";
import axios from "axios";
import { routes } from "../../../routes/router";

const cookies = new Cookies();

export const loginAndSignUp = (login, email, password) => async dispatch => {
    dispatch(setLoading(true));
    let user;
    try {
        if (!cookies.get("user")) {
            if (login) {
                user = await signInWithEmailAndPassword(auth, email, password);
            } else {
                user = await createUserWithEmailAndPassword(auth, email, password);
            }

            await axios.post("http://localhost:8080/api/v1/auth", {}, {
                headers: {
                    token: user.user.stsTokenManager.accessToken,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            await dispatch(getUserInfo());
        }
    } catch (err) {
        dispatch(setError(err));
    } finally {
        dispatch(setLoading(false));
    }
}

export const getUserInfo = () => async dispatch => {
    dispatch(setLoading(true));
    try {
        const user = await (await axios.get("http://localhost:8080/api/v1/auth", { withCredentials: true })).data;
        await dispatch(setUser(user));
        dispatch(isUserAdmin())
        await dispatch(navigate(routes.HOME));
    } catch (err) {
        dispatch(setError(err));
    } finally {
        dispatch(setLoading(false));
    }
}

export const logout = () => async dispatch => {
    dispatch(setLoading(true));
    try {
        await axios.get("http://localhost:8080/api/v1/auth/logout", { withCredentials: true });
        await dispatch(setUser(null));
        await dispatch(navigate(routes.AUTH))
    } catch (err) {
        dispatch(setError(err));
    } finally {
        dispatch(setLoading(false));
    }
}

export const isUserAdmin = () => async dispatch => {
    dispatch(setLoading(true));
    try {
        const admin = await (await axios.get("http://localhost:8080/api/v1/auth/isAdmin", { withCredentials: true })).data;
        await dispatch(setAdmin(admin ? admin : false));
        if (admin) await dispatch(navigate(routes.ADMIN))
    } catch (err) {
        dispatch(setError(err));
    } finally {
        dispatch(setLoading(false));
    }
}
