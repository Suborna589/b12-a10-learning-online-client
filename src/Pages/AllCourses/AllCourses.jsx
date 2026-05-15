// import React from 'react';
// import Navbar from '../../Components/Header/Navbar';
// import { Outlet, useLoaderData } from 'react-router';
// import allcourseImg from "../../assets/allcourseImg.avif"
// import CourseCard from '../CourseCard/CourseCard';
// import { Link } from 'react-router';
// import { FiPlusSquare } from "react-icons/fi";

// const AllCourses = () => {
//     const courses = useLoaderData();
//     console.log(courses)
//     return (
//         <div className=''>  
//             <header className='w-max-8xl  mx-auto'>
//                 <Navbar></Navbar> 
//             </header> 

//             <main>
//                 <div className='mt-42 text-left ml-8 flex items-center justify-between gap-4 mb-12 '>
//                     <div className='flex items-center gap-2'>
//                         <h1 className='text-xl font-normal '>All Courses </h1> 
//                     <img className='w-12 h-11' src={allcourseImg} alt=""  />
//                     </div>

//                     <Link to={'/addCourse'}  className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]"><span className="block flex items-center gap-2  group-active:[transform:translate3d(0,1px,0)]"> <FiPlusSquare className='text-2xl' />Add New Course</span></Link>

//                 </div>
//                 <Outlet></Outlet>
//                <div className=' mt-5 grid grid-cols-2  gap-2 lg:grid-cols-3'>
//                  {
//                  courses.map(course=><CourseCard course={course} key={course._id}></CourseCard>)
//                 }
//                </div>
//             </main>


            
//         </div>
//     );
// };

// export default AllCourses; 




import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import { useLoaderData, Link } from "react-router";
import allcourseImg from "../../assets/allcourseImg.avif";
import CourseCard from "../CourseCard/CourseCard";
import { FiPlusSquare } from "react-icons/fi";

const AllCourses = () => {
  const courses = useLoaderData();

  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((c) => c.category === filter);
     useEffect(() => {
     setCurrentPage(1);
      }, [filter]);
     const lastIndex = currentPage * cardsPerPage;
     const firstIndex = lastIndex - cardsPerPage;
     const currentCourses = filteredCourses.slice(firstIndex, lastIndex);
     const totalPages = Math.ceil(filteredCourses.length / cardsPerPage);

     return (
    <div>
      <header className="w-max-8xl mx-auto">
        <Navbar />
      </header>
      <main>
        <div className="mt-42 text-left ml-8 flex items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-normal">All Courses</h1>
            <img className="w-12 h-11" src={allcourseImg} alt="" />
          </div>
          <Link
            to={"/addCourse"}
            className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50"
          >
            <span className="flex items-center gap-2 group-active:translate-y-[1px]">
              <FiPlusSquare className="text-2xl" />
              Add New Course
            </span>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 ml-8 mb-10">
          {["All", "Development", "Data Science", "Marketing", "Business"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-3xl border-2 border-amber-500 font-medium transition
                ${ filter === cat
                    ? "bg-linear-to-r from-pink-500 via-red-500 to-orange-500 text-black "
                    : "bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 text-white hover:bg-cyan-100"
                }`}
              >
            {cat}
              </button>
            )
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {currentCourses.map((course) => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full font-bold transition
              ${
                currentPage === i + 1
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-200 hover:bg-cyan-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllCourses;