import React, { Component } from "react";

class ExerciseViewForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { exerciseReps, exerciseUpdate, exerciseName, index } = this.props;

    return (
      <fieldset className="clearfix">
        <h3>Set{index + 1}</h3>
        <div className="exerciseDetails clearfix">
          <label className="visuallyhidden" htmlFor="weight">
            Weight
          </label>
          <input
            required
            type="text"
            id="weight"
            placeholder="weight (lbs)"
            onChange={e => exerciseUpdate(e, exerciseName, index)}
          />
          <label className="visuallyhidden" htmlFor="reps">
            Reps
          </label>
          <input
            required
            type="text"
            id="reps"
            placeholder={`reps (${exerciseReps})`}
            onChange={e => exerciseUpdate(e, exerciseName, index)}
          />
        </div>
      </fieldset>
    );
  }
}

export default ExerciseViewForm;
