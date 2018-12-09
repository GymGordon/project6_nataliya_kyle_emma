import React, { Component } from "react";

class ExerciseViewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      exerciseReps,
      handleChange,
      exerciseName,
      handleChecked,
      index
    } = this.props;

    return <fieldset className="clearfix">
        <label className="visuallyhidden" htmlFor="weight">
          Weight
        </label>
        <input type="text" id={`${exerciseName}Weight${index}`} placeholder="lbs" onChange={handleChange} />

        <label className="visuallyhidden" htmlFor="reps">
          Reps
        </label>
        <input type="text" id={`${exerciseName}Reps${index}`} placeholder={exerciseReps} onChange={handleChange} />

        <label className="visuallyhidden" htmlFor="completed">
          Done
        </label>
        <input type="checkbox" id={`${exerciseName}Completed${index}`} onClick={handleChecked} />
      </fieldset>;
  }
}

export default ExerciseViewForm;
