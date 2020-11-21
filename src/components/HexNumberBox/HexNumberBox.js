import React from "react";
import classes from "./HexNumberBox.module.css";

const HexNumberBox = (props) => {
  if (props.hashtag) {
    return (
      <div className={classes.HexNumberBox} key={props.index}>
        <div className={classes.HexHashTag}>{props.number}</div>
      </div>
    );
  }

  return (
    <div className={classes.HexNumberBox} key={props.index}>
      <button
        onClick={() => props.increaseHexNumber(props.position)}
        className={classes.HexButtonTop}
      >
        <i className={"fas fa-arrow-up fa-3x " + classes.HexArrowUp}></i>
      </button>
      <div className={classes.HexNumber}>{props.number}</div>
      <button
        onClick={() => props.decreaseHexNumber(props.position)}
        className={classes.HexButtonBottom}
      >
        <i className={"fas fa-arrow-down fa-3x " + classes.HexArrowDown}></i>
      </button>
    </div>
  );
};

export default HexNumberBox;
