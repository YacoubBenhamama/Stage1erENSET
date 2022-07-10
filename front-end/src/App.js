import Navbar from "./components/Nav/Navbar";
import BackGround from "./components/UI/BackGround/Back";
import Maincontent from "./components/MainContent/Maincontent";
import LoginForm from "./components/LoginForm/LoginForm";
import  ReactDOM  from "react-dom";

import { useState } from "react";

const App = () => {
  const [LoginFormState, SetLoginFormState] = useState({target: null ,state : false});

  const _changeFormState = (event)=>{
    console.log(event.target.innerText);
    SetLoginFormState(prevState => {
      return {
        state : !prevState.state,
        target : event.target.innerText 
      }
    });
  }
  const _submitLogin = (event)=>{
    event.preventDefault();
    console.log('submit' ,LoginFormState.target);
    

    


  }

  return (
    <BackGround>
      <Navbar />
      <Maincontent OpenLoginForm = {_changeFormState} />

      {LoginFormState.state && ReactDOM.createPortal(
        <LoginForm submit = {_submitLogin}  close = {_changeFormState}/>,
        document.getElementById("CustomerForm")
      )}

      {/* <Field error = {true} msg = 'Lorem ipsum dolor sit amet, consectetur adip'  type ='email'  value = 'Lorem ipsum dolor sit amet, consectetur adip'>Name :</Field> */}
    </BackGround>
  );
};
export default App;
