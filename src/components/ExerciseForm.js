import React, { Component } from "react";

class ExerciseForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <fieldset className="clearfix">
          <div className="exerciseInputs">
            <input
              required
              onChange={handleChange}
              type="text"
              id="exerciseName"
            />
          </div>

          <div className="exerciseInputs">
            <input
              required
              onChange={handleChange}
              type="text"
              id="exerciseSets"
            />
          </div>

          <div className="exerciseInputs">
            <input
              required
              onChange={handleChange}
              type="text"
              id="exerciseReps"
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ExerciseForm;
