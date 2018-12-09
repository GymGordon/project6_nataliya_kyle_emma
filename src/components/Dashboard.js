import React, { Component } from "react";
import { Link } from "react-router-dom";
import RoutineItem from "./RoutineItem";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // setTimeout(() => {
    //   console.log(Object.entries(this.props.userData));

    // }, 2000)

    // const routineCollection = [];
    // for (let i = 0; i < this.props.routineCounter; i++) {
    //   routineCollection.push(<RoutineItem />);
    // }

    const { userData, goToRoutine, handleChange, addRoutine } = this.props;

    return (
      <section className="dashboard">
        {userData && (
          <div>
            <h2>DASHBOARD</h2>
            <form action="" onSubmit={addRoutine}>
              <label className="visuallyhidden" htmlFor="routineName">
                Routine Name
              </label>
              <input
                required
                onChange={handleChange}
                type="text"
                name="routineName"
                id="routineName"
                placeholder="Routine Name"
              />
              <input type="submit" value="Add Routine" />
            </form>
            {Object.entries(userData).map(user => (
              <div>
                {console.log(user, "user")}
                <button key={user[0]} id={user[0]} onClick={goToRoutine}>
                  {user[1].routineName}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Dashboard;
