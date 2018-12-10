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
          <div>
            {/* <h2>Routines</h2> */}

            <form action="" onSubmit={addRoutine} className="test">
              <div className="userInputContainer clearfix">
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
                <button className="btn--add" type="submit"><i class="fas fa-arrow-circle-right"></i></button>

              </div>
            </form>

            {Object.entries(userData).map(user => (
              <div>
                <button
                  className="btn--goTo"
                  key={user[0]}
                  id={user[0]}
                  onClick={goToRoutine}
                >
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
