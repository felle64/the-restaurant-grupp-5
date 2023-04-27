import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
    const location = useLocation();
    const currentPage = location.pathname;

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${currentPage === '/' ? 'navbar-transparent' : 'navbar-colored'}`}>
            <div className="navbar-brand">EAST HARMONY</div>
            <div className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`navbar-links ${menuOpen ? "menu-open" : ""}`}>
                <li className='navbar-link'>
                    <Link to={"/"} onClick={toggleMenu}>Hem</Link>
                </li>
                <li className='navbar-link'>
                    <Link to={"/menu"} onClick={toggleMenu}>Meny</Link>
                </li>
                <li className='navbar-link'>
                    <Link to={"/contact"} onClick={toggleMenu}>Kontakt</Link>
                </li>
                <li className='navbar-link'>
                    <Link to={"/booking"} onClick={toggleMenu}>Bokning</Link>
                </li>
            </ul>
        </nav>
    );
};
