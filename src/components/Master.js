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
      user: null,
      routines: {}
    //   routine: {
    //     routineName: "",
    //     workout: {
    //       workoutTitle: "",
    //       exercises: {}
    //     }
    //   }
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/addexercises");
  };

  test = e => {
    e.preventDefault();
    this.routineName = e.target.children[1].value;

    this.setState({
        routines: {
            ...this.state.routines,
            [this.routineName]: {}
            
        }
    }, () => {
        this.routineName = ""
    });
  };

  //   handleChangeRoutine = e => {
  //     this.setState({
  //       routine: {
  //         ...this.state.routine,
  //         [e.target.id]: e.target.value
  //       }
  //     });
  //   };

  //   handleChangeWorkoutTitle = e => {
  //     this.setState({
  //       routine: {
  //         ...this.state.routine,
  //         workout: {
  //           [e.target.id]: e.target.value
  //         }
  //       }
  //     });
  //   };

  //   handleChangeExercise = e => {
  //     this.setState({
  //       routine: {
  //         ...this.state.routine,
  //         workout: {
  //           ...this.state.routine.workout,
  //           exercises: {
  //             ...this.state.routine.workout.exercises,
  //             [e.target.id]: e.target.value
  //           }
  //         }
  //       }
  //     });
  //   };

  render() {
    return (
      <div>
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route
          path="/addworkouts"
          render={() => (
            <AddWorkouts
              handleChangeRoutine={this.handleChangeRoutine}
              //   handleSubmit={this.handleSubmit}
              test={this.test}
            />
          )}
        />
        <Route
          path="/addexercises"
          render={() => (
            <AddExercises
              handleChangeExercise={this.handleChangeExercise}
              handleChangeWorkoutTitle={this.handleChangeWorkoutTitle}
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
