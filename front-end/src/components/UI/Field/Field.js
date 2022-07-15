import classes from "./Field.module.css";


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

      {props.error && props.msg.map(element => <div key={element.toString()} className={classes.msg}>{element}</div>)}
    </div>
  );
};
export default Field;
