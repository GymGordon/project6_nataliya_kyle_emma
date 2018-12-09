import React, { Component } from "react";

class WorkoutItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const { workoutKey, workoutName } = this.props;

    return (
      <div>
        {
            <button key={workoutKey}>
              {workoutName}
            </button>
        }
      </div>
    );
  }
}

export default WorkoutItem;
