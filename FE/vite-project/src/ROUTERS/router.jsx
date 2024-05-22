import AdminLayout from "../layout/AdminLayout/AdminLayout";
import MainLayout from "../layout/MainLayout/MainLayout";
import Add from "../pages/AdminPages/Add";
import AdminPanel from "../pages/AdminPages/AdminPanel";
import About from "../pages/MainPages/About";
import Basket from "../pages/MainPages/Basket";
import Contact from "../pages/MainPages/Contact";
import Detail from "../pages/MainPages/Detail";
import Home from "../pages/MainPages/Home";
import WishList from "../pages/MainPages/WishList";
import {createBrowserRouter,} from "react-router-dom";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            },
            {
                path:"basket",
                element:<Basket></Basket>
            },
            {
                path:"wishlist",
                element:<WishList></WishList>
            },
            {
                path:"detail",
                element:<Detail></Detail>
            },
        ]
    },
    {
            path:"/adminpanel",
            element:<AdminLayout></AdminLayout>,
            children:[
                {
                    index:true,
                    element:<AdminPanel></AdminPanel>
                },
                {
                    path:"/adminpanel/add",
                    element:<Add></Add>
                }
            ]
    }
])