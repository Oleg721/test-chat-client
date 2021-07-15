import webSocketReducer from './webSocketReducer'
import authReducer from './authReducer'

export {webSocketReducer, authReducer}

export function promiseReducer(state={},{type, status, payload, error, name} ){


    if(type === 'PROMISE') return {...state, [name]: {status, payload, error}}
    if (type === 'LOGOUT') return  {}
    else return state
}



