import React, { Component } from "react";

class ExerciseViewForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      exerciseReps,
      exerciseUpdate,
      exerciseName,
      handleChecked,
      index
    } = this.props;

    return (
      <fieldset className="clearfix">
        <label className="visuallyhidden" htmlFor="weight">
          Weight
        </label>
        <input
          type="text"
          // id={`${exerciseName}Weight${index}`}
          id="weight"
          placeholder="lbs"
          onChange={e => exerciseUpdate(e, exerciseName, index)}
          // data-type="weight"
        />

        <label className="visuallyhidden" htmlFor="reps">
          Reps
        </label>
        <input
          type="text"
          // id={`${exerciseName}Reps${index}`}
          id="reps"
          placeholder={exerciseReps}
          onChange={e => exerciseUpdate(e, exerciseName, index)}
          // data-type="reps"
        />

        <label className="visuallyhidden" htmlFor="completed">
          Done
        </label>
        <input
          type="checkbox"
          id={`${exerciseName}Completed${index}`}
          onClick={handleChecked}
        />
      </fieldset>
    );
  }
}

export default ExerciseViewForm;
