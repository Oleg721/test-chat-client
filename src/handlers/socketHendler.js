import store from "../store";
import {actionSocketDisconnect} from "../actions";

export default (socket) => {

    const disconnect = (reason) => {
        console.log('disconnect');
        store.dispatch(actionSocketDisconnect());
    }

    socket.on("disconnect", disconnect)
}