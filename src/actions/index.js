
const {actionPromise, actionPending, actionRejected, actionResolved} = require(`./actionPromise`);

export {actionPending, actionResolved, actionRejected, actionPromise}


export const actionSignIn = (user) => ({type: `SIGN_IN`, user: user});

export const actionAuthLogin = ( authToken) => ({type: `AUTH_LOGIN`, jwt: authToken});

export const actionAuthLogout = () => ({type: `LOGOUT`});

export const actionGetUsersAction = (users) => ({type: `GET_USERS`, users: users});


export const actionGetSocketConnect = (authToken = '') => ({type: `GET_SOCKET_CONNECT`, authToken: authToken });

export const actionSocketConnectSuccess = () => ({type: `SOCKET_CONNECT_SUCCESS` });

export const actionSocketConnectError = (err) => ({type: `SOCKET_CONNECT_ERROR`, errMessage : err });

export const actionSocketDisconnect = () => ({type: `SOCKET_DISCONNECT` });
