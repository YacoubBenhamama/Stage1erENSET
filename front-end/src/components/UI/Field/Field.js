import classes from "./Field.module.css";

import { Fragment } from "react";

const Field = (props) => {
  return (
    <div className={classes.field}>
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
    </div>
  );
};
export default Field;
