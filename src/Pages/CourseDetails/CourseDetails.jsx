import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../../Components/Header/Navbar";
import { FaStar,FaUsers,FaClock, FaLayerGroup} from "react-icons/fa";
import { motion } from "framer-motion";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5183/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className=" text-white">
        <Navbar />
        <div className="flex justify-center items-center h-[80vh]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="  text-white">
        <Navbar />
        <div className="text-center pt-40">
          <h2 className="text-3xl font-bold">Course Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className=" text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
         
          <div>

           
  <div className="relative  bg-[url('https://i.ibb.co.com/pvwPJV8t/bg-url.jpg')] bg-cover bg-center w-[1187px]  h-[500px] rounded-3xl overflow-hidden"> 
  <div className="absolute inset-0 bg-black/70"></div>
  <div className="flex relative">

    <div className="relative z-10   h-full text-white text-left pt-16 pl-9  ">  
    <span className="bg-cyan-500 px-5 py-2 rounded-full text-sm font-semibold  border-2 border-amber-600  "> {course.category} </span>

    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mt-7">
      {course.title}
    </h1> 
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-[#FF2400]/70 p-4 rounded-2xl text-center border border-slate-800">
                <FaStar className="mx-auto text-yellow-400 text-2xl mb-2" />
                <p className="font-bold">{course.rating}</p>
                <p className="text-sm text-white">Rating</p>
              </div>

              <div className="bg-[#0000FF]/70 p-4 rounded-2xl text-center border border-slate-800">
                <FaUsers className="mx-auto text-cyan-400 text-2xl mb-2" />
                <p className="font-bold">{course.students}+</p>
                <p className="text-sm text-white">Students</p>
              </div>

              <div className="bg-[#FFC000]/70 p-4 rounded-2xl text-center border border-slate-800">
                <FaClock className="mx-auto text-pink-400 text-2xl mb-2" />
                <p className="font-bold">{course.duration}</p>
                <p className="text-sm text-white">Duration</p>
              </div>

              <div className="bg-[#800080]/70 p-4 rounded-2xl text-center border border-slate-800">
                <FaLayerGroup className="mx-auto text-green-400 text-2xl mb-2" />
                <p className="font-bold">{course.level}</p>
                <p className="text-sm text-white">Level</p>
              </div>
    </div> 

        <div className="mt-6 flex items-center gap-4">
              <img
                src="https://i.ibb.co/7QpKsCX/user.png"
                alt=""
                className="w-16 h-16 rounded-full border-2 border-cyan-400"
              />

              <div>
                <h3 className="text-xl font-bold">
                  {course.instructor}
                </h3>
                <p className="text-slate-400">Course Instructor</p>
              </div>
    </div> 




   <Link to={'/courses'} className=" mt-6 relative btn inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className=" relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
 Back To Courses
</span>
</Link>


  </div>

  </div> 
   
</div>
              
      </div>
     
       
        </motion.div>
      </div>

      <div className="grid  lg:grid-cols-2">
         
            
          <div>
            <h1 className="text-black font-bold text-left ml-8 text-3xl">Description</h1>
             <p className="text-gray-500 mt-6 leading-relaxed text-lg text-left ml-8 max-w-2xl">
              {course.description}
            </p>
          </div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute   bg-cyan-500 blur-3xl opacity-20 rounded-[40px] "></div>

            <img
              src={course.thumbnail}
              alt={course.title}
              className=" rounded-[40px] w-[440px]  md:w-[600px] h-[500px] object-cover border border-slate-800 shadow-2xl "
            />

            <div className="absolute bottom-26 left-6 lg:left-10  bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 backdrop-blur-md px-30 lg:px-48 py-12 rounded-2xl border border-slate-700">
              <h2 className="text-3xl font-bold text-cyan-400">
                ${course.price}
              </h2>
              <p className="text-slate-300 text-sm pt-3">
                Full Lifetime Access
              </p>
               <div className="mt-10 ">
                <button href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-linear-to-r from-lime-500 via-green-500 to-emerald-500 group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
             <span className="relative px-8 py-3 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">Enroll Now</span>
    </span>
</button>

           </div>
            </div>
          </motion.div> 


      </div>
      
    </div>
  );
};

export default CourseDetails;