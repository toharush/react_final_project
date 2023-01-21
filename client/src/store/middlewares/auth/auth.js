import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/auth";
import { setLoading, setError, setUser } from "../../reducers/auth/auth";
import Cookies from 'universal-cookie';
import { navigate } from "../router/router";
import axios from "axios";

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
        const user = await (await axios.get("http://localhost:8080/api/v1/auth", {withCredentials: true})).data;
        await dispatch(setUser(user));
        await dispatch(navigate("home"));
    } catch (err) {
        dispatch(setError(err));
    } finally {
        dispatch(setLoading(false));
    }
}

export const logout = () =>  async dispatch => {
    console.log("logout")
    dispatch(setLoading(true));
    try {
        await axios.get("http://localhost:8080/api/v1/auth/logout", {withCredentials: true});
        await dispatch(setUser(null));
        await dispatch(navigate("auth"))
    } catch (err) {
        dispatch(setError(err));
    } finally {
        dispatch(setLoading(false));
    }
}
