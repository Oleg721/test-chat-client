import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory} from "react-router-dom";
import SignIn from './pages/SignIn'
import Main from './pages/Main'
import store from "./store";
import {Provider, useDispatch, useSelector} from 'react-redux';



function App() {
    store.subscribe(()=> console.log(store.getState()));
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Route exact path='/sign-in'>
                        <SignIn/>
                    </Route>
                    <Switch>
                        <Route exact path='/'>
                            <Main connect={`socket`} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
