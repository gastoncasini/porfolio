import React from "react";
import Page from "../Page";

import "./styles.css";

const About = (props) => {
  return (
    <Page {...props}>
      <div className="section__text-container">
        <h1 className="section__title">About me</h1>
        <p className="section__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          rem commodi, sed expedita voluptates repudiandae, in quia temporibus
          voluptatum accusant <strong> voluptates repudiandae, in quia </strong>
          ium aut harum natus itaque officia! Eos corporis pariatur in nihil.
        </p>

        <p className="section__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          rem commodi, sed expedita{" "}
          <strong> voluptates repudiandae, in quia </strong>
          temporibus
        </p>
        <p className="section__para">
          voluptatum accusantium aut harum natus itaque officia! Eos corporis
          pariatur in nihil.
        </p>
      </div>
    </Page>
  );
};

export default About;
