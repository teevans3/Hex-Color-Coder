import React from "react";
import classes from "./Background.module.css";

const Background = (props) => {
  const hexColor = props.hexColorCodeList.join("");
  return (
    <div className={classes.Background} style={{ backgroundColor: hexColor }}>
      {props.children}
    </div>
  );
};

export default Background;
