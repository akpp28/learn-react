import React, {Component} from 'react';
import './App.css';
import {userService} from "../services/user-service";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import LogoutPage from "../containers/LogoutPage";
import {Route} from "react-router-dom";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Content from "./content/content";


class App extends Component {
    loginHandler = () => {
        console.log('loginHandler App;')
    };
    signupHandler = () => {
        console.log('signHandler App;')
    };

    handleLogout = async event => {
        await userService.logout()
        // await Auth.signOut();

        // this.userHasAuthenticated(false);

        this.props.history.push("/login");
    }

    render() {
        return (
            <div>

                <div className='app'>
                    <Header
                        loginHandler={this.loginHandler}
                        signupHandler={this.signupHandler}
                    ></Header>
                    <Sidebar></Sidebar>
                    <Content/>
                </div>


                <Route path="/login" component={Login}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/logout" component={LogoutPage}></Route>
            </div>


        );
    }
}

export default App;
