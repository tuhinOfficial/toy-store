import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../../Login/Login";
import Registration from "../Registration/Registration";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import Blog from "../Pages/Blog/Blog";


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
            },
            {
                path:"alltoys",
                element:<AllToys></AllToys>,
            },
            {
                path:"addtoys",
                element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path:"mytoys",
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:"update/:id",
                element:<UpdateToys></UpdateToys>,
                loader : ({params})=> fetch(`https://toy-store-sever.vercel.app/alltoys/mytoys/${params.id}`),
                
            },
            {
                path: "blog",
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;