import React, { Component } from "react";
import firebase from "./firebase";
import Login from "./Login";
import Dashboard from "./Dashboard";
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
      routineCounter: 1,
      exerciseCounter: 1,
      workoutCounter: 1,
      exerciseCollection: [],
      workoutCollection: []
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

  // LOGIN FUNCTIONS

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

  // CONTROLLED INPUTS

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };

  // ADD ROUTINE

  addRoutine = e => {
    e.preventDefault();
    // new routine object (Cutting Season)
    const newRoutine = {
      routineName: this.state.routineName
    };

    // ROUTINE KEY + PUSH TO FB (uid/routine/)
    const routineKey = this.dbRef.push(newRoutine).key;

    this.setState({
      routineCounter: this.state.routineCounter + 1
    });

    // Re-direct
    this.props.history.push(`/workouts/${routineKey}`);
  };

  // ADD WORKOUT

  addWorkout = e => {
    e.preventDefault();

    // ROUTINE KEY (from add workout form)
    const routineKey = e.target.dataset.routinekey;

    // new workout object (Monday)
    const newWorkout = {
      workoutName: this.state.workoutName
    };
    // create a copy of the workoutCollection array
    const updatedWorkoutCollection = Array.from(this.state.workoutCollection);
    // push new workout to the updatedworkout array
    updatedWorkoutCollection.push(newWorkout);

    // WORKOUT KEY + PUSH TO FB (uid/routine/workout)
    const workoutKey = firebase
      .database()
      .ref(`/${this.state.user.uid}/${routineKey}`)
      .push(newWorkout).key;

    // counter appends workout form (Monday) to page
    // set the state of the workoutCollection to the updated workoutCollection array
    this.setState({
      workoutCounter: this.state.workoutCounter + 1,
      workoutCollection: updatedWorkoutCollection
    });

    // re-direct
    this.props.history.push(`/addexercises/${routineKey}/${workoutKey}`);
  };

  // ADD EXERCISE

  addExercise = e => {
    e.preventDefault();

    const newExercise = {
      exerciseName: this.state.exerciseName,
      exerciseSets: this.state.exerciseSets,
      exerciseReps: this.state.exerciseReps
    };

    // copy of exercise array
    const updatedExerciseCollection = Array.from(this.state.exerciseCollection);

    // push new exercise object to copy of exercise array
    updatedExerciseCollection.push(newExercise);

    // set exercise array copy to state
    // counter appends exercise form (bicep curls) to page
    this.setState({
      exerciseCounter: this.state.exerciseCounter + 1,
      exerciseCollection: updatedExerciseCollection
    });
  };

  // SAVE WORKOUT

  saveWorkout = e => {
    // pushing workout to unique key
    e.preventDefault();
    const routineKey = e.target.dataset.routinekey;
    const workoutKey = e.target.dataset.workoutkey;

    // we need to push an EXERCISES OBJECT with multiple "new exercises"
    // map over our exercices object and send individual exercise objects to FB

    this.state.exerciseCollection.map(exercise => {
      console.log(exercise);
      firebase
        .database()
        .ref(`/${this.state.user.uid}/${routineKey}/${workoutKey}`)
        .push(exercise);
    });

    const newExercise = {
      exerciseName: this.state.exerciseName,
      exerciseSets: this.state.exerciseSets,
      exerciseReps: this.state.exerciseReps
    };

    firebase
      .database()
      .ref(`/${this.state.user.uid}/${routineKey}/${workoutKey}`)
      .push(newExercise);

    // "DONE with creating the workout."
    // Re-direct back to user's routine/workout list.
    this.props.history.push(`/workouts/${routineKey}/${workoutKey}`);
  };

  render() {
    return (
      <div>
        <Route
          path="/dashboard"
          render={() => (
            <Dashboard
              addRoutine={this.addRoutine}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          path="/workouts/:routineKey"
          render={() => (
            <Workouts
              handleChange={this.handleChange}
              addWorkout={this.addWorkout}
              workoutCounter={this.state.workoutCounter}
              routineName={this.state.routineName}
              workoutName={this.state.workoutName}
            />
          )}
        />
        <Route
          path="/addexercises/:routineKey/:workoutKey"
          render={
            () => (
              <AddExercises
                handleChange={this.handleChange}
                saveWorkout={this.saveWorkout}
                addExercise={this.addExercise}
                exerciseCounter={this.state.exerciseCounter}
                workoutName={this.state.workoutName}
              />
            )
            // exerciseName={this.exerciseName}
            // exerciseSets={this.exerciseSets}
            // exerciseReps={this.exerciseReps}
          }
        />

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

export default withRouter(Master);
