import React, { Component } from "react";

class WorkoutView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userData, routineKeyForWorkoutView, viewExercises } = this.props;
    const workoutArray = Object.entries(userData[routineKeyForWorkoutView]);
    const remove = () => workoutArray.pop();
    remove();

    return (
      <div>
        {this.props.userData && (
          <div>
            {workoutArray.map(workout => {
              return (
                <div>
                  <button key={workout[0]} id={workout[0]} onClick={viewExercises}>
                    {workout[1].workoutName}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default WorkoutView;
