import React, {Component} from 'react';
import './App.css';
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

    render() {
        return (
            <div className='app'>
                <Header
                    loginHandler={this.loginHandler}
                    signupHandler={this.signupHandler}
                ></Header>
                <Sidebar></Sidebar>
                <Content/>
            </div>

        );
    }
}

export default App;
