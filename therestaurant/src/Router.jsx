import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Menu } from "./components/Menu/Menu";
import { Layout } from "./components/Layout/Layout";
import { CreateBooking } from "./components/Booking/CreateBooking";

export const router = createBrowserRouter([
	{
		path: "/", // http://localhost:3000/
		element: <Layout />,
		children: [
			{
				path: "/", // http://localhost:3000/
				element: <App />,
				index: true,
			},
			{
				path: "/about", // http://localhost:3000/about
				element: <About />,
			},
			{
				path: "/contact", // http://localhost:3000/contact
				element: <Contact />,
			},
			{
				path: "/Menu", // http://localhost:3000/menu
				element: <Menu />,
			},
			{
				path: "/Booking",
				element: <CreateBooking />,
			},
		],
	},
]);
