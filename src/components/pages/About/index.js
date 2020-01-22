import React from "react";
import Page from "../../Page";

import "./styles.css";

const About = (props) => {
  return (
    <Page {...props}>
      <div className="section__text-container">
        <h1 className="section__title">About me</h1>
        <p className="section__para">
          Hi, i'm gaston an argentine software developer currently working with
          <strong> web technologies</strong>.
        </p>
        <p className="section__para">
          I love to write <strong>scalable</strong> and{" "}
          <strong> efficient</strong> solutions to challenging problems. One of
          my goals is to be part of an exelent workgroup.
          <br /> Im open to <strong> job Offers!</strong>
        </p>
        <p className="section__para">
          Passionate about math, Space and weigthlifting.
        </p>
      </div>
    </Page>
  );
};

export default About;
