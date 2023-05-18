import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../../Login/Login";
import Registration from "../Registration/Registration";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"registration",
                element:<Registration></Registration>
            }
        ]
    }
])

export default router;