import { eventChannel, END } from 'redux-saga';
import { put, takeEvery, takeLatest, take} from 'redux-saga/effects'
import {actionPromise, actionWSConnectSuccess, actionWSDisconnect, actionWSConnectError} from "../actions";

export default function* watchWebSocketAction() {
    yield takeLatest(`GET_WS_CONNECT`, getWebSocketConnect);
}

let authToken;

function* getWebSocketConnect({port, authToken: token}) {

    authToken = token;
    let socket;
    let socketChannel;

    try {
        socket = yield createWebSocketConnection(port);
        yield put(actionWSConnectSuccess());
        console.log(socket);
        socketChannel = yield createSocketChannel(socket);
    }catch (err){
        yield put(actionWSConnectError('Error while connecting to the WebSocket'))
    }

    while (true) {
        const payload = yield take(socketChannel);
        console.log(payload);
    }
}



function createWebSocketConnection(port) {
    return new Promise((resolve, reject) => {
        const socket = new WebSocket(port);

        socket.onopen = function () {
            console.log(authToken)
            socket.send(JSON.stringify({action: 'CHECK_USER' , authToken: authToken}));
            resolve(socket);
        };

        socket.onerror = function (evt) {
            reject(evt);
        }
    });
}

function createSocketChannel(socket) {
    return eventChannel(emit => {
        socket.onmessage = (event) => {
            emit(event.data)
        };

        socket.onclose = () => {
            emit(END);
        };

        const unsubscribe = () => {
            socket.onmessage = null;
        };

        return unsubscribe;
    });
}
