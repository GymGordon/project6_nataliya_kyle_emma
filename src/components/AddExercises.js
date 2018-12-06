import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddExercises extends Component {
  render() {
    return (
      <section className="addExercises">
        <h2>Add Exercises</h2>
        <form onSubmit={this.props.addExercise}>
          <label htmlFor="workoutTitle">Workout Title</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="workoutTitle"
            placeholder="Workout Title"
          />

          <label htmlFor="exerciseName">Exercise</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="exerciseName"
          />

          <label htmlFor="exerciseSets">Sets</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="exerciseSets"
          />

          <label htmlFor="exerciseReps">Reps</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="exerciseReps"
          />

          <input type="submit" value="Add Exercise" />
        </form>
      </section>
    );
  }
}

export default AddExercises;
