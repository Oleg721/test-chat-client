export default (state = {isConnect: false}, action) => {

    if (action.type === 'SOCKET_CONNECT_SUCCESS'){
        console.log('CONNECT')
        return {isConnect : true}
    }

    if (action.type === 'SOCKET_CONNECT_ERROR'){
        return {error : action.err}
    }

    if (action.type === 'SOCKET_DISCONNECT' || action.type === 'LOGOUT'){
        console.log('DISCONNECT')
        return {isConnect : false}
    }


    return state
}