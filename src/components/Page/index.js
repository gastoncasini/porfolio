import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../svg/Logo.svg";
import Navbar from "../Navbar";
import LoadingOverlay from "../LoadingOverlay";
import "./styles.css";

function AddModifiers(element, modifiers) {
  let classes = `${element}`;
  modifiers.forEach((modifier) => {
    classes += ` ${element}--${modifier}`;
  });

  return classes;
}

class Page extends Component {
  componentDidMount() {
    if (!this.props.init) {
      this.props.triggerLoad();
    }
  }

  render() {
    const { modifiers, loading } = this.props;
    console.log(loading);

    let containerClasses = AddModifiers("section__container", modifiers);

    let sectionClasses = AddModifiers("section", modifiers);

    return (
      <section className={sectionClasses}>
        {loading && <LoadingOverlay />}
        <div className={containerClasses}>
          <Link className="section__logo-container" to="/">
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
