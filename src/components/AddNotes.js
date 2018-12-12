import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from "./firebase";
import CompletedExercise from "./CompletedExercise";

class AddNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ""
    };
  }

  saveNotes = e => {
    const { uid } = this.props;
    const completedWorkoutKey = this.props.match.params.completedWorkoutKey;
    const routineKey = this.props.match.params.routineKey;
    const workoutKey = this.props.match.params.workoutKey;
    e.preventDefault();
    firebase
      .database()
      .ref(`users/${uid}/completedWorkouts/${completedWorkoutKey}/notes`)
      .set(this.state.notes);

    this.props.history.push(`/history/${completedWorkoutKey}`);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { goBack, userData } = this.props;

    if (userData) {
      const completedWorkoutKey = this.props.match.params.completedWorkoutKey;

      this.printWorkoutHistory = () => {
        const workoutSummary = userData.completedWorkouts[completedWorkoutKey];

        return (
          <div>
            <div className="exerciseCard headline">
              <h2>Workout Summary</h2>
              {/* <h2>
                {workoutSummary.routineName}: {workoutSummary.workoutName}
              </h2> */}

              <p>{workoutSummary.date}</p>
            </div>

            {Object.entries(workoutSummary.exercises).map(exercise => {
              return <CompletedExercise exercise={exercise} />;
            })}
          </div>
        );
      };
    }

    return (
      <section className="addNotes">
        <div className="wrapper">
          <h2>Workout Notes</h2>
          <textarea
            rows="5"
            cols="25"
            onChange={this.handleChange}
            id="notes"
            placeholder="How was your workout, bruh?"
          />
          <div className="clearfix">{this.printWorkoutHistory()}</div>

          <form action="" onSubmit={this.saveNotes}>
            <input type="submit" className="btn--save" value="Okay" />
          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(AddNotes);
