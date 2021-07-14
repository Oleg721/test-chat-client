

const {actionPromise, actionPending, actionRejected, actionResolved} = require(`./actionPromise`);

export {actionPending, actionResolved, actionRejected, actionPromise}


export const actionSignIn = (user) => ({type: `SIGN_IN`, user: user});

export const actionAuthLogin = ( authToken) => ({type: `AUTH_LOGIN`, jwt: authToken});

export const actionAuthLogout = () => ({type: `LOGOUT`});





