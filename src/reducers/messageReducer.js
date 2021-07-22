
export default (state = [], action) => {

    if (action.type === 'GET_MESSAGES'){
        console.log('GET_MESSAGES')
        return [...action.messages]
    }
    if (action.type === 'ADD_MESSAGES'){
        console.log('ADD_MESSAGES')
        return [...state, action.message]
    }
    if(action.type === 'SOCKET_DISCONNECT' || action.type === `LOGOUT`){
        return []
    }

    return state
}