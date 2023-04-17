import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import { Contract } from "./components/Contract";

export const router = createBrowserRouter( [
    {
        path: "/",
         element: <App/>
        },
        {
            path: "/#Contract",
            element: <Contract/>
        }

])
 