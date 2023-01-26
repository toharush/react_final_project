import { useEffect, useState } from "react";
import useWebSocket, { SendMessage } from "react-use-websocket";
const WS_URL = "ws://127.0.0.1:9999";

function Admin() {
  const [data, setData] = useState();
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
    wss.sendJsonMessage({ token: "test" });
  }, []);

  return (
    <div>
      admin
      {data}
    </div>
  );
}

export default Admin;
