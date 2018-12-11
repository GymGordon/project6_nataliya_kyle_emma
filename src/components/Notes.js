import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Notes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { saveNotes, goBack, userData } = this.props;

    const routineKey = this.props.match.params.routineKey;
    const workoutKey = this.props.match.params.workoutKey;

    if (userData) {
      this.printWorkoutHistory = () => {
        Object.entries(
          userData.completedWorkouts.routines[routineKey].workouts[workoutKey]
        ).map(workout => {
          console.log(workout)
          console.log(workout[0]);
          // return (
          //   <div>
          //     <p>{workout[1]}</p>
          //   </div>
          // );
        });
      };
    }

    return <div className="notes">
        <h2>Notes</h2>
        <form action="" onSubmit={saveNotes}>
          <textarea>This is stuff</textarea>
          <input type="submit" value="Okay" />
        </form>
        {this.printWorkoutHistory()}
        <button className="btn--goBack" onClick={goBack}>
          <i class="fas fa-long-arrow-alt-left" />
          Go Back
        </button>
      </div>;
  }
}

export default withRouter(Notes);
