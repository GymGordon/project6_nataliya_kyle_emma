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

        {this.props.workoutKeys.map(workout => {
          console.log(workout);
          return Object.entries(workout).map(x => {
            console.log(x);
            return <WorkoutItem workoutName={x[0]} key={x[1]} />;
          });
        })}
      </section>
    );
  }
}

export default withRouter(Workouts);
