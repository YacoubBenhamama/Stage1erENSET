import classes from "./HomeNavbar.module.css";
import {NavLink} from 'react-router-dom';

const HomeNavbar = (props) => {



    
  return (
    <div className={classes.navbar}>
      <div onClick={null}>
        <p>Home</p>
      </div>
      <div>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/About">About</NavLink>
        <a href="#" onClick={null}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default HomeNavbar;
