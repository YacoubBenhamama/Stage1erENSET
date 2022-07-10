import classes from "./LoginForm.module.css";
import Field from "../UI/Field/Field";
import FormCard from "../UI/Formcard/Formcard";
import Button from "../UI/Button/Button";
import CloseIcon from "../UI/CloseIcon/CloseIcon";
import { useState } from "react";
const LoginForm = (props) => {
  const [inputvalues, SetInputValues] = useState({ email: "", password: "" });

  const handleemail = (event) => {
    SetInputValues((prevState) => {
      return {
        ...prevState,
        email: event.target.value
      };
    });
  };


  const handlepwd = (event) => {
    SetInputValues((prevState) => {
      return {
        ...prevState,
        password: event.target.value
      };
    });
  };

  return (
    <form className={classes.root} onSubmit= {props.submit}>
      <FormCard>
        <CloseIcon close={props.close} />
        <Field
          type="email"
          value={inputvalues.email}
          Change={handleemail}
          error={false}
          msg=""
        >
          Email :
        </Field>
        <Field
          type="password"
          value={inputvalues.password}
          Change={handlepwd}
          error={false}
          msg=""
        >
          Password :
        </Field>
        <div className={classes.msg}>
          <p>Not Signed In ? </p>
          <a onChange={props.signup}>ClickHere</a>
        </div>
        <div className={classes.remember}>
          <input type="checkbox"></input>
          <p>Remember ME </p>
        </div>
        <Button className={classes.btn} >Login</Button>
      </FormCard>
    </form>
  );
};
export default LoginForm;
