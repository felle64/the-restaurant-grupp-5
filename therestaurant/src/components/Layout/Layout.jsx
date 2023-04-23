import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Gdpr } from "../Gdpr/Gdpr";

export const Layout = () => {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
			<Gdpr/>
			</footer>
		</>
	);
};
