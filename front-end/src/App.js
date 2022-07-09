import Navbar from "./components/Nav/Navbar";
import BackGround from "./components/UI/BackGround/Back" ;
import Maincontent from "./components/MainContent/Maincontent";
import { ReactDOM } from "react";

const App = () => {
  return (
    <BackGround>
      <Navbar />
      <Maincontent />
    </BackGround>
  );
};
export default App;
