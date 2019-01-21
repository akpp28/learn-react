import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

import './header.css'
import {authHeader} from "../../helpers";


const AuthLinks = ({loginHandler, signupHandler}) => {
    return (
        <Fragment>
            <NavLink to="/signup" className="btn signup" activeClassName="btn-primary" role="button" aria-pressed="true"
                     onClick={signupHandler}
            >Sign Up</NavLink>
            <NavLink to="/login" className="btn login" activeClassName="btn-primary" role="button" aria-pressed="true"
                     onClick={loginHandler}
            >Log In</NavLink>
        </Fragment>

    );

};

const Logout = (props) => {
    return (
        <NavLink to="/logout" className="btn btn-link logout" role="button" aria-pressed="true"
        >Log Out</NavLink>
    );
}

const Header = (props) => {
    return (
        console.log('aaa', authHeader()),
            <div className='header'>
                <div className='navigation-wrap'>
                    {Object.entries(authHeader()).length === 0 ? <AuthLinks {...props}/> : <Logout/>}
                </div>

            </div>
    );
};


export default Header