import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useWebSocket, { useEventSource } from "react-use-websocket";
import { getCurrentUser } from "../../store/selectors/selectors";
const WS_URL = "ws://localhost:8080/api/v1/admin";

function Admin() {
  const [data, setData] = useState();
  const user = useSelector(getCurrentUser);
  const wss = useWebSocket(WS_URL, {
    onMessage: (data) => {
      console.log(data);
      setData(data.data);
    },
    share: true,
    shouldReconnect: true,
  });


  return (
    <div>
      admin
      {data}
    </div>
  );
}

export default Admin;
