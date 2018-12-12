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

    return <section className="workouts">
        <div className="wrapper">
          <h2>{routineName}</h2>
          <p>Add multiple workouts to your Routine</p>
          <form action="" onSubmit={addWorkout}>
            <div className="userInputContainer clearfix">
              <label className="visuallyhidden" htmlFor="workoutName">
                Workout Name
              </label>
              <input required onChange={handleChange} type="text" name="workoutName" id="workoutName" placeholder="Workout Name, i.e. 'Leg Day', 'Monday'" />
              <button className="btn--add" type="submit">
                Add Workout
              </button>
            </div>
          </form>
        {workoutCounter > 0 && <button className="btn--save" onClick={saveRoutine}>
          Save Routine
            </button>}
        </div>
        <div className="wrapper">
        <h2 className="saved">Saved Workouts</h2>
          {workoutKeys.map(keyObject => {
            return Object.entries(keyObject).map(i => {
              const workoutName = i[0];
              const workoutKey = i[1];
              return <WorkoutItem workoutName={workoutName} workoutKey={workoutKey} />;
            });
          })}
        </div>
      </section>;
  }
}

export default Workouts;
