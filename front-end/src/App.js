import Navbar from "./components/Nav/Navbar";
import BackGround from "./components/UI/BackGround/Back";
import Maincontent from "./components/MainContent/Maincontent";
import LoginForm from "./components/LoginForm/LoginForm";
import ReactDOM from "react-dom";
import { Routes, Route , Navigate } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
import { useSelector } from "react-redux/es/exports";
import HomeNavbar from "./components/HomeNavbar/HomeNavbar";
import { Fragment, useState } from "react";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Login Form Control
  const [LoginFormState, SetLoginFormState] = useState(false);

  const _changeLoginFormState = (event) => {
    SetLoginFormState((prevState) => !prevState);
  };

  //------------------------------------------------------------

  // SignUP Form Control
  const [SignupFormState, SetSignupFormState] = useState(false);

  const _changeSignupFormState = () => {
    SetSignupFormState(!SignupFormState);
  };
  const _submitSignup = (event) => {
    event.preventDefault();
    console.log("Signup");
  };

  //---------------------------------------------------------------

  return (
    <BackGround>
      {!isAuthenticated && <Navbar Signup={_changeSignupFormState} />}
      {isAuthenticated && <HomeNavbar></HomeNavbar>}
      <Routes>
        {!isAuthenticated && (
          <Fragment>
            <Route
              path="/"
              element={<Maincontent OpenLoginForm={_changeLoginFormState} />}
            />
            <Route path="/Contact" element={<div>Contact</div>} />
            <Route path="/About" element={<div>About</div>} />
          </Fragment>
        )}
        {isAuthenticated && (
          <Fragment>
            <Route path="/home" element={<div>Home</div>} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Fragment>
        )}
      </Routes>
      {/* Login Form  */}

      {LoginFormState &&
        !isAuthenticated &&
        ReactDOM.createPortal(
          <LoginForm
            signup={_changeSignupFormState}
            close={_changeLoginFormState}
          />,
          document.getElementById("LoginForm")
        )}
      {/*  Signup Form*/}

      {SignupFormState &&
        !isAuthenticated &&
        ReactDOM.createPortal(
          <SignupForm submit={_submitSignup} close={_changeSignupFormState} />,
          document.getElementById("SignupForm")
        )}
      {/* <Field error = {true} msg = 'Lorem ipsum dolor sit amet, consectetur adip'  type ='email'  value = 'Lorem ipsum dolor sit amet, consectetur adip'>Name :</Field> */}
    </BackGround>
  );
};
export default App;
