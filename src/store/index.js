import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {promiseReducer, authReducer, socketReducer, userReducer} from "../reducers";
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    auth : authReducer,
    promise : promiseReducer,
    ws: socketReducer,
    user : userReducer
}), applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga);



export default store;

