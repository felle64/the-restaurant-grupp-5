import "./App.css";
import foodImage from "./Images/Food.png";
import backgroundImage from "./Images/Background.png";
import history from "./Images/History.jpg";
import { Footer } from "./components/Footer/Footer";
import { Gdpr } from "./components/Gdpr/Gdpr";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className='heropage'>
			<div className='heropage-wrapper'>
				<div className='heropage-content'>
					<h1 className='heropage-title'>East Harmony</h1>
					<p className='heropage-text'>
						Njut av en fusion mellan det asiatiska och det svenska. Kraftfulla
						smaker satt i en perfekt balans.
					</p>
					<Link to="/booking">
					<button className='heropage-button'>Book a table</button>
					</Link>
				</div>
			</div>
			<div className='grid-container'>
				<div className='grid-content grid-menu'>
					<h2 className='grid-title'>Vår mat</h2>
					<p className='grid-text'>
						Vi erbjuder ett brett sortiment av asiatiska fusionrätter, från
						traditionella till exotiska. Vi har något för alla smaker och
						preferenser. Upptäck spännande smakkombinationer och upplev en unik
						kulinarisk resa genom Asiens olika kök, sammansmält med en modern
						twist.
					</p>
					<Link to='/menu'>
						<button className='grid-button'>Meny</button>
					</Link>
				</div>
				<div className='grid-content'>
					<img
						src={foodImage}
						alt='foodImage'
						className='grid-img'
					/>
				</div>
				<div className='grid-content'>
					<img
						src={history}
						alt='history'
						className='grid-img'
					/>
				</div>
				<div className='grid-content grid-about'>
					<h2 className='grid-title'>Vår resa</h2>
					<p className='grid-text'>
						Kolla in vår resa till där vi är idag. Från en liten restaurang i
						Asien till en av de mest populära restaurangerna i Sverige.
					</p>
					<Link to='/about'>
						<button className='grid-button'>Om oss</button>
					</Link>
				</div>
			</div>

			<Footer />
			<img
				src={backgroundImage}
				alt='Background'
				className='heropage-img'
			/>
		</div>
	);
}

export default App;
