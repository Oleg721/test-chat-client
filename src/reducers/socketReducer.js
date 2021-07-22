export default (state = {isConnectSuccess: false}, action) => {


    if (action.type === 'SOCKET_CONNECT_SUCCESS'){
        console.log('SOCKET_CONNECT_SUCCESS')
        return {isConnectSuccess: true}
    }

    if (action.type === 'SOCKET_CONNECT'){
        return {isConnected: true}
    }

    if(action.type === 'SOCKET_DISCONNECT'){
        return {isConnected: false, isConnectSuccess: false}
    }

    return state
}