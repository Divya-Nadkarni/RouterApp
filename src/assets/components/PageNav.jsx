import { NavLink } from "react-router-dom"
import styles from "./PageNav.module.css"
function PageNav(){
    return (
        <>
        <div className={styles.nav}>
        <div><img src="https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png
" ></img></div>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </div>
        </>   
    )
}
export default PageNav;