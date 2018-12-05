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
import { BrowserRouter as Router, Route, Link, Switch, BrowserHistory } from "react-router-dom";

const dbRef = firebase.database().ref();

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState(
          {
            user: user
          },
          () => {
            // create reference specific to user
            this.dbRef = firebase.database().ref(`/${this.state.user.uid}`);
          }
        );
      }
    });
  }

  logIn = () => {
    auth.signInWithPopup(provider).then(result => {
      console.log(result);
      this.setState({
        user: result.user
      });
    });
  };

  logOut = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  };

  componentWillUnmount() {
    if (this.dbRef) {
      this.dbRef.off();
    }
  }

  render() {
    return <div className="App">
        <Router>
          <div>
            {this.state.user ? 
            <Dashboard /> : 
            <Login logOut={this.logOut} logIn={this.logIn} />}

            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/addworkouts" render={() => <AddWorkouts />} />
            <Route path="/addexercises" render={() => <AddExercises />} />
            <Route path="/workouts" render={() => <Workouts />} />
            <Route path="/exercises" render={() => <Exercises />} />
            <Route path="/notes" render={() => <Notes />} />
            <Route path="/logs" render={() => <Logs />} />
          </div>
        </Router>
      </div>;
  }
}

export default App;
