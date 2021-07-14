import {sendFetch} from'../utility'
import {actionPromise, actionAuthLogin} from "../actions";
import { put, takeEvery, takeLatest, take , all, call} from 'redux-saga/effects'



export default function* watcherAuthorization(){
    yield takeLatest(`SIGN_IN`, signInSaga)
    yield takeLatest(`AUTH_LOGIN`, authLoginSaga);
}


function* registrationSaga({user: {login, password}}){
   //  const authToken = yield  gql(`mutation regUser($user:UserInput) {
   //                                        registration(User: $user)
   //                                          }`,JSON.stringify({user: {login : login, name : name, password: password}}));
   //  localStorage.authToken = authToken;
   // console.log(authToken);
   //  yield put(actionAuthLogin(authToken));
}

function* signInSaga({user: {login, password}}){
    console.log(`SIGN_IN_SAGA`);
     const authToken = yield sendFetch(`/sign-in`)({login: login, password: password});
     window.localStorage.authToken = authToken;
     yield put(actionAuthLogin(authToken))
}

function* loginSaga({login, password}){
    // const authToken = yield  gql(`query login($login:String, $password: String){
    //                                     login(login:$login , password : $password)
    //                                     }`,{login, password});
    // localStorage.authToken = authToken;
    // console.log(authToken);
    // yield put(actionAuthLogin(authToken));
}


function* authLoginSaga({authToken}) {
    yield call(actionAuthLogin, authToken);
}

