import classes from "./Formcard.module.css";
import Button from "../Button/Button";

const FormCard = (props) => {
  return <div className = { `${classes.Form}` }>{props.children}</div>;
};

export default FormCard;
