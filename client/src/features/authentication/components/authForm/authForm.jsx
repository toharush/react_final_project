import { useRef } from "react";
import { Button, TextField } from "@mui/material";
import "./authForm.css";

const AuthForm = ({ handleUserSign, buttonTitle }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSign = async (event) => {
    event.preventDefault();
    return await handleUserSign(
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  return (
    <>
      <TextField
        id="email"
        label="email"
        variant="outlined"
        inputRef={emailRef}
        className="form-control text-field"
        required={true}
      />

      <TextField
        id="password"
        label="password"
        type="password"
        variant="outlined"
        inputRef={passwordRef}
        className="form-control text-field"
        required={true}
      />

      <Button type="submit" variant="contained" onClick={handleSign}>
        {buttonTitle}
      </Button>
    </>
  );
};
export default AuthForm;
