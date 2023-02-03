import { useDispatch } from "react-redux";
import useWebSocket from "react-use-websocket";
import { setAdminMsg } from "../store/reducers/auth/auth";

function useAdminWs() {
  const dispatch = useDispatch();

  useWebSocket(`${process.env.REACT_APP_WS_URL}/admin`, {
    onMessage: (data) => {
      dispatch(setAdminMsg(data.data));
    },
    share: true,
  });
}

export default useAdminWs;
