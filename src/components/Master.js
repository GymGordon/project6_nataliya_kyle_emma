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
import { Route, Redirect, withRouter } from "react-router-dom";

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

  addRoutine = e => {
    e.preventDefault();
    console.log("adding routine function");
    const newRoutine = {
      routineName: this.state.routineName
    };
    //pushing the routine object under the uid
    this.dbRef.push(newRoutine);
    this.props.history.push("/addexercises");
    // const newDiaryEntry = { date: new Date().toDateString(), body: this.state.newEntry };
  };

  addExercise = e => {
    e.preventDefault();
    const newWorkout = {
      workoutTitle: this.state.workoutTitle
    }
    
    const newExercise = {
      exerciseName: this.state.exerciseName,
      exerciseSets: this.state.exerciseSets,
      exerciseReps: this.state.exerciseReps
    };
    this.dbRef.push(newExercise);
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route
          path="/addworkouts"
          render={() => (
            <AddWorkouts
              handleChange={this.handleChange}
              addRoutine={this.addRoutine}
            />
          )}
        />
        <Route
          path="/addexercises"
          render={() => (
            <AddExercises
              handleChange={this.handleChange}
              addExercise={this.addExercise}
            />
          )}
        />

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

export default withRouter(Master);
