import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import allcourseImg from "../../assets/allcourseImg.avif"
import CourseCard from '../CourseCard/CourseCard';

const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className=''>  
            <header className='w-max-8xl  mx-auto'>
                <Navbar></Navbar> 
            </header> 

            <main>
                <div className='mt-42 text-left ml-8 flex items-center gap-3 '>
                    <h1 className='text-xl font-normal '>All Courses </h1> 
                    <img className='w-12 h-11' src={allcourseImg} alt=""  />
                </div>
                <Outlet></Outlet>
               <div className=' mt-5 grid grid-cols-2  gap-4 lg:grid-cols-3'>
                 {
                 courses.map(course=><CourseCard course={course} key={course._id}></CourseCard>)
                }
               </div>
            </main>


            
        </div>
    );
};

export default AllCourses;