import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class WorkoutView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goBack, userData, viewExercises } = this.props;

    if (userData) {
      const routineKey = this.props.match.params.routineKey;

      this.workoutArray = Object.entries(
        userData.routines[routineKey].workouts
      );
    }

    return <section className="workoutView">
        <div className="wrapper">
          <button className="btn--goBack" onClick={goBack}>
            <i className="fas fa-long-arrow-alt-left" />
            Go Back
          </button>

          {this.props.userData && <div className="wrapper clearfix">
              {this.workoutArray.map(workout => {
                return <button className="btn--goTo" key={workout[0]} id={workout[0]} onClick={viewExercises}>
                    {workout[1].workoutName}
                    <i className="fas fa-angle-right" />
                  </button>;
              })}
            </div>}
        </div>
      </section>;
  }
}

export default withRouter(WorkoutView);
