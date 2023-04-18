import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import { Contact } from "./components/Contract";
import { Menu } from "./components/Menu";
import { Booking } from "./components/Booking";

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
 