import {io} from "socket.io-client";
import {actionSocketConnect, actionSocketDisconnect, actionSocketConnectSuccess} from "../actions"
import {useDispatch, useSelector} from "react-redux";


export default function useSocketConnect(token) {
    const dispatch = useDispatch();

    console.log(`SOCKET_>HOOOK`)

    const options = {transports: ["websocket"], auth: {token: token}};
    const socket = io(`http://${process.env.REACT_APP_SOCKET_HOST}:${process.env.REACT_APP_SOCKET_PORT}/`, options);

    socket.on(`connect`, () => {
        console.log(`SOCKET>HOOOK>connect`)
        dispatch(actionSocketConnect());
    });

    socket.on('connectIsSuccess', () => {
        console.log(`SOCKET>HOOOK>connectIsSuccess`)
        dispatch(actionSocketConnectSuccess())
        // registerSocketHandlers(socket);
        // registerMessageHandlers(socket);
        // registerUserHandlers(socket);
    })

    socket.on(`disconnect`, () => {
        console.log(`SOCKET>HOOOK>disconnect`)
        dispatch(actionSocketDisconnect());
    });

    return socket;
}