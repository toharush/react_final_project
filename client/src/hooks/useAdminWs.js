import { useDispatch } from "react-redux";
import useWebSocket from "react-use-websocket";
import { setAdminMsg } from "../store/reducers/auth/auth";

const WS_URL = "ws://localhost:8080/api/v1/admin";

function useAdminWs() {
  const dispatch = useDispatch();

  useWebSocket(WS_URL, {
    onMessage: (data) => {
      dispatch(setAdminMsg(data.data));
    },
    share: true,
  });
}

export default useAdminWs;
