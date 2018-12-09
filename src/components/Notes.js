import React, { Component } from "react";

class Notes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { saveNotes, goBack } = this.props;
    return (
      <div className="notes">
        <h2>Notes</h2>
        <form action="" onSubmit={saveNotes}>
          <textarea>This is stuff</textarea>
          <input type="submit" value="Okay" />
        </form>
        <button onClick={goBack}>Go Back</button>
      </div>
    );
  }
}

export default Notes;
