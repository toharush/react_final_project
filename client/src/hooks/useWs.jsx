import { useDispatch } from "react-redux";
import useWebSocket from "react-use-websocket";
import { setAdminMsg } from "../store/reducers/auth/auth";

const useWs = () => {
  const dispatch = useDispatch();

  useWebSocket(`${process.env.REACT_APP_WS_URL}/`, {
    onMessage: (data) => {
      dispatch(setAdminMsg(data.data));
    },
    share: true,
  });
};

export default useWs;
