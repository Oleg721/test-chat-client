import store from "../store";
import {actionSocketConnectSuccess, actionGetUsersAction} from "../actions";
import registerUserHandlers from './userHandlers';
import registerMessageHandlers from './messageHandlers';


export const usersHandlers = (data)=>{
    store.dispatch(actionSocketConnectSuccess());
    store.dispatch(actionGetUsersAction(data));
}


export {registerUserHandlers, registerMessageHandlers}
