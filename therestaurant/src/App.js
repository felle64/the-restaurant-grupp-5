import "./App.css";
import backgroundImage from "./Images/Background.png";
import { Footer } from "./components/Footer/Footer";


function App() {
	return (
		<div className="heropage">
			<div className="heropage-wrapper">
			<div className="heropage-content">
				<h1 className="heropage-title">The Restaurant</h1>
				<p className="heropage-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl. Donec auctor, nisl eget ultricies tincidunt</p>
				<button className="heropage-button">Book a table</button>
			</div>
			<img src={backgroundImage} alt="Background" className="heropage-img" />
			</div>
			<Footer />
		</div>
	);
}

export default App;
