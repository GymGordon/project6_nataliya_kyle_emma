import React, { Component } from "react";
import { Link } from "react-router-dom";


class Login extends Component {
    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <button onClick={this.props.logOut}>Log Out</button>
                <button onClick={this.props.logIn}>Login</button>
            </div>
        )
    }
}

export default Login