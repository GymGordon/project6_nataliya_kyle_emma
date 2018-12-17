import React, { Component } from "react";

class Login extends Component {
  render() {
    const { logIn, logOut, guestLogin } = this.props;

    return <section className="login">
        <div className="wrapper">
          <div className="exerciseCard clearfix">
            <h1>Welcome</h1>
            <p>Please sign in to create your custom workout routine!</p>
            <button className="btn--login" onClick={logIn}>
              Login
            </button>
            {/* <button className="btn--logout" onClick={logOut}>
              Log Out
            </button> */}
          <button className="btn--guest" onClick={guestLogin}>Guest Login</button>
          </div>
        </div>
      </section>;
  }
}

export default Login;
