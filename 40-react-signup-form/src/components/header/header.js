import React from 'react';
import './header.css'


const Header = ({loginHandler, signupHandler}) => {
    return (
        <div className='header'>
            <div className='navigation-wrap'>
                {/*<a href="#" className="btn btn-primary login" role="button" aria-pressed="true">Sign Up</a>*/}
                <a href="#" className="btn btn-dark signup" role="button" aria-pressed="true"
                   onClick={loginHandler}
                >Log In</a>
                <a href="#" className="btn btn-dark login" role="button" aria-pressed="true"
                   onClick={signupHandler}
                >Sign Up</a>
            </div>
        </div>
    );
};


export default Header