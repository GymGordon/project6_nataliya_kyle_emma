import React, { Component } from "react";
import ExerciseViewForm from "./ExerciseViewForm";
import date from "./date";
import { withRouter } from "react-router-dom";
import firebase from "./firebase";

class ExerciseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedWorkout: {}
    };
  }

  componentDidMount() {
    const { userData } = this.props;
    if (userData) {
      let updatedWorkout = Object.assign({}, this.state.completedWorkout);
      const setObj = {
        weight: "",
        reps: ""
      };

      this.exerciseArray.forEach(exercise => {
        let exerciseName = exercise[1].exerciseName;
        updatedWorkout[exerciseName] = [];
        for (let i = 0; i < exercise[1].exerciseSets; i++) {
          updatedWorkout[exerciseName].push(setObj);
        }
      });
      this.setState({
        completedWorkout: updatedWorkout
      });
    }
  }

  exerciseUpdate = (e, exerciseName, index) => {
    let updatedWorkout = JSON.stringify(this.state.completedWorkout);
    let updatedWorkoutParsed = JSON.parse(updatedWorkout);

    updatedWorkoutParsed[exerciseName][index][e.target.id] = e.target.value;

    this.setState({ 
      completedWorkout: updatedWorkoutParsed
    });
  };

  // FINISH WORKOUT

  finishWorkout = e => {
    const routineKey = this.props.match.params.routineKey;
    const workoutKey = this.props.match.params.workoutKey;
    e.preventDefault();
    // this.props.history.push(`/notes`);
    this.setState({
      completedWorkout: {
        ...this.state.completedWorkout,
        date: date
      }
    });
    firebase
      .database()
      .ref(`/${this.props.uid}/${routineKey}/${workoutKey}/completedWorkouts`)
      .update(this.state.completedWorkout);
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
