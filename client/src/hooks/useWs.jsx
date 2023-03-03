import { useDispatch } from "react-redux";
import useWebSocket from "react-use-websocket";
import { setAdminMsg } from "../store/reducers/auth/auth";

const useWs = () => {
  const dispatch = useDispatch();

  useWebSocket(`${process.env.REACT_APP_WS_URL}/`, {
    onMessage: (data) => {
      "LoggedInUsers:0, GuestUsers:0";
      dispatch(
        setAdminMsg([
          {
            LoggedInUsers: Number(data.data.split("LoggedInUsers:")[1].split(",")[0]),
            GuestUsers: Number(data.data.split("GuestUsers:")[1]),
          },
        ])
      );
    },
    share: true,
  });
};

export default useWs;
