export default (state = {socket: null}, action) => {

    if (action.type === 'SOCKET_CONNECT_SUCCESS'){
        console.log('CONNECT')
        return {socket : action.socket}
    }

    if (action.type === 'SOCKET_CONNECT_ERROR'){
        return {error : action.err}
    }

    if (action.type === 'SOCKET_DISCONNECT' || action.type === 'LOGOUT'){
        console.log('DISCONNECT')
        return {socket : null}
    }


    return state
}