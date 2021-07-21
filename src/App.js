import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory} from "react-router-dom";
import SignIn from './pages/SignIn'
import Main from './pages/Main'
import store from "./store";
import {Provider}   from 'react-redux';
import {actionGetSocketConnect} from "./actions";
import {useEffect, useState} from "react";

store.subscribe(()=> console.log(store.getState()))

function App() {

    const [isAuthorized, setIsConnected] = useState(!!Object.keys(store.getState().user).length);
    const  history = useHistory()

    // useEffect(() => {
    //     history.push('/')
    // }, [isAuthorized])

    useEffect(() => {

        window.localStorage.authToken && !store.getState().socket && console.log(`Token is this`)

        // TODO: remove direct access to the store
        window.localStorage.authToken &&
        !Object.keys(store.getState().user).length &&
        store.dispatch(actionGetSocketConnect(store.getState().auth.authToken))
    },[])

    useEffect(() => {
        const unsubscribe = store.subscribe(()=>{
            if(isAuthorized === !!Object.keys(store.getState().user).length)return;
            setIsConnected(!!Object.keys(store.getState().user).length)
        })

        return ()=>{
            unsubscribe();
        }
    })


  return (
        <Provider store={store}>
            <div className="App">

                <Router>

                    {isAuthorized ? <Redirect to={'/'}/> : <Redirect to={'/sign-in'}/> }

                    <Route exact path='/sign-in'>
                        <SignIn/>
                    </Route>
                    <Switch>
                        <Route exact path='/'>
                            <Main/>
                        </Route>

                    </Switch>
                </Router>
            </div>
        </Provider>
  );
}

export default App;


