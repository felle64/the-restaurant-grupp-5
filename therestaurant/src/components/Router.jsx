import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import { Contact } from "./Contact";
import { Menu } from "./Menu";
import { Booking } from "./Booking";

export const router = createBrowserRouter( [
    {
        path: "/",
         element: <App/>,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/menu",
            element: <Menu />,
        },
        {
            path: "/booking",
            element: <Booking />,
        }

])
 