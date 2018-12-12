import React from "react";
import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <div className={`${props.currentState} sideBar`}>
      <ul className="wrapper">
        <li>
          <Link to="/dashboard" className="link" onClick={props.handleClick}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/history" className="link" onClick={props.handleClick}>
            History
          </Link>
        </li>
        <li>  
          <Link to="/" className="link" onClick={props.logOut}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
