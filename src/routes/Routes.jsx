import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layoutes/NewsLayout";
import News from "../pages/news/News/News";
import LoginLayout from "../layoutes/LoginLayout";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";


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
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)

            }
        ]
    },
    {
        path:"news",
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:":id",
                element:<News></News>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;