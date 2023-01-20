import { useState } from "react";
import "./auth.css";
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/loader";
import LoginAndSignup from "../../components/loginAndSignup/loginAndSignup";
import { loginAndSignUp } from "../../store/middlewares/auth/auth";
import { isAuthLoading, isLogin } from "../../store/selectors/selectors";
import { Navigate } from "react-router-dom";

function Auth() {
    const isLoading = useSelector(isAuthLoading);
    const loggedin = useSelector(isLogin);
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLoginOrSignUp = (isLogin) => {
        dispatch(loginAndSignUp(isLogin, email, password));
    }

    return (
        <div className="row">
            {loggedin && <Navigate to={"/"} />}
            {isLoading ? <Loader /> :
                <Card className="loginForm">
                        <LoginAndSignup setEmail={setEmail} setPassword={setPassword} handleLoginOrSignUp={handleLoginOrSignUp} />
                </Card>}
        </div>
    );
}

export default Auth;
