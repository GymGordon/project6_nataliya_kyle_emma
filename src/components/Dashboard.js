import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard">
        <h2>DASHBOARD</h2>
        <Link to="/addworkouts">Add Routine</Link>
      </section>
    );
  }
}

export default Dashboard;