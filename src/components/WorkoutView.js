import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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

    if (userData){
      const routineKey = this.props.match.params.routineKey
  
      this.workoutArray = Object.entries(userData[routineKey]);
      const remove = () => this.workoutArray.pop();
      remove();
    }

    // userData && ()

    return (
      <section className="workoutView">
        {this.props.userData && (
          <div>
            {this.workoutArray.map(workout => {
              return <div>
                  <button className="btn--goTo" key={workout[0]} id={workout[0]} onClick={viewExercises}>
                    {workout[1].workoutName}
                    <i class="fas fa-angle-right" />
                  </button>
                </div>;
            })}
          </div>
        )}
        <button className="btn--goBack" onClick={goBack}><i class="fas fa-long-arrow-alt-left"></i>Go Back</button>
      </section>
    );
  }
}

export default withRouter(WorkoutView);
