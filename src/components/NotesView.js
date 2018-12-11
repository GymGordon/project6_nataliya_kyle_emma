import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CompletedExercise from "./CompletedExercise";

class NotesView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userData } = this.props;

    const workoutKey = this.props.match.params.workoutKey;

    const workoutInfo = userData.completedWorkouts[workoutKey];

    return (
      <div>
        <h3>{workoutInfo.date}</h3>
        <h2>{workoutInfo.routineName}</h2>
        <h2>{workoutInfo.workoutName}</h2>
        <p>{workoutInfo.notes}</p>

        {Object.entries(workoutInfo.exercises).map(exercise => {
          console.log(exercise);
          return <CompletedExercise exercise={exercise} />;
        })}
      </div>
    );
  }
}

export default withRouter(NotesView);
