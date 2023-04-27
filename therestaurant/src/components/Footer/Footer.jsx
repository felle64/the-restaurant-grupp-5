import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='footer-section find-us'>
					<h3>Hitta oss:</h3>
					<p>
						<span className='bold'>Adress:</span>
						<a
							href='https://www.google.com/maps/place/East/@59.3407965,18.0497672,14z/data=!4m10!1m2!2m1!1sstockholm+east+harmony!3m6!1s0x465f9d415f58b6f9:0xa2a5da0f079b7546!8m2!3d59.3357226!4d18.0724828!15sChZzdG9ja2hvbG0gZWFzdCBoYXJtb255WhgiFnN0b2NraG9sbSBlYXN0IGhhcm1vbnmSARRwYW5fYXNpYW5fcmVzdGF1cmFudOABAA!16s%2Fg%2F11dyl45yq'
							target='_blank'>
							THI RESTAURANT, 123 45 Stockholm
						</a>
					</p>
					<p>
						<span>Telefon:</span> 123 456 789
					</p>
					<p>
						<span>E-post:</span> info@eastharmony.se
					</p>
				</div>
				<div className='footer-section contact-info'>
					<h3>Om oss:</h3>
					<Link
						className='footer-link'
						to='./about'>
						Vår historia
					</Link>

					<Link
						className='footer-link'
						to='./contact'>
						Kontakta oss
					</Link>
					<Link
						className='footer-link'
						to='./menu'>
						Meny
					</Link>
					<Link
						to='/policy'
						className='footer-link'>
						Policy
					</Link>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>© 2021 East Harmony</p>
				<button
					className='scroll-btn'
					onClick={scrollToTop}>
					Tillbaka
				</button>
			</div>
		</footer>
	);
};
