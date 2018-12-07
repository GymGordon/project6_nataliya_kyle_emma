import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return <section className="dashboard">
        <h2>DASHBOARD</h2>
        <form action="" onSubmit={this.props.addRoutine}>
          <label className="visuallyhidden" htmlFor="routineName">
            Routine Name
          </label>
          <input required onChange={this.props.handleChange} type="text" name="routineName" id="routineName" placeholder="Routine Name" />
        <input type="submit" value="Add Routine" />
        </form>
        {/* <Link to="/addworkouts">Add Routine</Link> */}
      </section>;
  }
}

export default Dashboard;