import store from "../store";
import {actionGetMessagesAction} from "../actions";

export default (socket) => {

    const getMessage = (messages) => {

        store.dispatch(actionGetMessagesAction(messages));
    }


    socket.on('messages', getMessage)


}