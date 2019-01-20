import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.css'


const Header = ({loginHandler, signupHandler}) => {
    return (
        <div className='header'>
            <div className='navigation-wrap'>
                <NavLink to="/login" className="btn login" activeClassName="btn-primary" role="button" aria-pressed="true"
                         onClick={loginHandler}
                >Log In</NavLink>
                <NavLink to="/signup" className="btn signup" activeClassName="btn-primary" role="button" aria-pressed="true"
                         onClick={signupHandler}
                >Sign Up</NavLink>
            </div>
        </div>
    );
};


export default Header