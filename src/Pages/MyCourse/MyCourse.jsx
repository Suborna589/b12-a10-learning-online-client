import React from 'react';
import { use } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Loading from '../../Components/Loading/Loading';
import Footer from '../../Components/Footer/Foooter';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { RiEditFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { MdDashboardCustomize, MdDelete } from "react-icons/md";
import userImg from '../../assets/useImg.jpeg'
import { FaBars, FaBookOpen, FaHome, FaTimes } from 'react-icons/fa';
import {motion } from 'framer-motion';


const MyCourse = () => {
    const {user}=use(AuthContext)
     const [open, setOpen] = useState(false);
    const [myCourse,setMyCourse]=useState([])
    const [loading, setLoading]= useState(true)

      const navLinks = [
        {
          name: "Dashboard ",
          path: "/dashboard",
          icon:<MdDashboardCustomize />,
          
        },
        {
          name: "Home ",
          path: "/",
          icon: <FaHome />,
        },
      
       
      
        {
          name: "All Courses",
          path: "/courses",
          icon: <FaBookOpen />,
        },
        {
          name: "My Courses",
          path: "/myCourse",
          icon: <FaBookOpen />,
        },
      ];

 useEffect(() => {
  fetch(`https://b12-a10-online-learning-server.vercel.app/my-course?email=${user.email}`,{
  


  })
    .then(res => res.json())
    .then(data => {
        console.log(data)
     setMyCourse(data);

     setLoading(false)
    });
}, [user]); 

   const handleDelete = ()=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed)
      fetch(`http://localhost:5183/courses/${course._id}`,{
        method:"DELETE",
        headers:{
            'content-type':'application/json',
        },
       
       }) 
       .then((res)=>res.json())
       .then(data=>{
        console.log(data)
        Swal.fire({
         title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
       }).catch(error=>{
        console.log(error)
       })
 
    
  });
}); 







    }

if(loading){
    return <Loading></Loading>
}
    return (
        <div className='min-h-screen w-full px-4 py-10 flex gap-2'>

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
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Learniverse</h2>
            <p className="text-gray-400 text-sm mt-1"> Learning My Course </p>
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
        <header className="h-20  bg-linear-to-r from-purple-500/70 via-indigo-500/50 to-blue-500/50 flex items-center justify-between px-6 sticky top-0 z-40">

          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl">
              <FaBars />
            </button>

            <div>
              <h2 className="text-2xl font-bold">  My Course</h2>
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






            {/*  */}
            <h1 className='text-3xl font-bold mb-8 text-center mt-6'>My  Added Course </h1>
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead className='bg-linear-to-r from-amber-500 via-orange-500 to-red-500 text-white border-2 border-l-amber-50 '>
      <tr>
        <th className=' '>
        Serial No.
        </th>
        <th className=''>Course Thumbnail</th>
        <th className=''>Course Title</th>
         <th className=' '>Duration</th>
        <th className=''>Price</th>
        <th className=''>Actions</th>
      </tr>
    </thead>
    <tbody className='bg-linear-to-r from-yellow-200 via-lime-400 to-green-600'>
      
    
     {
        myCourse.map((course,index)=> <tr key={course._id}> 
        <th> 
            {index+1}
          
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className=" h-20 w-32 rounded-xl object-cover">
                <img
                 className='object-cover'
                  src={course.thumbnail}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
         {course.title}
          
        </td>
        <td>{course.duration}</td>
        <td>${course.price}</td>
        <th className='flex gap-2 items-center' >
          <Link to={`/courseDeatils/${course._id}`} className="btn bg-linear-to-r from-pink-500 via-red-500 to-orange-500 "><span className='text-sm text-white'>View details </span></Link>
          <Link to={`/updateCourse/${course._id}`} className="btn rounded-lg bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 px-3 text-sm "><span className=" text-white flex items-center gap-1"> <RiEditFill />Update </span></Link>
          <button  onClick= { handleDelete } className="btn text-white bg-linear-to-r from-rose-500 via-pink-500 to-red-500"><span className="flex items-center items-center "><MdDelete  className='text-xl'/>Delete</span></button>
        </th>
      </tr>)
     }
    </tbody>

  </table>
</div>

        <Footer></Footer>
        </div>
        </div>
    );
};

export default MyCourse;