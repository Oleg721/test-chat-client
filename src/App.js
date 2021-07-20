import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import SignIn from './pages/SignIn'
import Main from './pages/Main'
import store from "./store";
import {Provider}   from 'react-redux';
import {actionGetSocketConnect} from "./actions";
import {useEffect, useState} from "react";

/////////////TMP///////////////////////////////////
//const token = store.getState().auth.authToken /*|| 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJ2YXNpYSIsImlhdCI6MTYyNjM2NDA5M30.zyokOxbC6cppYj6BjQpU2w1N6Mi0bBSFZ_TJtKSkYdY';*/
//const token = store.getState().auth.authToken || null;

//////////////////////////////////////////////


store.subscribe(()=> console.log(store.getState()))


function App() {

    const [isAuthorized, setIsConnected] = useState(!!Object.keys(store.getState().user).length);

    useEffect(() => {

        window.localStorage.authToken && !store.getState().ws.socket && console.log(`Token is this`)

        window.localStorage.authToken &&
        !store.getState().ws.user &&
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
