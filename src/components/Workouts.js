import React, { Component } from "react";
import WorkoutItem from "./WorkoutItem";

class Workouts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      workoutKeys,
      workoutCounter,
      handleChange,
      addWorkout,
      routineName,
      saveRoutine
    } = this.props;

    return (
      <section className="workouts">
        <h2>{routineName}</h2>
        <form action="" onSubmit={addWorkout}>
          <label className="visuallyhidden" htmlFor="workoutName">
            Workout Name
          </label>
          <input
            required
            onChange={handleChange}
            type="text"
            name="workoutName"
            id="workoutName"
            placeholder="Workout Name"
          />
          <input className="btn--" type="submit" value=">" />
        </form>

        {workoutKeys.map(keyObject => {
          return Object.entries(keyObject).map(i => {
            const workoutName = i[0];
            const workoutKey = i[1];
            return (
              <WorkoutItem workoutName={workoutName} workoutKey={workoutKey} />
            );
          });
        })}

        {workoutCounter > 0 && (
          <button onClick={saveRoutine}>Save Routine</button>
        )}
      </section>
    );
  }
}

export default Workouts;
