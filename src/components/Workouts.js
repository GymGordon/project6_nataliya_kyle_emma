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
        <form
          action=""
          onSubmit={this.props.addWorkout}
          // id={this.props.match.params.routineKey}
          data-routineKey={this.props.match.params.routineKey}
        >
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

        {this.props.workoutCollection.map((workout) => {
          return (
            <WorkoutItem workoutName={workout.workoutName} workoutKey={this.props.workoutKey}  />
          )
        })}

      </section>
    );
  }
}

export default withRouter(Workouts);
