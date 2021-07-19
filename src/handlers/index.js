import store from "../store";
import {actionSocketConnectSuccess, actionGetUsersAction} from "../actions";


export const testHandlers = (data)=>{
    console.log(data)
}

export const usersHandlers = (data)=>{
    store.dispatch(actionSocketConnectSuccess());
    store.dispatch(actionGetUsersAction(data));
    //action Users
    console.log(data);
}
