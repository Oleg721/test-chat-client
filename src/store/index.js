import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {promiseReducer, authReducer, webSocketReducer} from "../reducers";
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    auth : authReducer,
    promise : promiseReducer,
    ws: webSocketReducer
}), applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga);



export default store;

