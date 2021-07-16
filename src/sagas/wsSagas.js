import { eventChannel, END } from 'redux-saga';
import {put, takeEvery, takeLatest, take, call} from 'redux-saga/effects'
import {actionPromise, actionWSConnectSuccess, actionWSDisconnect, actionWSConnectError} from "../actions";
import store from "../store";


export default function* watchWebSocketAction() {
    yield takeLatest(`GET_WS_CONNECT`, getWebSocketConnect);
}



function* getWebSocketConnect({port, authToken}) {


    let socket;
    let socketChannel;

    try {
        socket = yield createWebSocketConnection(authToken)(port);
        // yield put(actionWSConnectSuccess());
        console.log(socket);
        socketChannel = yield createSocketChannel(socket);
    }catch (err){
        yield put(actionWSConnectError('Error while connecting to the WebSocket'))
    }

    while (true) {
        const {type, data} = yield take(socketChannel);

        if(!type) return;
        try {
            const message = JSON.parse(data);

            if(`users` in message && `messages` in message){
                yield put(actionWSConnectSuccess())
            }
        }catch (e){
            console.log(`NOT_JSON`);
        }

    }
}


function createWebSocketConnection(authToken) {
    return (port)=> {
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
}

function createSocketChannel(socket) {
        return eventChannel(emit => {
            socket.onmessage = (event) => {
                emit({type: `MESSAGE`, data: event.data})
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
