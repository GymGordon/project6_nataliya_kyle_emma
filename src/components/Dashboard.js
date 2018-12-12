import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userData, goToRoutine, handleChange, addRoutine } = this.props;

    return (
      <section className="dashboard">
        {userData && (
          <div class="wrapper">
            <form action="" onSubmit={addRoutine}>
              <div className="userInputContainer clearfix">
                <label className="visuallyhidden" htmlFor="routineName">
                  Routine Name
                </label>
                {/* "Enter routine name" */}
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="routineName"
                  id="routineName"
                  placeholder="Enter routine name"
                />
                {/* Button: PLUS */}
                <button className="add" type="submit">
                  Add Routine
                </button>
              </div>
            </form>

            <div className="wrapper clearfix">
              <h2 className="savedRoutines">Saved Routines</h2> 
              {userData.routines &&
                Object.entries(userData.routines).map(user => (
                  <button
                    className="emma btn--goTo"
                    key={user[0]}
                    id={user[0]}
                    onClick={goToRoutine}>
                    <div className="goTo clearfix">
                      {user[1].routineName}
                      <i class="fas fa-angle-right" />
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Dashboard;
