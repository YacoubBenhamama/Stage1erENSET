import classes from "./Field.module.css";

import { Fragment } from "react";

const Field = (props) => {
  return (
    <Fragment>
      <label className={classes.fieldlabel} htmlFor={props.for}>
        {props.children}
      </label>
      <input
        className={classes.fieldinput}
        type={props.type}
        value={props.value}
        onChange={props.Change}
      />
      {props.error && <div className={classes.msg}>{props.msg}</div>}
    </Fragment>
  );
};
export default Field;
