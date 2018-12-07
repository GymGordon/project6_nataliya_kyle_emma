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
      exerciseForms.push
      (<ExerciseForm 
          exerciseName={this.props.exerciseName}
          exerciseSets={this.props.exerciseSets}
          exerciseReps={this.props.exerciseReps}
          handleChange={this.props.handleChange}
      />);
    }

    return (
      <section className="addExercises">
        <h2>Add Exercises</h2>
        <form
          onSubmit={this.props.saveWorkout}
          id={this.props.match.params.routineKey}
        >
          <label htmlFor="workoutTitle">Workout Title</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="workoutTitle"
            placeholder="Workout Title"
          />

          <label htmlFor="exerciseName">Exercise</label>
          <label htmlFor="exerciseSets">Sets</label>
          <label htmlFor="exerciseReps">Reps</label>

          {exerciseForms}

          <button onClick={this.props.addExercise}>Add Exercise</button>

          <input type="submit" value="Save Workout" />
        </form>
      </section>
    );
  }
}

export default withRouter(AddExercises);