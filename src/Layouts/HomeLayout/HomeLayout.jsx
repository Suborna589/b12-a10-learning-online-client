import { Outlet } from "react-router";

import Navbar from "../../Components/Header/Navbar";
import Banner from "../../Components/Header/Banner/Banner";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Footer from "../../Components/Footer/Foooter";

const HomeLayout = () => {
  return (
    <div className=" max-w-[1800px] mx-auto min-h-screen ">

     
     
        <Navbar />
        <Banner />
       
      <footer className="max-w-[1800px] mx-auto">
        <Footer></Footer>
      </footer>

    </div>
  );
};

export default HomeLayout;