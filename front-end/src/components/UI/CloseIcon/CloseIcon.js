import classes from "./CloseIcon.module.css";
import { Fragment } from "react";

const CloseIcon = (props) => {
  return (
    <Fragment>
      <i onClick={props.close} className={`fa-solid fa-xmark ${classes.icon}`} ></i>
    </Fragment>
  );
};

export default CloseIcon;
