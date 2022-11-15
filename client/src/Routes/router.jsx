import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import NewDuty from "../Pages/NewDuty/NewDuty";

export default createBrowserRouter([
    {
        path: '/',
        element: <App style={{backgroundColor: '#000000'}}/>,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/",
                element: <NewDuty style={{backgroundColor: '#000000'}}/>
            },
        ]
    }
])