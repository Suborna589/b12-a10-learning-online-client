import { Outlet } from "react-router";

import Navbar from "../../Components/Header/Navbar";
import Banner from "../../Components/Header/Banner/Banner";
import AllCourses from "../../Pages/AllCourses/AllCourses";

const HomeLayout = () => {
  return (
    <div className=" max-w-[1670px] mx-auto min-h-screen ">

     
     
        <Navbar />
        <Banner />
       
      <footer className="py-10 text-center border-t border-white/10 text-gray-400">
        © 2026 LearnSphere. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomeLayout;