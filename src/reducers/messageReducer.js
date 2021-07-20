import {objToArr} from '../utility'

export default (state = [], action) => {

    if (action.type === 'GET_MESSAGES'){
        console.log('GET_MESSAGES')
        return [...action.messages]
    }


    return state
}