import classes from "./Formcard.module.css";

const FormCard = (props) => {
  return <div className = { `${classes.Form}` }>{props.children}</div>;
};

export default FormCard;
