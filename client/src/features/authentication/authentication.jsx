import { useState } from "react";
import AuthForm from "./components/authForm/authForm";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Card, Modal, Tab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../../services/authentication";
import {
  getAuthError,
  getAuthLoading,
  getCurrentUser,
} from "../../store/selectors/selectors";
import { isEmpty, isNull } from "lodash";

const Authentication = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const signOptions = ["Sign In", "Sign Up"];
  const currentUser = useSelector(getCurrentUser);
  const authLoading = useSelector(getAuthLoading);
  const authError = useSelector(getAuthError);
  const [mode, setMode] = useState(signOptions[0]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const handleUserSign = async (email, password) => {
    if (mode == signOptions[0]) {
      await dispatch(signIn({ email, password }));
    } else if (mode == signOptions[1]) {
      await dispatch(signUp({ email, password }));
    }
    setIsOpen(false);
  };

  const handleChange = (event, newValue) => setMode(newValue);

  return (
    <Modal open={isOpen && isEmpty(currentUser)} onClose={setIsOpen}>
      <Card sx={style}>
        <TabContext value={mode}>
          <TabList onChange={handleChange}>
            {signOptions.map((option, index) => (
              <Tab label={option} value={option} key={index} />
            ))}
          </TabList>

          {signOptions.map((option) => (
            <TabPanel value={option}>
              <AuthForm
                handleUserSign={handleUserSign}
                buttonTitle={option}
                key={option}
              />
            </TabPanel>
          ))}
        </TabContext>
      </Card>
    </Modal>
  );
};

export default Authentication;
