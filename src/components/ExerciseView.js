import React, { Component } from "react";
import ExerciseViewForm from "./ExerciseViewForm";
import date from "./date";
import { withRouter } from "react-router-dom";

class ExerciseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedWorkout: {}
    };
  }

  componentDidMount(){
    const { userData } = this.props;
    if(userData) {
      console.log(this.exerciseArray)
      this.exerciseArray.map(exercise => {
        return this.setState({
          completedWorkout: {
            ...this.state.completedWorkout,
            [exercise[1].exerciseName]: []
          }
        });
      });
    }
  }
  
  exerciseUpdate = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };

  // FINISH WORKOUT

  finishWorkout = e => {
    e.preventDefault();
    // this.props.history.push(`/notes`);
    this.setState({
      completedWorkout: {
        date: date
        // exerciseName: this.state.
      }
    });
  };

  render() {
    const { userData, goBack } = this.props;

    if (userData) {
      const routineKey = this.props.match.params.routineKey;
      const workoutKey = this.props.match.params.workoutKey;

      this.exerciseArray = Object.entries(userData[routineKey][workoutKey]);
      const remove = () => this.exerciseArray.pop();
      remove();

      this.printExerciseViewForms = (sets, reps, name) => {
        this.exerciseViewForms = [];
        for (let i = 0; i < sets; i++) {
          this.exerciseViewForms.push(
            <ExerciseViewForm
              exerciseName={name}
              exerciseUpdate={this.exerciseUpdate}
              index={i}
            />
          );
        }
      };

      this.exerciseMap = () => {
        return this.exerciseArray.map(exercise => {
          return (
            <div key={exercise[0]} className="exerciseCard clearfix">
              <h2>{exercise[1].exerciseName}</h2>

              <h3>Weight</h3>
              <h3>Reps</h3>
              <h3>Done</h3>

              {this.printExerciseViewForms(
                exercise[1].exerciseSets,
                exercise[1].exerciseReps,
                exercise[1].exerciseName
              )}

              {this.exerciseViewForms}
            </div>
          );
        });
      };
    }

    return (
      <section className="exerciseView">
        <form action="" onSubmit={this.finishWorkout}>
          {userData && this.exerciseMap()}

          <input className="btn--goTo" type="submit" value="Finish Workout" />
        </form>
        <button className="btn--goBack" onClick={goBack}>
          <i class="fas fa-long-arrow-alt-left" />
          Go Back
        </button>
      </section>
    );
  }
}

export default withRouter(ExerciseView);

// completedWorkout: {
//   date: "",
//     BACKTHING: [
//       {
//         weight: "",
//         reps: ""
//       },
//       {
//         weight: "",
//         reps: ""
//       }
//     ],
//       LUNGE: [
//         {
//           weight: "",
//           reps: ""
//         },
//         {
//           weight: "",
//           reps: ""
//         }
//       ],
//       }
