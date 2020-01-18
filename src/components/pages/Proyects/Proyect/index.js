import React from "react";
import "./styles.css";
import {
  DiReact as ReactIcon,
  DiSass as SassIcon,
  DiNodejsSmall as NodeIcon,
  DiMongodb as MongoIcon
} from "react-icons/di";

const iconStyle = {
  width: "60px",
  height: "60px",

  "&:hover": {
    background: "red"
  }
};

function renderIcon(icon, stylesObj) {
  const styles = { ...stylesObj };
  switch (icon) {
    case "react":
      styles.fill = "#42abc8";
      return (
        <li className="proyects__proyect__icon">
          <ReactIcon style={styles} />
        </li>
      );
    case "sass":
      styles.fill = "#598bde";

      return (
        <li className="proyects__proyect__icon">
          <SassIcon style={styles} />
        </li>
      );
    case "mongo":
      styles.fill = "#01FF89";

      return (
        <li className="proyects__proyect__icon">
          <MongoIcon style={styles} />
        </li>
      );
    case "node":
      styles.fill = "#7A5FFF";

      return (
        <li className="proyects__proyect__icon">
          <NodeIcon style={styles} />
        </li>
      );

    default:
      console.log("icon error with: ", icon);
      return;
  }
}

const Proyect = (props) => {
  return (
    <li className="proyects__proyect">
      <div className="proyects__proyect__content">
        <h3 className="proyects__proyect__title">{props.title}</h3>
        <p className="proyects__proyect__description">{props.description}</p>

        <ul className="proyects__proyect__icons">
          {props.icons.map((icon) => {
            return renderIcon(icon, iconStyle);
          })}
          {/*         <li className="proyects__proyect__icon">
            <ReactIcon style={iconStyle} />
          </li>

          <li className="proyects__proyect__icon">
            <SassIcon style={iconStyle} />
          </li>
          <li className="proyects__proyect__icon">
            <NodeIcon style={iconStyle} />
          </li>
          <li className="proyects__proyect__icon">
            <MongoIcon style={iconStyle} />
          </li> */}
        </ul>
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
