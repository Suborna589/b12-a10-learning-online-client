import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {

  const { _id, title, thumbnail,category, rating,level, price, students} = course;

  return (

    <div className="bg-white  rounded-xl overflow-hidden shadow-xl ">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={thumbnail}
          alt={title}   />
        <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg text-red-500 text-xl hover:scale-110 transition">
          <FaHeart />
        </button>
        <span className="absolute bottom-4 left-4 bg-[#00FF00]  px-4 py-1 rounded-full text-sm font-semibold">
          {category}
        </span>
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 line-clamp-2"> {title} </h2>
         <div className="flex items-center justify-between">
             <p className="text-[#000080]/70 font-medium">{level}</p>
            <span className="flex items-center gap-2 text-yellow-500 font-bold"> <FaStar /> {rating} </span>

        </div>

        <div className="flex justify-between items-center">

          <p className="text-gray-500 font-semibold"> {students}+ Students  </p>
          <span className="text-2xl font-extrabold text-cyan-600"> ${price} </span> 
           </div>
        <Link to={`/course/${_id}`}>
          <button className="btn w-full rounded-full border-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg hover:scale-105 transition">View Details</button>
         </Link>

      </div>

    </div>
  );
};

export default CourseCard;