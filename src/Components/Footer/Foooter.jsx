import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import learnLogo from "../../assets/learnLogo.png"
const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 text-white mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 py-14">  
        <div className="grid md:grid-cols-4 gap-10">        
          <div className="">
           <div className="flex items-center gap-2 ml-16 lg:ml-4" >
             <img className='w-12 h-12 rounded-full' src={learnLogo} alt="" srcset="" />
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Learniverse
            </h2>
           </div>

            <p className="text-white leading-relaxed md:text-left ml-4">
              Learn modern skills from expert instructors. Explore development,
              data science, business, and marketing courses with real-world
              projects.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-white">
              <li className="hover:text-cyan-400 duration-300 cursor-pointer">
                Home
              </li>

              <li className="hover:text-cyan-400 duration-300 cursor-pointer">
                Courses
              </li>

              <li className="hover:text-cyan-400 duration-300 cursor-pointer">
                Instructors
              </li>

              <li className="hover:text-cyan-400 duration-300 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Categories</h3>

            <ul className="space-y-3 text-white">
              <li>Development</li>
              <li>Data Science</li>
              <li>Business</li>
              <li>Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Follow Us</h3>

            <div className="flex gap-4">
              
              <div className="w-11 h-11 rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 duration-300 cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-11 h-11 rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 duration-300 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-11 h-11 rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 duration-300 cursor-pointer">
                <FaLinkedinIn />
              </div>

            </div>
          </div>
        </div>
        <div className="border-t border-amber-50 mt-12 pt-6 text-center text-white">
          <p>
            © 2026  Learniverse. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;