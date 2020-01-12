import React, { Component } from "react";
import { ReactComponent as Logo } from "../../svg/Logo.svg";

import "./styles.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="section">
        <div className="section__container">
          <a href="/" className="section__logo-container">
            <Logo />
          </a>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Page;
