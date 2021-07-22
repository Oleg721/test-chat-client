import {sendFetch} from'../utility'
import {actionAuthLogin} from "../actions";
import {put, takeLatest} from 'redux-saga/effects'

export default function* watcherAuthorization(){
    yield takeLatest(`SIGN_IN`, signInSaga)
}

function* signInSaga({user: {login, password}}){
    console.log(`SIGN_IN_SAGA`);
    const {authToken} = yield sendFetch(`/sign-in`)({login: login, password: password});
    window.localStorage.setItem(`authToken`, authToken);
    yield put(actionAuthLogin(authToken));
}

