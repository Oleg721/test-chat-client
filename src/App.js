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


console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))


let i = true;

function App() {

    const [isConnected, setIsConnected] = useState(store.getState().ws.isConnect)


    useEffect(() => {
        console.log(`token = ` + (store.getState().auth.authToken /*|| window.localStorage.authToken*/))
        window.localStorage.authToken && !store.getState().ws.isConnect && console.log(`Token is this`)
        window.localStorage.authToken && !store.getState().ws.isConnect && store.dispatch(actionGetSocketConnect(store.getState().auth.authToken))
    },[])

    useEffect(() => {

        const unsubscribe = store.subscribe(()=>{
            if(isConnected === store.getState().ws.isConnect)return;
            setIsConnected(store.getState().ws.isConnect)
            //setTimeout(()=>setIsConnected(store.getState().ws.isConnect), 2000)
        })

        console.log(`>>>>>>> ${isConnected}`)
        return ()=>{
            unsubscribe();
        }
    })


  return (
        <Provider store={store}>
            <div className="App">

                <Router>

                    {isConnected ? <Redirect to={'/'}/> : <Redirect to={'/sign-in'}/> }

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
