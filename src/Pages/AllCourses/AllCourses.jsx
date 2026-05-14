import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import allcourseImg from "../../assets/allcourseImg.avif"
import CourseCard from '../CourseCard/CourseCard';
import { Link } from 'react-router';
import { FiPlusSquare } from "react-icons/fi";

const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className=''>  
            <header className='w-max-8xl  mx-auto'>
                <Navbar></Navbar> 
            </header> 

            <main>
                <div className='mt-42 text-left ml-8 flex items-center justify-between gap-4 mb-12 '>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-normal '>All Courses </h1> 
                    <img className='w-12 h-11' src={allcourseImg} alt=""  />
                    </div>

                    <Link to={'/addCourse'}  className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]"><span className="block flex items-center gap-2  group-active:[transform:translate3d(0,1px,0)]"> <FiPlusSquare className='text-2xl' />Add New Course</span></Link>

                </div>
                <Outlet></Outlet>
               <div className=' mt-5 grid grid-cols-2  gap-2 lg:grid-cols-3'>
                 {
                 courses.map(course=><CourseCard course={course} key={course._id}></CourseCard>)
                }
               </div>
            </main>


            
        </div>
    );
};

export default AllCourses;