import React from "react"; //Optional in modern react projects
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
