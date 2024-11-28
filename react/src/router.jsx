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
import List from "./pages/video/List";
import Movie from "./pages/Movie";
import Subscription from "./pages/frontend/Subscription";
import Support from "./pages/frontend/Support";

const router = createBrowserRouter([
    {
        path:'/panel',
        element:<Authlayout/>,
        children: [
            {
                path:'/panel',
                element:<Dashboard/>,
            },
            {
                path:'/panel/user',
                element:<Users/>,
            },
            {
                path:'/panel/user/:key',
                element:<Form/>,
            },
            {
                path:'/panel/user/:id/:key',
                element:<Form/>,
            },
            // Video Upload Route Start
            {
                path:'/panel/video',
                // element:<Upload/>,
                children:[
                    {
                        path:'/panel/video/upload',
                        element:<Upload/>,
                    },
                    {
                        path:'/panel/video/list',
                        element:<List/>,
                    },
                    {
                        path:'/panel/video/:id',
                        element:<Upload/>,
                    },
                    {
                        path:'/panel/video/update/:id',
                        element:<Upload/>,
                    },
                ]
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
                path:'/movie',
                element:<Movie/>,
            },
            {
                path:'/subscription',
                element:<Subscription/>,
            },
            {
                path:'/support',
                element:<Support/>,
            },
            {
                path:'*',
                element:<NotFoundPage/>,
            },
        ]
    }

]);

export default router;