import React, { Component } from "react";
import "./App.scss";
import firebase from "./components/firebase";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddWorkouts from "./components/AddWorkouts";
import AddExercises from "./components/AddExercises";
import Workouts from "./components/Workouts";
import Exercises from "./components/Exercises";
import Notes from "./components/Notes";
import Logs from "./components/Logs";
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
          <Master />
       </div>
      </Router>
    );
  }
}

export default App;
