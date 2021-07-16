import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import SignIn from './pages/SignIn'
import Main from './pages/Main'
import store from "./store";
import {Provider}   from 'react-redux';
import {actionGetWebSocketConnect} from "./actions";
import {useEffect, useState} from "react";



console.log(store)
window.localStorage.authToken && !store.getState().ws.isConnect && console.log(`Token is this`)
window.localStorage.authToken && !store.getState().ws.isConnect && store.dispatch(actionGetWebSocketConnect())

console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))


let i = true;

function App() {

    const [isConnected, setIsConnected] = useState(store.getState().ws.isConnect)


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
