import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};
