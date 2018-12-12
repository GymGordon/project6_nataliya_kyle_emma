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

    return <section className="addExercises">
        <div className="wrapper">
          <h2>{`${routineName}: ${workoutName}`}</h2>
          <form onSubmit={saveWorkout}>
            {exerciseForms}

            <div className="buttonDiv">
              <button className="btn--add" onClick={addExercise}>
                Add Another Exercise
              </button>

              <button type="submit" className="btn--save">
                Save All to Workout
              </button>
            </div>
          </form>
        </div>
      </section>;
  }
}

export default AddExercises;
