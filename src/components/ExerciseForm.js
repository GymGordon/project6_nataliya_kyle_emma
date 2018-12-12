import React, { Component } from "react";

class ExerciseForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange } = this.props;

    return (
      <div className="clearfix">
        <fieldset className="exerciseCard clearfix">
          <div className="exerciseInput ">
          <label htmlFor="exerciseName">Exercise</label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="exerciseName"
              placeholder="i.e. 'Bicep Curls'"
            />
          </div>

          <div className="exerciseInputs">
          <label htmlFor="exerciseSets">Sets</label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="exerciseSets"
              placeholder="Enter # Sets"
            />
          </div>

          <div className="exerciseInputs">
          <label htmlFor="exerciseReps">Reps</label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="exerciseReps"
              placeholder="Enter # Reps"
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ExerciseForm;
