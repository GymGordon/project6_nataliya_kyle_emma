import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Notes extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){

  }
  
  render() {
    const { saveNotes, goBack, userData } = this.props;

    if (userData) {

      const routineKey = this.props.match.params.routineKey;
      const workoutKey = this.props.match.params.workoutKey;
      const completedWorkoutKey = this.props.match.params.completedWorkoutKey;
      
      this.printWorkoutHistory = () => {

        const workoutSummary = userData.completedWorkouts[completedWorkoutKey];
        console.log(workoutSummary);

        return <div>
            {workoutSummary.date}
            {workoutSummary.routineName}
            {workoutSummary.workoutName}
          </div>
        

        
        
        // Object.values(userData.completedWorkouts[completedWorkoutKey]).map(
        //   workout => {
        //     console.log(workout, "workout");
        //     return (
        //      <div>
        //        {/* <p>{workout}</p> */}
        //      </div> 
        //     )
            // return Object.entries(workout[1].exercises).map(
            //   exercise => {
            //     {
            //       console.log(exercise, "exercise");
            //     }

            //     return (
            //       <div>
            //         <p>Exercise: {exercise[0]}</p>
            //       </div>
            //     );
            //   }
            // );
          // }
        // );
      };
    }

    return (
      <div className="notes">
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
      </div>
    );
  }
}

export default withRouter(Notes);
