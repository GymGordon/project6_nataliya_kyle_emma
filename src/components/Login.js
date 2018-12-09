import React, { Component } from "react";

class Login extends Component {
  render() {

    const { logIn, logOut} = this.props;

    return (
      <section className="login">
        <h1>LOGIN</h1>
        <button onClick={logOut}>Log Out</button>
        <button onClick={logIn}>Login</button>
      </section>
    );
  }
}

export default Login;
