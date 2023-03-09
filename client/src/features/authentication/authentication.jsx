import { useEffect, useState } from "react";
import AuthForm from "./components/authForm/authForm";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Card, Modal, Tab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../../services/authentication";
import ProfileImageUploader from "../../components/profileImageUploader/profileImageUploader";
import { getCurrentUser } from "../../store/selectors/selectors";
import { handleUpload } from "../../lib/storage";
import { isEmpty } from "lodash";

const Authentication = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const signOptions = ["Sign In", "Sign Up"];
  const currentUser = useSelector(getCurrentUser);
  const [mode, setMode] = useState(signOptions[0]);
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state

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
    if (mode === signOptions[0]) {
      await dispatch(signIn({ email, password }));
    } else if (mode === signOptions[1]) {
      await dispatch(signUp({ email, password }));
    }
  };

  useEffect(() => {
    if (currentUser?.uid) {
      if (file) {
        handleUpload(
          file,
          currentUser.uid,
          setPercent,
          dispatch,
          false
        );
        setFile("")
      }
      setIsOpen(false);
    }
  }, [currentUser]);

  const handleChange = (event, newValue) => setMode(newValue);

  return (
    <Modal open={isOpen} onClose={setIsOpen}>
      <Card sx={style}>
        <TabContext value={mode}>
          <TabList onChange={handleChange}>
            {signOptions.map((option, index) => (
              <Tab label={option} value={option} key={index} />
            ))}
          </TabList>

          {signOptions.map((option, index) => (
            <TabPanel value={option} key={option + index}>
              {mode === signOptions[1] ? (
                <ProfileImageUploader
                  id={"tets"}
                  file={file}
                  percent={percent}
                  setFile={setFile}
                />
              ) : null}
              <AuthForm
                handleUserSign={handleUserSign}
                buttonTitle={option}
                key={option + index}
              />
            </TabPanel>
          ))}
        </TabContext>
      </Card>
    </Modal>
  );
};

export default Authentication;
