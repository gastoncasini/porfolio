import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__links">
          <li className="navbar__link-container">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__link-container navbar__link-container--delayed">
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__link-container navbar__link-container--delayed2">
            <Link className="navbar__link " to="/skills">
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
