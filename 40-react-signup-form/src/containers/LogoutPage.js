import React from 'react';
import {userService} from "../services/user-service";

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);
        userService.logout();

    }

    render() {
        return (
            <div>log out</div>
        );

    }


};

export default LogoutPage;