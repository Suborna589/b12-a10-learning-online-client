import { createBrowserRouter } from "react-router";





import Dashboard from "../Pages/Dashboard/Dashboard";
import NotFound from "../Pages/Errorpage/NotFound";
import Register from "../Components/Register/Register";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";

import SignIn from "../Components/SignIn/SignIn";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([

    {
        path:'/', 
        element:<HomeLayout> </HomeLayout>,

       


        children:[
               { path:'',
                 element:<Home></Home>

               }, 
        ] 
    },
           
              {
      path:'courses',
      element:<AllCourses></AllCourses>,
      loader:()=> fetch('http://localhost:5183/courses')

    },  

  { 
    path:'dashboard',
    element:<Dashboard></Dashboard>

  },

        
     
      
  









            {
                path:"/profile",
                element:<Profile></Profile>
            }, 

            {
                path:'/update-profile',
                element:<UpdateProfile></UpdateProfile>,
            }, 


            {
                path:"/forgot-password" ,
                element:<ForgotPassword></ForgotPassword>
            },





    { 

        path:'/auth',
        element:<AuthLayout></AuthLayout>, 
        children:[
            {
                path:"/auth/signIn",
                element:<SignIn></SignIn>,
            },
            {
                path:"/auth/signUp",
                element:<Register></Register>,
            }
        ]

    }, 


   


    {
        path:"/*",
        element:<h2>Error404</h2>
    }
]) 

export default router;