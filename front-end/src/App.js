import Navbar from "./components/Nav/Navbar";
import BackGround from "./components/UI/BackGround/Back" ;
import Maincontent from "./components/MainContent/Maincontent";
import Field from "./components/UI/Field/Field";
 
import { ReactDOM } from "react";

const App = () => {
  return (
    <BackGround>
      <Navbar />
      <Maincontent />
      <Field error = {true} msg = 'Lorem ipsum dolor sit amet, consectetur adip'  type ='email'  value = 'Lorem ipsum dolor sit amet, consectetur adip'>Name :</Field>
    </BackGround>
  );
};
export default App;
