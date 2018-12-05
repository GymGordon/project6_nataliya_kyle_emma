import React, { Component } from "react";
import { Link } from "react-router-dom";


class Login extends Component {
    render() {
        return (
            <div>
                <h1>GYM GORDON</h1>
                <Link to="/dashboard">Dashboard</Link>
                <button>Sign In</button>
                <button>Guest</button>
            </div>
        )
    }
}

export default Login