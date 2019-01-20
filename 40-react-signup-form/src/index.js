import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App}></Route>
            <Route path="/login" render={() => <h2>login!</h2>}></Route>
            <Route path="/signup" render={() => <h2>signup!</h2>}></Route>
        </div>
    </BrowserRouter>, document.getElementById('root'));

