import classes from "./LoginForm.module.css";
import Field from "../UI/Field/Field";
import FormCard from "../UI/Formcard/Formcard";
import Button from "../UI/Button/Button";
import CloseIcon from "../UI/CloseIcon/CloseIcon";
import { useReducer, useState, Fragment } from "react";
import { AuthActions } from "../store/Authentification";
import { useDispatch  } from "react-redux/es/exports";

import {useNavigate} from 'react-router-dom'

const EmailErrorDetector = (str) => {
  let error = {
    error: false,
    msg: [],
  };

  if (!str.includes("@")) {
    error.error = true;
    error.msg.push("the Email must include @\n");
  }
  if (!str.includes(".")) {
    error.error = true;
    error.msg.push("the Email must include .");
  }
  return error;
};
const PassErrorDetector = (str) => {
  let error = {
    error: false,
    msg: [],
  };

  if (str.trim().length < 6) {
    error.error = true;
    error.msg.push("The password must be at least 6 characters long.");
  }
  let islower = true;

  var i = 0;
  var char = "";
  while (i < str.length) {
    char = str.charAt(i++);
    if (char === char.toUpperCase()) {
      islower = false;
    }
  }
  if (islower) {
    error.error = true;
    error.msg.push("The password must be at least Uppercase.");
  }

  return error;
};

const InputsReducer = (state, action) => {
  const emailerror = EmailErrorDetector(state.email.value);
  const passworderror = PassErrorDetector(state.password.value);
  if (action.type === "update") {
    if (action.target === "email") {
      return {
        ...state,
        email: {
          value: action.value,
          error: emailerror.error,
          msg: emailerror.msg,
        },
        error : state.password.error || emailerror.error
      };
    } else
      return {
        ...state,
        password: {
          value: action.value,
          error: passworderror.error,
          msg: passworderror.msg,
        },
        error : state.email.error || passworderror.error

      };
  } else return state;
};

// ----------------------------------------------------------------------------------------------
const LoginForm = (props) => {
  const [isLoading, SetisLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [inputs, SetInputValues] = useReducer(InputsReducer, {
    email: {
      value: "",
      error: false,
      msg: "",
    },
    password: {
      value: "",
      error: false,
      msg: "",
    },
    error : false
  });

  const handleemail = (event) => {
    SetInputValues({
      target: "email",
      type: "update",
      value: event.target.value,
    });
    setTimeout(() => {
      SetInputValues({
        target: "email",
        type: "update",
        value: event.target.value,
      });
    }, 500);
  };

  const handlepwd = (event) => {
    SetInputValues({
      target: "password",
      type: "update",
      value: event.target.value,
    });

    setTimeout(() => {
      SetInputValues({
        target: "password",
        type: "update",
        value: event.target.value,
      });
    }, 500);
  };



  const _submit = (event) => {
    event.preventDefault();
    console.log("Submit");
    SetisLoading((prevState) => !prevState);

    setTimeout((()=>{
      dispatch(AuthActions.SetAuthentification(true));
      navigate('/home');

    }),1000)
  };


  return (
    <form className={classes.root} onSubmit={_submit}>
      <FormCard>
        <CloseIcon close={props.close} />
        <Field
          type="email"
          value={inputs.email.value}
          Change={handleemail}
          error={inputs.email.error}
          msg={inputs.email.msg}
        >
          Email :
        </Field>
        <Field
          type="password"
          value={inputs.password.value}
          Change={handlepwd}
          error={inputs.password.error}
          msg={inputs.password.msg}

          // error={inputpasswordvalidation.error}
          // msg={inputpasswordvalidation.msg}
        >
          Password :
        </Field>
        {!isLoading && (
          <Fragment>
            <div className={classes.msg}>
              <p>Not Signed In ? </p>
              <a onClick={props.signup}>ClickHere</a>
            </div>

            <div className={classes.remember}>
              <input type="checkbox" name="remember"></input>
              <p>Remember ME </p>
            </div>
          </Fragment>
        )}

        <Button
          isLoading={isLoading}
          className={classes.btn}
          disabled={inputs.error}
        >
          Login
        </Button>
      </FormCard>
    </form>
  );
};
export default LoginForm;
