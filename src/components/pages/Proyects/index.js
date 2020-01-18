import React from "react";
import Page from "../../Page";
import Proyect from "./Proyect";
import "./styles.css";

const Proyects = (props) => {
  const proyectsInfo = [
    {
      title: "Online Appointment system",
      description: "web app developed with the MERN stack",
      link: "https://github.com/gastoncasini/react-appointment-system",
      icons: ["react", "sass", "mongo", "node"]
    }
  ];

  return (
    <Page {...props}>
      <div className="section__text-container">
        <h1 className="section__title">My Proyects</h1>
        <ul className="proyects">
          {proyectsInfo.map((info, index) => {
            return <Proyect {...info} id={index} />;
          })}
        </ul>
      </div>
    </Page>
  );
};

export default Proyects;
