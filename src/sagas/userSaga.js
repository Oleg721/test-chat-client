import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'
import {actionGetUsersAction, actionPromise} from "../actions";



export default function* watchAsyncUserAction() {
    yield takeLatest(`GET_USERS_ACTION`, getUsersAsync);
}


function* getUsersAsync(socket) {
    //socket.emit("users")
}


