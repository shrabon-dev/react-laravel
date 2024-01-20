import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import NotFoundPage from "./pages/NotFoundPage";
import Authlayout from "./layouts/Authlayout";
import Guestlayout from "./layouts/Guestlayout";
import Form from "./pages/Form";
import PlayVideo from "./pages/Play";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

const router = createBrowserRouter([
    {
        path:'/dashboard',
        element:<Authlayout/>,
        children: [
            {
                path:'/dashboard',
                element:<Dashboard/>,
            },
            {
                path:'/dashboard/user',
                element:<Users/>,
            },
            {
                path:'/dashboard/user/:key',
                element:<Form/>,
            },
            {
                path:'/dashboard/user/:id/:key',
                element:<Form/>,
            },
            // Video Upload Route Start
            {
                path:'/dashboard/upload',
                element:<Upload/>,
            }
        ]
    },
    {
        path:'/',
        element:<Guestlayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/signup',
                element:<Signup/>,
            },
            {
                path:'/play',
                element:<PlayVideo/>,
            },
            {
                path:'*',
                element:<NotFoundPage/>,
            },
        ]
    }

]);

export default router;