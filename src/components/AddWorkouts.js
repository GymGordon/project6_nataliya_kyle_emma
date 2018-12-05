import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase";

class AddWorkouts extends Component {
  render() {
    return (
      <div>
        <h1>Workouts</h1>
        <form action="" onSubmit={this.props.handleSubmit}>
          <label htmlFor="routineName">Routine Name</label>
          <input onChange={this.props.handleChange} type="text" name="routineName" id="routineName" />
          <input type="submit" value="Add Workout" />
        </form>
      </div>
    );
  }
}

export default AddWorkouts;
