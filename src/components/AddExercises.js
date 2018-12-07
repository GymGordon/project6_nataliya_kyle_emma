import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Redirect, withRouter } from "react-router-dom";
import ExerciseForm from "./ExerciseForm";

class AddExercises extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const exerciseForms = [];
    for (let i = 0; i < this.props.exerciseCounter; i++) {
      exerciseForms.push(
        <ExerciseForm
          exerciseName={this.props.exerciseName}
          exerciseSets={this.props.exerciseSets}
          exerciseReps={this.props.exerciseReps}
          handleChange={this.props.handleChange}
        />
      );
    }

    return <section className="addExercises">
        <h2>{this.props.workoutName}</h2>
        <form onSubmit={this.props.saveWorkout} data-routineKey={this.props.match.params.routineKey} data-workoutKey={this.props.match.params.workoutKey}>
          {/* <label htmlFor="workoutTitle">Workout Title</label>
          <input
            required
            onChange={this.props.handleChange}
            type="text"
            id="workoutTitle"
            placeholder="i.e. Leg Day, Monday"
          /> */}

          <div className="exerciseLabels clearfix">
            <label htmlFor="exerciseName">Exercise</label>
            <label htmlFor="exerciseSets">Sets</label>
            <label htmlFor="exerciseReps">Reps</label>
          </div>

          {exerciseForms}

          <button onClick={this.props.addExercise}>Add Exercise</button>

          <input type="submit" value="Save Workout" />
        </form>
      </section>;
  }
}

export default withRouter(AddExercises);
