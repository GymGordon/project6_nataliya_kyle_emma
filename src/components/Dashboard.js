import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {

    render() {
        return (
            <div>
                <h1>DASHBOARD</h1>
                <Link to="/addworkouts">Add Routine</Link>                
            </div>
        )
    }
}

export default Dashboard