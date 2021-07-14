import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'
import {actionPromise} from "../actions";




export default function* watchAsyncUserAction() {
    yield takeLatest(`GET_USERS_ASYNC`, getUsersAsync);
}


function* getUsersAsync() {

    yield put(actionPromise(`getAllUsers`))
}


