import React, { Component } from "react";

class ExerciseForm extends Component {
  render() {
    return (
      <fieldset className="clearfix">
        <div className="exerciseInputs">
          <input
            onChange={this.props.handleChange}
            type="text"
            id="exerciseName"
          />
        </div>

        <div className="exerciseInputs">
          <input
            onChange={this.props.handleChange}
            type="text"
            id="exerciseSets"
          />
        </div>

        <div className="exerciseInputs">
          <input
            onChange={this.props.handleChange}
            type="text"
            id="exerciseReps"
          />
        </div>
      </fieldset>
    );
  }
}

export default ExerciseForm;

