import './navbar.css'
import { NavLink } from "react-router-dom"


export function NavigationBar () {
    return (
        <nav className="navbar">
            <div className="navbar-brand">THI RESTURANT</div>
            <div className="navbar-links">
            <NavLink to={"/menu"} className="navbar-link">Menu</NavLink >
                <NavLink to={"/booking"} className="navbar-link">Bokning</NavLink >
                <NavLink to={"/contact"} className="navbar-link">Kontakt</NavLink >

            </div>
        </nav>
    )
}