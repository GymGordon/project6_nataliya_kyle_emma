import React, { Component } from "react";

class WorkoutView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      goBack,
      userData,
      routineKeyForWorkoutView,
      viewExercises
    } = this.props;
    const workoutArray = Object.entries(userData[routineKeyForWorkoutView]);
    const remove = () => workoutArray.pop();
    remove();

    return (
      <section className="workoutView">
        {this.props.userData && (
          <div>
            {workoutArray.map(workout => {
              return (
                <div>
                  <button
                  className="btn--goTo"
                    key={workout[0]}
                    id={workout[0]}
                    onClick={viewExercises}
                  >
                    {workout[1].workoutName}
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <button onClick={goBack}>Go Back</button>
      </section>
    );
  }
}

export default WorkoutView;
