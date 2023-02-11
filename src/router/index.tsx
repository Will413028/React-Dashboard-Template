import { lazy } from "react"
import Home from "../pages/Home"
const About = lazy(() => import("../pages/About"))
const User = lazy(() => import("../pages/User"))

import { Navigate } from "react-router-dom"


const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    }, 
    {
        path: "/user",
        element: <User />
    }
]


export default routes