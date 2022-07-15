import classes from "./Button.module.css";
import { Fragment } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";

const Button = (props) => {
  return (
    <Fragment>
      {props.isLoading && (
        <div className={classes.spinner}>
          <Rings height="40" width="40" color="grey" ariaLabel="loading" />
        </div>
      )}
      {!props.isLoading && (
        <button
          className={`${props.className} ${classes.btn}`}
          onClick={props.click}
          disabled={props.disabled}
        >
          {props.children}
        </button>
      )}
    </Fragment>
  );
};
export default Button;
