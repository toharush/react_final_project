import "./loginAndSignup.css";

function LoginAndSignup(props) {
    const { setEmail, setPassword, handleLoginOrSignUp } = props;

    return (
        <form>
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" onChange={event => setEmail(event.target.value)} />
                <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" onChange={event => setPassword(event.target.value)}/>
                <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

            <button type="button" onClick={() => handleLoginOrSignUp(true)} className="btn btn-primary btn-block mb-4 break">Sign in</button>
            <button type="button" onClick={() => handleLoginOrSignUp(false)} className="btn btn-primary btn-block mb-4">Sign up</button>
        </form>
    );
}

export default LoginAndSignup;
