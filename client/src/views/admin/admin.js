import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useWebSocket, { SendMessage } from "react-use-websocket";
import { getCurrentUser } from "../../store/selectors/selectors";
const WS_URL = "ws://127.0.0.1:9999";

function Admin() {
  const [data, setData] = useState();
  const user = useSelector(getCurrentUser);
  const wss = useWebSocket(WS_URL, {
    onMessage: (data) => {
      console.log(data);
      setData(data.data);
    },
    onOpen: (event) => {
      setData(" WebSocket connection established.");
    },
  });

  useEffect(() => {
    wss.sendMessage(user.user_id);
  }, []);

  return (
    <div>
      admin
      {data}
    </div>
  );
}

export default Admin;
