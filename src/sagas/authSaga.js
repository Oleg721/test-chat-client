import {sendFetch} from'../utility'
import {actionAuthLogin, actionGetSocketConnect, actionSocketConnectSuccess} from "../actions";
import {take, put, call, takeLatest} from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { io } from "socket.io-client";


export default function* watcherAuthorization(){
    yield takeLatest(`SIGN_IN`, signInSaga)
}


function* signInSaga({user: {login, password}}){
    console.log(`SIGN_IN_SAGA`);
    const {authToken} = yield sendFetch(`/sign-in`)({login: login, password: password});
    yield window.localStorage.authToken = authToken;
    yield put(actionAuthLogin(authToken))
    yield put(actionGetSocketConnect(authToken))
}


