import "./Footer.css";
import Logo from "../../Images/Logo.png";

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='footer-section socials'>
					<h3>THI RESTAURANT</h3>
				</div>
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
					<a
						className='footer-link'
						href='./about'>
						Vår historia
					</a>

					<a
						className='footer-link'
						href='./contact'>
						Kontakta oss
					</a>
					<a className="footer-link" href="./menu">Meny</a>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>© 2021 THI RESTAURANT</p>
			</div>
		</footer>
	);
};
