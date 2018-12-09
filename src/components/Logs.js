import React, { Component } from "react";
import { Link } from "react-router-dom";


class Logs extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { goBack } = this.props

        return (
            <section className="logs">
                <h2>Workout Logs</h2>
                <button onClick={goBack}>Go Back</button>
            </section>
        )
    }
}

export default Logs