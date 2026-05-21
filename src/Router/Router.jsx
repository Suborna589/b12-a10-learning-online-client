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
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import AddNewCourse from "../Pages/AddNewCourse/AddNewCourse";
import UpdateCourse from "../Pages/UpdateCourse/UpdateCourse";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Loading from "../Components/Loading/Loading";
import EnrollCourse from "../Pages/EnrollCourse/EnrollCourse";
import MyCourse from "../Pages/MyCourse/MyCourse";




const router = createBrowserRouter([

    {
        path:'/', 
        element:<HomeLayout> </HomeLayout>,
        loader:()=>fetch("http://localhost:5183/popularCourse"),

       


        children:[
               { path:'',
                 element:<Home></Home>

               }, 
        ] 
    },
           
              {
      path:'courses',
      element:<AllCourses></AllCourses>,
      loader:()=> fetch('http://localhost:5183/courses'),
       hydrateFallbackElement:<Loading></Loading>,

    },  

  { 
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>

  }, 

  {
    path:'/courseDeatils/:id',  
    element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>

  },

  {
    path: 'addCourse',
    element:<PrivateRoute><AddNewCourse></AddNewCourse></PrivateRoute>
  }, 

  {
    path:'/myCourse',
    element:<PrivateRoute><MyCourse></MyCourse></PrivateRoute>,
  },
  

 
  {
    path:"/enrollCourse",
    element:<EnrollCourse></EnrollCourse>

  },
  {
    path:'/updateCourse/:id',
    loader:({params})=>fetch(`http://localhost:5183/courses/${params.id}`),
    element:<PrivateRoute><UpdateCourse></UpdateCourse></PrivateRoute>,
    hydrateFallbackElement:<Loading></Loading>,
  },

        
    

            {
                path:"/profile",
                element:<PrivateRoute>:<Profile></Profile>,</PrivateRoute>
            }, 

            {
                path:'/update-profile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
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
        element:<NotFound></NotFound>
    }
]) 

export default router;