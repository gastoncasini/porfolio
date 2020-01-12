import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../svg/Logo.svg";
import Navbar from "../Navbar";
import "./styles.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const containerClasses = classes
      ? `section__container ${classes}`
      : "section__container";

    return (
      <section className="section">
        <div className={containerClasses}>
          <Link className="section__logo-container">
            <Logo />
          </Link>

          {this.props.children}
        </div>
        <Navbar />
      </section>
    );
  }
}

export default Page;
