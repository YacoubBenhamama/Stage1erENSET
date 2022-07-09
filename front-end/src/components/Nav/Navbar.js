import classes from './Navbar.module.css'



const Navbar = (props) => {

return (
    <div className= {classes.navbar}>
        <div>
            <p>AUCTION</p>
        </div>
        <div>
            <a href="#" >Contact</a>
            <a href="#" >About</a>
            <a href="#" >Sign UP</a>
        </div>

    </div>

    )
}

export default Navbar ;