export const actionSignIn = (user) => ({type: 'SIGN_IN', user: user});
export const actionAuthLogin = ( authToken) => ({type: 'AUTH_LOGIN', jwt: authToken});
export const actionAuthLogout = () => ({type: 'LOGOUT'});

export const actionGetUsersAction = (users) => ({type: 'GET_USERS', users: users});
export const actionAddUsersAction = (user) => ({type: 'ADD_USER', user : user});
export const actionRemoveUsersAction = (id) => ({type: 'REMOVE_USER', id: id});

export const actionGetMessagesAction = (messages) => ({type: 'GET_MESSAGES', messages: messages});
export const actionAddMessagesAction = (message) => ({type: 'ADD_MESSAGES', message: message});

export const actionSocketConnectSuccess = () => ({type: 'SOCKET_CONNECT_SUCCESS'});
export const actionSocketConnect = () => ({type: 'SOCKET_CONNECT'});
export const actionSocketConnectError = (err) => ({type: 'SOCKET_CONNECT_ERROR', errMessage : err });
export const actionSocketDisconnect = () => ({type: 'SOCKET_DISCONNECT' });
