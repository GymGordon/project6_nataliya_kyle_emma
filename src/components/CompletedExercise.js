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
      <div className="exerciseCard">
        <h2>{exercise[0]}</h2>
        {exercise[1].map((set, i) => {
          return (
            <div className="completedDetails">
              <p>
                <span class="bold">Set</span> {i + 1}
              </p>
              <p>
                <span class="bold">Reps:</span> {set.reps}
              </p>
              <p>
                <span class="bold">Weight:</span> {set.weight}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CompletedExercise;
