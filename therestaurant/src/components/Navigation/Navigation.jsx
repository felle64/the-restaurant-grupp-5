import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
	return (
		<nav className='navbar'>
			<div className="navbar-brand">THI RESTUARNT</div>
			<ul className='navbar-links'>
				<li className='navbar-link'>
					<Link to={"/"}>Hem</Link>
				</li>
				<li className='navbar-link'>
					<Link to={"/about"}>Om oss</Link>
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
