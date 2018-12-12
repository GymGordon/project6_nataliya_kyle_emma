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
      addExercise,
      routineName
    } = this.props;

    const exerciseForms = [];
    for (let i = 0; i < exerciseCounter; i++) {
      exerciseForms.push(<ExerciseForm handleChange={handleChange} />);
    }

    return (
      <section className="addExercises">
        <div className="wrapper">
          <h2>{`${routineName}: ${workoutName}`}</h2>
          <form onSubmit={saveWorkout}>
            {/* <div className="exerciseLabels clearfix">
              <label htmlFor="exerciseName">Exercise</label>
              <label htmlFor="exerciseSets">Sets</label>
              <label htmlFor="exerciseReps">Reps</label>
            </div> */}

            {exerciseForms}

            <button className="btn--add" onClick={addExercise}>
              Add Another Exercise
            </button>

            <button type="submit" className="btn--save">Save All to Workout</button>
          </form>
        </div>
      </section>
    );
  }
}

export default AddExercises;
