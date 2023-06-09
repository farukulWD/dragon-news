import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layoutes/NewsLayout";
import News from "../pages/news/News/News";
import LoginLayout from "../layoutes/LoginLayout";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Terms from "../pages/shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path:"/",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"terms",
                element:<Terms></Terms>
            }
        ]
    },
    
    {
        path:"/category",
        element:<Main></Main>,
        children:[
            {
                path:":id",
                element:<Category></Category>,
                loader:({params})=>fetch(`https://news-dragon-backend-farukulwd.vercel.app/categories/${params.id}`)

            }
        ]
    },
    {
        path:"news",
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:":id",
                element:<PrivetRoute><News></News></PrivetRoute>,
                loader:({params})=> fetch(`https://news-dragon-backend-farukulwd.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;