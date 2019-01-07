import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LoginPage from "./components/LoginPage";



const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;


const Header = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login/">
                    Login
                </Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/users/">Users</Link>
            </li>
        </ul>
    </nav>
);

const AppRouter = () => (
    <Router>
        <div>
            <Header/>
            <Route path="/" exact component={Index}/>
            <Route path="/login/" component={LoginPage}/>
            <Route path="/about/" component={About}/>
            <Route path="/users/" component={Users}/>
        </div>
    </Router>
);

export default AppRouter;