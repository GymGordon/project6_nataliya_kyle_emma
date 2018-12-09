import React, { Component } from "react";
import "./App.scss";
import firebase from "firebase";
import { BrowserRouter as Router } from "react-router-dom";
import Master from "./components/Master";

class App extends Component {
  render() {
    // router
    // render master

    return (
      <Router>
        <div className="App">
          <header>
            <div className="wrapper">
              <h1>Gym Gordon</h1>
            </div>
          </header>

          <main>
            <div className="wrapper">
              <Master history={this.props.history} />
            </div>
          </main>
          {/* <footer>
            <p>This is a footer</p>
          </footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
