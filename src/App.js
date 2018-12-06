import React, { Component } from "react";
import "./App.scss";
import firebase from "firebase";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserHistory,
  Redirect
} from "react-router-dom";
import Master from "./components/Master";

const dbRef = firebase.database().ref();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  componentWillUnmount() {
    if (this.dbRef) {
      this.dbRef.off();
    }
  }

  render() {
    // router
    // render master

    return (
      <Router>
        <div className="App">
          <Master history={this.props.history} />
        </div>
      </Router>
    );
  }
}

export default App;
