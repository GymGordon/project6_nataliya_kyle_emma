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
      exerciseCounter: 1,
      exerciseCollection: []
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
    const newRoutine = {
      routineName: this.state.routineName
    };
    //pushing the routine object under the uid
    const routineKey = this.dbRef.push(newRoutine).key;
    //redirecting the user to go to Add Exercises page
    this.props.history.push(`/addexercises/${routineKey}`);
  };

  saveWorkout = e => {
    // pushing workout to unique key
    e.preventDefault();
    const routineKey = e.target.id;
    const newWorkout = {
      workoutTitle: this.state.workoutTitle
    };
    const workoutKey = firebase
      .database()
      .ref(`/${this.state.user.uid}/${routineKey}`)
      .push(newWorkout).key;

    // we need to push an EXERCISES OBJECT with multiple "new exercises"
    // map over our exercices object and send individual exercise objects to FB
    
  
    this.state.exerciseCollection.map((exercise) => {
      console.log(exercise);
      firebase
        .database()
        .ref(`/${this.state.user.uid}/${routineKey}/${workoutKey}`)
        .push(exercise);
    })

    const newExercise = {
      exerciseName: this.state.exerciseName,
      exerciseSets: this.state.exerciseSets,
      exerciseReps: this.state.exerciseReps
    };

    firebase
      .database()
      .ref(`/${this.state.user.uid}/${routineKey}/${workoutKey}`)
      .push(newExercise);

    // updatedExerciseCollection = Array.from(this.state.exerciseCollection);

    // updatedExerciseCollection.push(newExercise)

  };

  addExercise = e => {
    // add additional exercise form to page + saving to state
    e.preventDefault();

    const newExercise = {
      exerciseName: this.state.exerciseName,
      exerciseSets: this.state.exerciseSets,
      exerciseReps: this.state.exerciseReps
    };

    const updatedExerciseCollection = Array.from(this.state.exerciseCollection);

    updatedExerciseCollection.push(newExercise);

    this.setState({
      exerciseCounter: this.state.exerciseCounter + 1,
      exerciseCollection: updatedExerciseCollection
    });
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
          path="/addexercises/:routineKey"
          render={() => (
            <AddExercises
              handleChange={this.handleChange}
              saveWorkout={this.saveWorkout}
              addExercise={this.addExercise}
              exerciseCounter={this.state.exerciseCounter}
              exerciseName={this.exerciseName}
              exerciseSets={this.exerciseSets}
              exerciseReps={this.exerciseReps}
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
