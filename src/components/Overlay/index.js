import React from "react";
import { ReactComponent as Logo } from "../../svg/Logo.svg";
import "./styles.css";

const Overlay = () => {
  return (
    <div className="overlay">
      <div className="overlay__logo-container">
        <Logo />
      </div>
      <div className="overlay__diag overlay__diag--top"></div>
      <div className="overlay__diag overlay__diag--bottom"></div>
    </div>
  );
};

export default Overlay;
