import React from "react";
import "./styles.css";

const Proyect = (props) => {
  return (
    <li className="proyects__proyect">
      <div className="proyects__proyect__content">
        <h3 className="proyects__proyect__title">{props.title}</h3>
        <p className="proyects__proyect__description">{props.description}</p>
        <div className="proyects__proyect__button">
          <a href={props.link} className="proyects__proyects__link">
            see it on github
          </a>
        </div>
      </div>
    </li>
  );
};

export default Proyect;
