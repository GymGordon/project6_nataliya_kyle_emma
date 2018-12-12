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
            <div className="completedDetails clearfix">
              <h3>
                Set {i + 1}
              </h3>
              <div className="detail">
                <p>
                  Reps: {set.reps}
                </p>
              </div>
              <div className="detail">
                <p>
                  Weight: {set.weight}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CompletedExercise;
