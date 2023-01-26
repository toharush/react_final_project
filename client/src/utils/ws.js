import useWebSocket from 'react-use-websocket';
const WS_URL = 'ws://127.0.0.1:9999';
let wss = undefined;

export default (...params) => {
    return wss = useWebSocket(WS_URL, {
        ...params
    });
}

export const sendMessage = (token) => {
    wss.sendMessage(token)
}

export const authentication = () => {
    wss.sendJsonMessage(token)
}