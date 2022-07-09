import classes from './Maincontent.module.css';
import { Fragment } from 'react';
import Button from '../UI/Button/Button';
const Maincontent = () =>{

    const HandleCustomer = (event) =>{
        event.preventDefault();
        console.log('Customer') ;


    };

    const HandleSeller = (event) =>{
        event.preventDefault();
        console.log('Seller') ;

    }

    return <div className={classes.Main}>
        <h1 className={classes.title}>Welcome To The Auction</h1>
        <h4 className={classes.loginmsg}>Logins As :</h4>
        <div className={classes.buttons}>

        <Button className = {classes.back} click = {HandleCustomer} >Customer</Button>
        <Button className = {classes.back} click = {HandleSeller}>Seller</Button>
        </div>
    </div>

}

export default Maincontent;