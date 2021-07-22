import {all} from 'redux-saga/effects'
import watcherAuthorization from "./authSaga";

export default function* rootSaga() {
    yield all([
        watcherAuthorization(),
    ])
}


