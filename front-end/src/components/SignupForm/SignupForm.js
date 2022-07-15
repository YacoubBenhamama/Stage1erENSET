import classes from "./SignupForm.module.css";
import FormCard from "../UI/Formcard/Formcard";
import CloseIcon from "../UI/CloseIcon/CloseIcon";
import Field from "../UI/Field/Field";
import { useState } from "react";
import Button from "../UI/Button/Button";



const SignupForm = (props) => {
 

  
  const [inputvalues, SetInputValues] = useState({
    FullName: "",
    email: "",
    password: "",
    date: "",
    ClientCat: null,
  });

  const handleFullName = (event) => {
    SetInputValues(prevState => {
      return {
        ...prevState ,
        FullName : event.target.value
      }
    })
  }
  const handleEmail = (event) => {
    SetInputValues(prevState => {
      return {
        ...prevState ,
        email : event.target.value
      }
    })
  }
  const handlePassword = (event) => {
    SetInputValues(prevState => {
      return {
        ...prevState ,
        password : event.target.value
      }
    })
  }
  const handleDate = (event) => {
    SetInputValues(prevState => {
      return {
        ...prevState ,
        date : event.target.value
      }
    })
  }

  return (
    <form className={classes.root} onSubmit ={props.submit}>
      <FormCard>
        <CloseIcon close={props.close} />
        <Field
          type="text"
          value={inputvalues.FullName}
          Change={handleFullName}
          error={false}
          msg=""
        >
          Full Name :
        </Field>
        <Field
          type="email"
          value={inputvalues.email}
          Change={handleEmail}
          error={false}
          msg=""
        >
          Email :
        </Field>
        <Field
          type="password"
          value={inputvalues.password}
          Change={handlePassword}
          error={false}
          msg=""
        >
          Password :
        </Field>
        <Field
          type="date"
          value={inputvalues.date}
          Change={handleDate}
          error={false}
          msg=""
        >
          Date of Birth :
        </Field>
        <Button className={classes.btn} >Sign Up </Button>

      </FormCard>
    </form>
  );
};
export default SignupForm;
