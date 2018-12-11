import React, { Component } from "react";
import ExerciseForm from "./ExerciseForm";

class CompletedExercise extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { exercise } = this.props;
    return (
      <div>
        <h2>{exercise[0]}</h2>
        {exercise[1].map((set, i) => {
          return (
            <div>
              <h3>Set {i + 1}</h3>
              <h3>Reps: {set.reps}</h3>
              <h3>Weight: {set.weight}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CompletedExercise;
