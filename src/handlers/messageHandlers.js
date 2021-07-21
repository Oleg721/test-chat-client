import store from "../store";
import {actionGetMessagesAction, actionAddMessagesAction} from "../actions";

export default (socket) => {

    const getMessage = (messages) => {
        store.dispatch(actionGetMessagesAction(messages));
    }

    const addMessage = (messages) => {
        store.dispatch(actionAddMessagesAction(messages));
    }


    socket.on('messages', getMessage);
    socket.on('message:add', addMessage)


}