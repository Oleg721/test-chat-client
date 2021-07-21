export default (state = {socket: null}, action) => {

    if (action.type === 'SOCKET_CONNECT_SUCCESS'){
        console.log('CONNECT')
        return action.socket
    }

    if (action.type === 'SOCKET_CONNECT_ERROR'){
        return null
    }

    if (action.type === 'SOCKET_DISCONNECT' || action.type === 'LOGOUT'){
        console.log('DISCONNECT')
        return null
    }

    if(action.type === `SOCKET_DISCONNECT`){
        return {}
    }

    return state
}