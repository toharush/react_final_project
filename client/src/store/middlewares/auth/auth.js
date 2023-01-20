import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/auth";
import { setLoading } from "../../reducers/auth/auth";
import { setError } from "../../reducers/products/products";
import Cookies from 'universal-cookie';
import { Navigate } from "react-router-dom";

const cookies = new Cookies();

export const loginAndSignUp = (login, email, password) => async dispatch => {
    dispatch(setLoading(true));
    let user;
    try {
        if(!cookies.get("user")){
            if(login) {
                user = await signInWithEmailAndPassword(auth, email, password);
            } else {
                user = await createUserWithEmailAndPassword(auth, email, password);
            }
            cookies.set("user",user.user, {
                maxAge: 3600000 
            });
        }
    } catch (err) {
        dispatch(setError(err));
    } finally {
        dispatch(setLoading(false));
    }
}

export const Logout = () => {
  if(cookies.get("user")){
    cookies.remove("user");
    Navigate("/");
  }
}