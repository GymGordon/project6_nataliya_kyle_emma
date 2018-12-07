import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase";

class AddWorkouts extends Component {
  render() {
    return (
      <section className="addWorkouts">
        <h2>Your Routine</h2>
        <form action="" onSubmit={this.props.addRoutine}>
          <label htmlFor="routineName">Routine Name</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            name="routineName"
            id="routineName"
            placeholder="i.e. Leg Day, Monday"
          />
          <input type="submit" value="Add A Workout" />
        </form>
      </section>
    );
  }
}

export default AddWorkouts;
