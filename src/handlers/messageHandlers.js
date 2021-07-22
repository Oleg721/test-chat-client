import store from "../store";
import {actionGetMessagesAction, actionAddMessagesAction} from "../actions";


export function getMessage(messages){
        store.dispatch(actionGetMessagesAction(messages));
    }

export function addMessage(messages){
        store.dispatch(actionAddMessagesAction(messages));
    }



