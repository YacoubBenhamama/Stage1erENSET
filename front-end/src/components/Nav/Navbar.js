import classes from './Navbar.module.css'
import { NavLink , useNavigate} from 'react-router-dom' ;



const Navbar = (props) => {
    const navigate = useNavigate();
    const _redirect = ()=>{
        navigate('/');
    };

return (
    <div className= {classes.navbar}>
        <div onClick={_redirect}>
            <p >AUCTION</p>
        </div>
        <div>
            <NavLink to="/Contact" >Contact</NavLink>
            <NavLink to="/About" >About</NavLink>
            <a href="#" onClick={props.Signup} >Sign UP</a>
        </div>

    </div>

    )
}

export default Navbar ;