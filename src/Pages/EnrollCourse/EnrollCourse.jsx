

import React, { useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import userImg  from  "../../assets/useImg.jpeg"
import { FaBars, FaBookOpen, FaHome, FaLayerGroup, FaPlusCircle, FaTimes, FaUserGraduate } from "react-icons/fa";
import {motion} from "framer-motion";
import { NavLink } from "react-router";

const enrolledCourses = [
    
  {
    id: 1,
    title: "Web Development Basics",
    instructor: "John Doe",
    progress: 75,
    image: "https://i.ibb.co.com/Fqff2wV3/webdevlop.jpg",
  },
  {
    id: 2,
    title: "Data Structures in C++",
    instructor: "Jane Smith",
    progress: 40,
    image: "https://i.ibb.co.com/BKcg9jyD/data-C.jpg",
  },
  {
    id: 3,
    title: "MERN Stack Project",
    instructor: "Mike Johnson",
    progress: 60,
    image: "https://i.ibb.co.com/BHVS7ZQW/mernstack.jpg",
  },
  {
    id: 4,
    title: "Python Programming",
    instructor: "Alex Brown",
    progress: 90,
    image: "https://i.ibb.co.com/gMYknNb0/python.jpg",
  },
  {
    id: 5,
    title: "Database Management",
    instructor: "Sarah Wilson",
    progress: 30,
    image: "https://i.ibb.co.com/QFq65zfJ/database.avif",
  },
  {
    id: 6,
    title: "Digital Marketing",
    instructor: "David Lee",
    progress: 50,
    image: "https://i.ibb.co.com/rKKwYBgM/digital.avif",
  },
];



  const navLinks = [
    {
      name: "Dashboard ",
      path: "/dashboard",
      
    },
    {
      name: "Home ",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "My Enrolled Courses",
      path: "/enrollCourse",
      icon: <FaUserGraduate />,
    },
    {
      name: "Add Course",
      path: "/addCourse",
      icon: <FaPlusCircle />,
    },
    {
      name: "Update Course",
      path: '/updateCourse/:id',
      icon: <FaLayerGroup />,
    },
    {
      name: "All Courses",
      path: "/courses",
      icon: <FaBookOpen/>,
    },
  ];

const EnrollCourse = () => {
    const {user} = use(AuthContext)
    const [open, setOpen]=useState()

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-linear-to-r from-lime-500 via-green-500 to-emerald-500";
    if (progress >= 60) return "bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500";
    if (progress >= 40) return "bg-linear-to-r from-red-500 via-orange-500 to-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-gray-100  flex gap-1   lg:w-[1350px]    h-[700px] ">
       
       
        <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen w-72  
          p-6 transition-all duration-300 bg-linear-to-r from-green-200/30 via-teal-400/40 to-cyan-600/30
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
         >
        <div className=" flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pl-8">Learniverse</h2>
            <p className="text-gray-400 text-sm mt-1"> Learning Dashboard </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-2xl"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="space-y-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition-all duration-300
                  
                  ${
                    isActive
                      ? "bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 hover:bg-yellow-300 text-white shadow-lg"
                      : " bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 hover:bg-teal-400 text-gray-300"
                  }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mt-14 bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-3">Upgrade Skills  </h3>

          <p className="text-sm text-gray-100 mb-5">Learn modern technologies with premium expert courses. </p>

          <button className="bg-white text-slate-900 px-5 py-2 rounded-full font-bold hover:scale-105 transition-all duration-300"> Explore More</button>
        </motion.div>
      </motion.aside>

      <div className="flex-1 flex flex-col">
        <header className="h-36   bg-linear-to-r from-purple-500/70 via-indigo-500/50 to-blue-500/50 flex items-center justify-between px-6 sticky top-0 z-40">

          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl">
              <FaBars />
            </button>

            <div className="">
              <h2 className="text-2xl font-bold"> My Enroll Course</h2>
              <p className="text-gray-500 text-sm"> Welcome  </p>
            </div>
          </div>
          <motion.div  whileHover={{ scale: 1.05 }}className="flex items-center gap-4  px-4 py-2 rounded-2xl"  >
              <div className="hidden sm:block">
               {
               user ? (
               <div className="flex items-center gap-3">
               <img
                src={user?.photoURL || userImg}
                alt="user"
               className="w-10 h-10 rounded-full object-cover"   />

                <div>
              <h4 className="font-bold">
              {
              user?.displayName || "User"}
             </h4>
             <p className="text-sm text-gray-500"> {user?.email} </p>
             </div>
              </div>
                ) : (
             <div>
            <h4 className="font-bold">UserName</h4>
           <p className="text-sm text-white"> Student  </p>
            </div>
                  )
             }
            </div>
          </motion.div>

     </header>
        
      <h1 className="text-4xl font-bold mb-2 ">
        My Enrolled Courses
      </h1>

      <p className="text-gray-500 mb-8">
        Browse all your enrolled courses
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white w-[330px] h-[440px] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold mb-2">
                {course.title}
              </h2>

              <p className="text-gray-500 mb-4">
                Instructor: {course.instructor}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                <div
                  className={`${getProgressColor(
                    course.progress
                  )} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Progress
                </span>

                <span
                  className={`font-semibold ${
                    course.progress >= 80
                      ? "text-green-600"
                      : course.progress >= 60
                      ? "text-blue-600"
                      : course.progress >= 40
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {course.progress}%
                </span>
              </div>

              <button className="w-full bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EnrollCourse;