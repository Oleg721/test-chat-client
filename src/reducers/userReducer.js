export default (state = {}, action) => {

    if (action.type === 'GET_USERS'){
        return {...action.users}
    }

    if(action.type === `REMOVE_USER`){
        const { [action.id] : leaveUser ,...restState} = state;
        return restState
    }

    if(action.type === `ADD_USER`){
        const {id, ...usersData} = action.user;
        return {[id]: usersData, ...state}
    }


    return state
}