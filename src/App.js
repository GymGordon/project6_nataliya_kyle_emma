import React, { Component } from "react";
import "./App.scss";
import firebase from "firebase";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Master from "./components/Master";

class App extends Component {
  render() {
    // router
    // render master

    return <Router>
        <div className="App">
          <header>
            <div className="wrapper">
              <Link to="/dashboard">
                <h1>FleX Fitness</h1>
              </Link>
            </div>
          </header>

          <main>
              <Master history={this.props.history} />
          </main>
          {/* <footer>
            <p>This is a footer</p>
          </footer> */}
        </div>
      </Router>;
  }
}

export default App;
