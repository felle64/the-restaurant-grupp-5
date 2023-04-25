import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
	const location = useLocation();
	const currentPage = location.pathname;

	return (
		<nav className={`navbar ${currentPage === '/' ? 'navbar-transparent' : 'navbar-colored'}`}>
			<div className="navbar-brand">THI RESTUARNT</div>
			<ul className='navbar-links'>
				<li className='navbar-link'>
					<Link to={"/"}>Hem</Link>
				</li>
				<li className='navbar-link'>
					<Link to={"/menu"}>Meny</Link>
				</li>
				<li className='navbar-link'>
					<Link to={"/contact"}>Kontakt</Link>
				</li>
				<li className='navbar-link'>
					<Link to={"/booking"}>Bokning</Link>
				</li>
			</ul>
		</nav>
	);
};
