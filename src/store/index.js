import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {/*promiseReducer, */authReducer, socketReducer, userReducer, messageReducer} from "../reducers";
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    auth : authReducer,
    // promise : promiseReducer,
    socket: socketReducer,
    user : userReducer,
    message : messageReducer

}), applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga);



export default store;

