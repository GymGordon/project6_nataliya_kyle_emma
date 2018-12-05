import React, { Component } from "react";
import firebase from "./firebase";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AddWorkouts from "./AddWorkouts";
import AddExercises from "./AddExercises";
import Workouts from "./Workouts";
import Exercises from "./Exercises";
import Notes from "./Notes";
import Logs from "./Logs";
import { Route, Redirect } from "react-router-dom";

const dbRef = firebase.database().ref();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

// PURPOSE OF MASTER :
// handle loging in and out
// rendering routes

class Master extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      routine: {
          routineName: "",
          exercises: {
              exerciseName: ""
          },
      },
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
        // redirect to Dash
      }
    });
  }

  logIn = () => {
    auth.signInWithPopup(provider).then(result => {
      this.setState({
        user: result.user,
        uid: result.user.uid
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

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("clicked add workout");
//   };

  handleChange = e => {
    this.setState({
        routine: {
            [e.target.id]: e.target.value
        }
    });
  };

  render() {
    return (
      <div>
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route
          path="/addworkouts"
          render={() => <AddWorkouts handleChange={this.handleChange} />}
        />
        <Route path="/addexercises" render={() => <AddExercises />} />
        <Route path="/workouts" render={() => <Workouts />} />
        <Route path="/exercises" render={() => <Exercises />} />
        <Route path="/notes" render={() => <Notes />} />
        <Route path="/logs" render={() => <Logs />} />
        {this.state.user ? (
          <Redirect to={"/dashboard"} />
        ) : (
          <Login logIn={this.logIn} logOut={this.logOut} />
        )}
      </div>
    );
  }
}

// if logged in show Dash

export default Master;
