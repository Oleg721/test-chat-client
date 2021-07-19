import socketReducer from './socketReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'

export {socketReducer, authReducer, userReducer}

export function promiseReducer(state={},{type, status, payload, error, name} ){


    if(type === 'PROMISE') return {...state, [name]: {status, payload, error}}
    if (type === 'LOGOUT') return  {}
    else return state
}



