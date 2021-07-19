import {put, takeEvery, takeLatest, take, call} from 'redux-saga/effects';
import {io} from "socket.io-client";
import { eventChannel, END } from 'redux-saga';
import {testHandlers,usersHandlers} from "../handlers";
import {actionGetUsersAction} from "../actions"

export default function* watchSocketAction() {
    yield takeLatest(`GET_SOCKET_CONNECT`, getSocketConnect);

}


function createSocketChannel(socket) {

    return eventChannel(emit => {

        socket.on(`test`, testHandlers);
        socket.on(`users`, usersHandlers);


        const unsubscribe = () => {
            socket.off(`test`, testHandlers);
        }

        return unsubscribe
    })
}



function createSocketConnection(authToken) {


        return new Promise((resolve, reject) => {

            const socket = io(`http://${process.env.REACT_APP_SOCKET_HOST}:${process.env.REACT_APP_SOCKET_PORT}/`,{
                transports: ["websocket"],
                auth: {
                    token: authToken.authToken
                }}
            )

            socket.on(`connect`, ()=>{
                resolve(socket);
            });

            socket.on(`connect_error`, (evt)=>{
                reject(evt);
            });
        });
}


export function* getSocketConnect(authToken) {

    try {
        const socket = yield createSocketConnection(authToken);
        const socketChannel = yield createSocketChannel(socket);

        // yield call(()=>{
        //     socket.emit(`users`)
        // })

        while (true) {
                yield take(socketChannel);
        }
    } catch (err){
        console.error('socket error:', err)
    }
}