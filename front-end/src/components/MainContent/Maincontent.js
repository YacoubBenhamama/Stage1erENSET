import classes from './Maincontent.module.css';
import { Fragment } from 'react';
import Button from '../UI/Button/Button';
const Maincontent = () =>{
    return <div className={classes.Main}>
        <h1 className={classes.title}>Welcome To The Auction</h1>
        <h4 className={classes.loginmsg}>Logins As :</h4>
        <div className={classes.buttons}>

        <Button className = {classes.back}>Customer</Button>
        <Button className = {classes.back}>Seller</Button>
        </div>
    </div>

}

export default Maincontent;