import { createBrowserRouter } from "react-router-dom";
import About from "../Component/About";
import Home from "../Component/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
])