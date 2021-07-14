
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import SignIn from './pages/SignIn'
import store from "./store";
import {Provider}   from 'react-redux';

console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))

function App() {
  return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Switch>

                        <Route path='/sign-in'>
                            <SignIn></SignIn>
                        </Route>

                        <Route path='/'>
                            <header className="App-header">
                                <h1>MAIN</h1>
                            </header>
                        </Route>


                    </Switch>
                </Router>
            </div>
        </Provider>
  );
}

export default App;
