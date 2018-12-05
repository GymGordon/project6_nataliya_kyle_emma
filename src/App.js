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
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Login />
              )}
            />
            <Route
              path="/dashboard"
              render={() => (
                <Dashboard />
              )}
            />
            <Route
              path="/addworkouts"
              render={() => (
                <AddWorkouts />
              )}
            />
            <Route
              path="/addexercises"
              render={() => (
                <AddExercises />
              )}
            />
            <Route
              path="/workouts"
              render={() => (
                <Workouts />
              )}
            />
            <Route
              path="/exercises"
              render={() => (
                <Exercises />
              )}
            />
            <Route
              path="/notes"
              render={() => (
                <Notes />
              )}
            />
            <Route
              path="/logs"
              render={() => (
                <Logs />
              )}
            />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
