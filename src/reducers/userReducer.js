

export default (state = {}, action) => {

    if (action.type === 'GET_USERS'){
        return {...action.users}
    }
console.log(action.role)
    if(action.type === `REMOVE_USER` && action.role !== "ADMIN"){
        const { [action.id] : leaveUser ,...restState} = state;
        return restState
    }

    if(action.type === `ADD_USER`){
        const {id, ...usersData} = action.user;
        return {[id]: usersData, ...state}
    }

    if(action.type === `SOCKET_DISCONNECT`){
        return {}
    }

    return state
}