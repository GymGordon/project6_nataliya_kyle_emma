import React, { Component } from "react";

class WorkoutItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <button>{this.props.workoutName}</button>;
    }
}

export default WorkoutItem;