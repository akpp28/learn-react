import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            {/*<Route path="/signup" render={() => <h2>signup!</h2>}></Route>*/}
        </div>
    </BrowserRouter>, document.getElementById('root'));

