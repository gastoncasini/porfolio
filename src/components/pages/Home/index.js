import React from "react";
import Page from "../../Page";
import "./styles.css";

const Home = (props) => {
  let modifiers = ["home", ...props.modifiers];

  return (
    <Page {...props} modifiers={modifiers}>
      <div className="section__transparent">
        <h1 className="section__title section__title--home">
          HI, MY NAME IS <br /> GASTON CASINI
        </h1>

        <p className="section__subtitle">
          in development Software Developer :){" "}
        </p>
      </div>
    </Page>
  );
};

export default Home;
