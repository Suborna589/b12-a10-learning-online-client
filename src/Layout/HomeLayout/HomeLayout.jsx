import { Outlet } from "react-router";

import Navbar from "../../Components/Header/Navbar";
import Banner from "../../Components/Header/Banner/Banner";

const HomeLayout = () => {
  return (
    <div className="min-h-screen ">

     
      <header className="">
        <Navbar />
        <Banner />
      </header>

    
      <main> 
        <Outlet></Outlet>
      
      </main>

      
      <footer className="py-10 text-center border-t border-white/10 text-gray-400">
        © 2026 LearnSphere. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomeLayout;