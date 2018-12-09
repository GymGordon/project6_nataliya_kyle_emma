import React, { Component } from "react";

class WorkoutView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userData, routineKeyForWorkoutView } = this.props;
    {const workoutArray = Object.entries((userData[routineKeyForWorkoutView])).pop();}

    return (
      <div>
        {this.props.userData && (
          <div>
            {/* <button>{userData[routineKeyForWorkoutView].routineName}</button> */}
              {/* {console.log(userData[routineKeyForWorkoutView])} */}
                {.map(user => {
                    console.log(user);
              return (
                <div>

                  {/* <button key={user[0]} id={user[0]} onClick={goToRoutine}>
                  {user[1].routineName}
                </button> */}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default WorkoutView;
