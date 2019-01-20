import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'


const Header = ({loginHandler, signupHandler}) => {
    return (
        <div className='header'>
            <div className='navigation-wrap'>
                {/*<a href="#" className="btn btn-primary login" role="button" aria-pressed="true">Sign Up</a>*/}
                <Link to="/login" className="btn btn-dark signup" role="button" aria-pressed="true"
                   onClick={loginHandler}
                >Log In</Link>
                <Link to="signup" className="btn btn-dark login" role="button" aria-pressed="true"
                   onClick={signupHandler}
                >Sign Up</Link>
            </div>
        </div>
    );
};


export default Header