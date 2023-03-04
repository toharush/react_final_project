import { useDispatch } from "react-redux";
import useWebSocket from "react-use-websocket";
import { setAdminMsg } from "../store/reducers/auth/auth";

const useWs = ({ isAdmin }) => {
  const dispatch = useDispatch();

  useWebSocket(`${process.env.REACT_APP_WS_URL}/`, {
    onMessage: (data) => {
      if (isAdmin) {
        dispatch(
          setAdminMsg([
            {
              LoggedInUsers: Number(data.data.split(",")[0]),
              GuestUsers: Number(data.data.split(",")[1]),
            },
          ])
        );
      }
    },
    share: true,
  });
};

export default useWs;
