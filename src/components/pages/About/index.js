import React from "react";
import Page from "../../Page";

import "./styles.css";

const About = (props) => {
  return (
    <Page {...props}>
      <div className="section__text-container">
        <h1 className="section__title">About me</h1>
        <p className="section__para">
          Hi, i'm gaston an argentine <strong>software developer</strong>
          currently working with <strong>web tecnologies</strong>. I'm allways
          looking foward to learn the latest tecniques to apply them in my code.
        </p>
        <p className="section__para">
          I love to write scalable and efficient solutions to challenging
          problems. One of my goals is to be part of an exelent workgroup.
          <br /> Im open to job Offers!
        </p>
        <p className="section__para">
          Passionate about math, Space and weigthlifting.
        </p>
      </div>
    </Page>
  );
};

export default About;
