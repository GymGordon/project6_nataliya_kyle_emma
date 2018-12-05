import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>DASHBOARD</h1>
                <button>ADD ROUTINE</button>
                <Link to="/addworkouts">Add Workouts</Link>                
            </div>
        )
    }
}

export default Dashboard