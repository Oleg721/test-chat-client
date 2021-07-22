import store from "../store";
import {actionGetUsersAction,
        actionRemoveUsersAction,
        actionAddUsersAction} from "../actions";

export function getUsers(data) {
    console.log('get user handler');
    store.dispatch(actionGetUsersAction(data));
    }

export function removeUser(id){
        console.log('remove user handler');
        store.dispatch(actionRemoveUsersAction(id));
    }

export function addUser(user){
        console.log(`add user handler`);
        console.log(user);
        store.dispatch(actionAddUsersAction(user));
    }


