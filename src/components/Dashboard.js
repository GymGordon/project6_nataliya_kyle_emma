import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userData, goToRoutine, handleChange, addRoutine } = this.props;

    return <section className="dashboard">
      
        {userData && <div>
            {/* <h2>Routines</h2> */}

            <form action="" onSubmit={addRoutine} className="test">
              <div className="userInputContainer clearfix">
                <label className="visuallyhidden" htmlFor="routineName">
                  Routine Name
                </label>
                {/* "Enter routine name" */}
                <input required onChange={handleChange} type="text" name="routineName" id="routineName" placeholder="Enter routine name" />
                {/* Button: Add */}
                <button className="btn--add" type="submit">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </form>
            {/* {userData.routines || {}} */}
            {Object.entries(userData.routines).map(user => 
            <div>
                <button className="btn--goTo" key={user[0]} id={user[0]} onClick={goToRoutine}>
                  <div className="goTo clearfix">
                    {user[1].routineName}
                    <i class="fas fa-angle-right" />
                  </div>
                </button>
              </div>)}
          </div>}
      </section>;
  }
}

export default Dashboard;
