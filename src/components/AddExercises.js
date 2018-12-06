import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddExercises extends Component {
  render() {
    return (
      <div>
        <h1>Add Exercises</h1>
        <form>
          <label htmlFor="workoutTitle">Workout Title</label>
          <input
            onChange={this.props.handleChangeWorkoutTitle}
            type="text"
            id="workoutTitle"
            placeholder="Workout Title"
          />

          <label htmlFor="exerciseName">Exercise Name</label>
          <input
            onChange={this.props.handleChangeExercise}
            type="text"
            id="exerciseName"
            placeholder="Exercise Name"
          />

          <label htmlFor="exerciseSets">Sets</label>
          <input
            onChange={this.props.handleChangeExercise}
            type="text"
            id="exerciseSets"
            placeholder="# Sets"
          />

          <label htmlFor="exerciseReps">Reps</label>
          <input
            onChange={this.props.handleChangeExercise}
            type="text"
            id="exerciseReps"
            placeholder="# Reps"
          />

          <input type="submit" value="Add Workout" />
        </form>
      </div>
    );
  }
}

export default AddExercises;
