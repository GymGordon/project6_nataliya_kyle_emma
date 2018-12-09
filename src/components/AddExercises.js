import React, { Component } from "react";
import ExerciseForm from "./ExerciseForm";

class AddExercises extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      handleChange,
      exerciseCounter,
      saveWorkout,
      workoutName,
      addExercise
    } = this.props;

    const exerciseForms = [];
    for (let i = 0; i < exerciseCounter; i++) {
      exerciseForms.push(<ExerciseForm handleChange={handleChange} />);
    }

    return (
      <section className="addExercises">
        <h2>{workoutName}</h2>
        <form onSubmit={saveWorkout}>
          <div className="exerciseLabels clearfix">
            <label htmlFor="exerciseName">Exercise</label>
            <label htmlFor="exerciseSets">Sets</label>
            <label htmlFor="exerciseReps">Reps</label>
          </div>

          {exerciseForms}

          <button onClick={addExercise}>Add Exercise</button>

          <input type="submit" value="Save Workout" />
        </form>
      </section>
    );
  }
}

export default AddExercises;
