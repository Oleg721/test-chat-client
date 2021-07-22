import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {/*promiseReducer, */authReducer, socketReducer, userReducer, messageReducer} from "../reducers";
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    auth : authReducer,
    socket: socketReducer,
    users : userReducer,
    messages : messageReducer

}), applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga);



export default store;

