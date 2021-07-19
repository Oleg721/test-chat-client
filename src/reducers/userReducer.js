export default (state = {}, action) => {

    if (action.type === 'GET_USERS'){
        console.log('GET_USERS')
        console.log(action.users);
        return {...action.users}

    }


    return state
}