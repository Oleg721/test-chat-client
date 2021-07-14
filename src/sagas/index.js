import {all} from 'redux-saga/effects'
import watchPromiseAsync from "./promiseSaga";
import watchAsyncUserAction from "./userSaga";
import watcherAuthorization from "./authSaga";
import watchAsyncMessageAction from "./messageSaga";


export default function* rootSaga() {
    yield all([
        watchPromiseAsync(),
        watchAsyncUserAction(),
        watcherAuthorization(),
        watchAsyncMessageAction()
    ])
}


