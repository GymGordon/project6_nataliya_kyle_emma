import React, { Component } from "react";
import HamburgerMenu from "react-hamburger-menu";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    const { toggleMenu } = this.props;
    toggleMenu();
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;

    return <nav className="clearfix">
        <div className="nav">
          <Link to="/dashboard">
            <h1>FleX Fitness</h1>
          </Link>
          <div className="burger">
            <HamburgerMenu isOpen={open} menuClicked={this.handleClick} width={18} height={15} strokeWidth={1} rotate={0} color="black" borderRadius={0} animationDuration={0.5} />
          </div>

          <Sidebar handleClick={this.handleClick} currentState={open === true ? "visible" : "not-visible"} />
        </div>
      </nav>;
  }
}

export default Nav;
