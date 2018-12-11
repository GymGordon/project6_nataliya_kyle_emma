import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from "./firebase"

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: "",
    }
  }

  saveNotes = e => {
    const { uid } = this.props;
    const completedWorkoutKey = this.props.match.params.completedWorkoutKey;
    const routineKey = this.props.match.params.routineKey;
    const workoutKey = this.props.match.params.workoutKey;
    e.preventDefault();
    firebase.database().ref(`users/${uid}/completedWorkouts/${completedWorkoutKey}/notes`).set(this.state.notes)

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
            <h2>{workoutSummary.routineName}</h2>
            <h2>{workoutSummary.workoutName}</h2>

            <p>{workoutSummary.date}</p>

            {Object.entries(workoutSummary.exercises).map(exercise => {
              return (
                <div>
                  <h2>{exercise[0]}</h2>
                  {exercise[1].map((set, i) => {
                    return (
                      <div>
                        <h3>Set {i + 1}</h3>
                        <h3>Reps: {set.reps}</h3>
                        <h3>Weight: {set.weight}</h3>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      };
    }

    return (
      <div className="notes">
        <h2>Notes</h2>
        <form action="" onSubmit={this.saveNotes}>
          <textarea
            onChange={this.handleChange}
            id="notes"
            placeholder="How was your workout, bruh?"
          />
          <input type="submit" className="btn--save" value="Okay" />
        </form>
        <div className="exerciseCard clearfix">
          {this.printWorkoutHistory()}
        </div>

        <button className="btn--goBack" onClick={goBack}>
          <i class="fas fa-long-arrow-alt-left" />
          Go Back
        </button>
      </div>
    );
  }
}

export default withRouter(Notes);
