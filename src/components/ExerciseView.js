import React, { Component } from "react";

class ExerciseView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      userData,
      routineKeyForWorkoutView,
      viewExercises,
      workoutKeyForExerciseView
    } = this.props;
    const exerciseArray = Object.entries(
      userData[routineKeyForWorkoutView][workoutKeyForExerciseView]
    );
    const remove = () => exerciseArray.pop();
    remove();
    return exerciseArray.map(exercise => {
      return <div key={exercise[0]}>
          <h2>{exercise[1].exerciseName}</h2>
          <h2>{exercise[1].exerciseSets}</h2>
          <h2>{exercise[1].exerciseReps}</h2>
        </div>;
    });
  }
}

export default ExerciseView;
