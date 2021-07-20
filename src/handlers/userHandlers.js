import store from "../store";
import {actionGetUsersAction,
        actionRemoveUsersAction,
        actionAddUsersAction} from "../actions";

export default (socket) => {

    const getUsers = (data) => {
        console.log(`get user handler`);
        store.dispatch(actionGetUsersAction(data));
    }

    const removeUser = (id) => {
        console.log(`remove user handler`);
        store.dispatch(actionRemoveUsersAction(id));
    }

    const addUser = (user) => {
        console.log(`add user handler`);
        console.log(user);
        store.dispatch(actionAddUsersAction(user));
    }

    socket.on('users', getUsers)
    socket.on('user:add', addUser)
    socket.on('user:leave', removeUser)
}