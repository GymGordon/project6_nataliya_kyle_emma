import React, { Component } from "react";
import "./App.scss";
import firebase from "firebase";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Master from "./components/Master";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false
    };
  }
  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div>
              <Nav
                toggleMenu={this.toggleMenu}
                isOpen={this.state.menuIsOpen}
              />
            </div>
          </header>

          <main>
            <Master history={this.props.history} />
          </main>
          {/* <footer>
            <p>This is a footer</p>
          </footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
