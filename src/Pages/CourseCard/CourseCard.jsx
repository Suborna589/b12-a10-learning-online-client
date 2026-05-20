import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { Link} from 'react-router';
import Swal from 'sweetalert2';
import { IoEye } from "react-icons/io5";

const CourseCard = ({ course }) => {


 

  const { _id, title, thumbnail,category,description, price,duration,created_by} = course;

  return (

    <div className="bg-white  rounded-xl h-120 mb-5 ml-4 overflow-hidden shadow-xl hover:scale-105 transition">
      <div className="relative overflow-hidden">
        <img
          className="w-100 h-44 object-cover"
          src={thumbnail}
          alt={title}   />
        <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg text-red-500 text-xl hover:scale-110 transition">
          <FaHeart />
        </button>
        <span className="absolute bottom-4 left-4 bg-[#00FF00]  px-4 py-1 rounded-full text-sm font-semibold">{category}</span>
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 line-clamp-2"> {title} </h2>
         <div className="flex items-center justify-between">
             <p className="text-[#000080]/50 font-medium text-left">{description.slice(0, 60)}...</p>
             
           

        </div>
        <h3 className="text-base font-bold  text-green-300">
                  {created_by}
                </h3>

        <div className="flex justify-between items-center">
         

         <p className='text-[#ea580c] flex items-center gap-1 text-lg'> <MdAccessTimeFilled className='' />{duration}</p>
          <span className="text-2xl font-extrabold text-cyan-600"> ${price} </span> 
          
           </div>
           <div className='flex gap-5 py-4 '>
        
         
     <Link
  to={`/courseDeatils/${_id}`}
  className="ml-30 btn text-white rounded-lg bg-linear-to-r from-yellow-500 via-lime-500 to-green-500"
>
  <span className="flex items-center gap-1">
    <IoEye />
    View Details
  </span>
</Link>    
          
         
           </div>

      </div>

    </div>
  );
};

export default CourseCard;