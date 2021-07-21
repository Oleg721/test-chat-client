import store from "../store";
const getRole = ()=>store.getState().auth.payload?.role

const {actionPromise, actionPending, actionRejected, actionResolved} = require(`./actionPromise`);

export {actionPending, actionResolved, actionRejected, actionPromise}


export const actionSignIn = (user) => ({type: `SIGN_IN`, user: user});
export const actionAuthLogin = ( authToken) => ({type: `AUTH_LOGIN`, jwt: authToken});
export const actionAuthLogout = () => ({type: `LOGOUT`});

export const actionGetUsersAction = (users) => ({type: `GET_USERS`, users: users});
export const actionAddUsersAction = (user) => ({type: `ADD_USER`, user : user});
export const actionRemoveUsersAction = (id, role = getRole()) => ({type: `REMOVE_USER`, id: id, role: role});

export const actionGetMessagesAction = (messages) => ({type: `GET_MESSAGES`, messages: messages});
export const actionAddMessagesAction = (message) => ({type: `ADD_MESSAGES`, message: message});

export const actionGetSocketConnect = (authToken = '') => ({type: `GET_SOCKET_CONNECT`, authToken: authToken });
export const actionSocketConnectSuccess = (socket) => ({type: `SOCKET_CONNECT_SUCCESS`, socket: socket });
export const actionSocketConnectError = (err) => ({type: `SOCKET_CONNECT_ERROR`, errMessage : err });
export const actionSocketDisconnect = () => ({type: `SOCKET_DISCONNECT` });
