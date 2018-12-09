import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";
import WorkoutItem from "./WorkoutItem";

class Workouts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="Workouts">
        <h2>{this.props.routineName}</h2>
        <form action="" onSubmit={this.props.addWorkout}>
          <label className="visuallyhidden" htmlFor="workoutName">
            Workout Name
          </label>
          <input
            required
            onChange={this.props.handleChange}
            type="text"
            name="workoutName"
            id="workoutName"
            placeholder="Workout Name"
          />
          <input type="submit" value="Add A Workout" />
        </form>

        {this.props.workoutKeys.map(keyObject => {
          return Object.entries(keyObject).map(i => {
            const workoutName = i[0];
            const workoutKey = i[1];
            return <WorkoutItem workoutName={workoutName} workoutKey={workoutKey} />;
          });
        })}

        {this.props.workoutCounter > 0 && (
          <button onClick={this.props.saveRoutine}>Save Routine</button>
        )}
      </section>
    );
  }
}

export default withRouter(Workouts);
