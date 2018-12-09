import React, { Component } from "react";

class WorkoutView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routineKeyForWorkoutView } = this.props;

    return (
      <div>
        {this.props.userData && (
          <div>
            {console.log(Object.entries(this.props.userData[routineKeyForWorkoutView]))}
            <button>
              <h2>sup yo</h2>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default WorkoutView;
