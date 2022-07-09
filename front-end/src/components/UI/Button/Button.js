import classes from './Button.module.css';



const Button = (props) => {
    return <button className={`${props.className} ${classes.btn}`} onClick = {props.click}>{props.children}</button>;
}
export default Button ;