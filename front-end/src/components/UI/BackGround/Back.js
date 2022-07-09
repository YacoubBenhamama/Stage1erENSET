import classes from './Back.module.css'

const BackGround = (props) => {
    return <div className={classes.BackGround}>{props.children}</div>
}
export default BackGround ;