import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layout/HomeLayout/HomeLayout";

import Home from "../Pages/Home/Home";
import Courses from "../Pages/Home/Courses/Courses";
import Dashboard from "../Pages/Dashboard/Dashboard";
import NotFound from "../Pages/Errorpage/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,

    children: [
      {
        
        Component: Home,
      },

     
    ],
  },

   {
        path: "courses",
        Component: Courses,
      },

      {
        path: "dashboard",
        Component: Dashboard,
      },

  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;