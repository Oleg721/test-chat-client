export default (state = {isConnect: false}, action) => {

    if (action.type === 'WS_CONNECT_SUCCESS'){
        console.log('DISCONNECT')
        return {isConnect : true}
    }

    if (action.type === 'WS_CONNECT_ERROR'){
        return {error : action.err}
    }

    if (action.type === 'WS_DISCONNECT'){
        console.log('DISCONNECT')
        return {isConnect : false}
    }

    if (action.type === 'LOGOUT'){
        return {}
    }

    return state
}