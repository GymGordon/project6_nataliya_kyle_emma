import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <section className="login">
        <h1>LOGIN</h1>
        <button onClick={this.props.logOut}>Log Out</button>
        <button onClick={this.props.logIn}>Login</button>
      </section>
    );
  }
}

export default Login;
