import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CompletedExercise from "./CompletedExercise";

class NotesView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userData, goBack } = this.props;

    const workoutKey = this.props.match.params.workoutKey;

    const workoutInfo = userData.completedWorkouts[workoutKey];

    return (
      <section className="notesView">
        <div className="wrapper">
          <button className="btn--goBack" onClick={goBack}>
            <i className="fas fa-long-arrow-alt-left" />
            Go Back
          </button>
          <div className="exerciseCard">
            <h2>
              {workoutInfo.routineName}: {workoutInfo.workoutName}
            </h2>
            <p>{workoutInfo.date}</p>
            <p className="notes">{workoutInfo.notes}</p>
          </div>

          {Object.entries(workoutInfo.exercises).map(exercise => {
            return <CompletedExercise exercise={exercise} />;
          })}
        </div>
      </section>
    );
  }
}

export default withRouter(NotesView);
