import classes from './Maincontent.module.css';
import Button from '../UI/Button/Button';
const Maincontent = (props) =>{

  
    return <div className={classes.Main}>
        <h1 className={classes.title}>Welcome To The Auction</h1>
        <div className={classes.buttons}>
        <Button className = {classes.back} click = {props.OpenLoginForm} >Login</Button>
        </div>
    </div>

}

export default Maincontent;