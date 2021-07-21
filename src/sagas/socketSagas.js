import {put, takeEvery, takeLatest, take, call} from 'redux-saga/effects';
import {io} from "socket.io-client";
import {registerUserHandlers,
        registerMessageHandlers,
        registerSocketHandlers} from "../handlers";
import {actionSocketConnectSuccess} from "../actions"

export default function* watchSocketAction() {
    yield takeLatest(`GET_SOCKET_CONNECT`, getSocketConnection);

}



function* getSocketConnection(authToken) {
    const socket = yield createSocketConnection(authToken);
    yield put(actionSocketConnectSuccess(socket));
    yield call(registerMessageHandlers, socket);
    yield call(registerUserHandlers, socket);
    yield call(registerSocketHandlers, socket);


}


function createSocketConnection(authToken) {

    return new Promise((resolve, reject) => {
        const options = {transports: ["websocket"],auth: {token: authToken.authToken}}
        const socket = io(`http://${process.env.REACT_APP_SOCKET_HOST}:${process.env.REACT_APP_SOCKET_PORT}/`, options)
        socket.on(`connect`, ()=>{
            resolve(socket);
        });
        socket.on(`connect_error`, (evt)=>{
            reject(evt);
        });
    });
}

