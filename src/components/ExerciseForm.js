import React, { Component } from "react";

class ExerciseForm extends Component {
    constructor(props){
        super(props);
    }
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
