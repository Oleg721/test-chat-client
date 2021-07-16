import store from '../store'

const token = store.getState().auth.authToken /*|| 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NyIsImxvZ2luIjoidGVzdCJ9.iyyBiehr_Ixwkfv0feFglo3DmRwcfRgm6Ap2nYIdLHc';*/
//const token = store.getState().auth.authToken || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJ2YXNpYSIsImlhdCI6MTYyNjM2NDA5M30.zyokOxbC6cppYj6BjQpU2w1N6Mi0bBSFZ_TJtKSkYdY';
//const token = store.getState().auth.authToken || null;
const wsURL = `${process.env.REACT_APP_WS_HOST}:${process.env.REACT_APP_WS_PORT}`


const {actionPromise, actionPending, actionRejected, actionResolved} = require(`./actionPromise`);

export {actionPending, actionResolved, actionRejected, actionPromise}


export const actionSignIn = (user) => ({type: `SIGN_IN`, user: user});

export const actionAuthLogin = ( authToken) => ({type: `AUTH_LOGIN`, jwt: authToken});

export const actionAuthLogout = () => ({type: `LOGOUT`});


export const actionGetWebSocketConnect = (authToken = token, port= wsURL ) => ({type: `GET_WS_CONNECT`, port: port, authToken: authToken });

export const actionWSConnectSuccess = () => ({type: `WS_CONNECT_SUCCESS` });

export const actionWSConnectError = (err) => ({type: `WS_CONNECT_ERROR`, errMessage : err });

export const actionWSDisconnect = () => ({type: `WS_DISCONNECT` });
