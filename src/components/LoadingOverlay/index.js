import React from "react";
import "./styles.css";
import { ReactComponent as Logo } from "../../svg/Logo.svg";

const LoadingOverlay = () => {
  return (
    <div className="page-loader">
      <div className="page-loader__logo-container">
        <Logo className={"page-loader__logo"} />
        <Logo className={"page-loader__logo page-loader__logo--shadow"} />
      </div>
    </div>
  );
};

export default LoadingOverlay;
