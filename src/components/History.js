import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

class History extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { goBack, userData, workoutKey} = this.props;

    return (
      <section className="logs">
        <h2>Workout Logs</h2>

        {Object.entries(userData.completedWorkouts).map(completedWorkout => {
          const workout = completedWorkout[1];
          const workoutKey = completedWorkout[0];
          return <HistoryItem workout={workout} workoutKey={workoutKey} />;
        })}

        <button onClick={goBack}>Go Back</button>
      </section>
    );
  }
}

export default History;
