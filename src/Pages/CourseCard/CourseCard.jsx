import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2'

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const location = useLocation();

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
      navigate(`${location.state ? location.state : '/courses'}`)
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

  const { _id, title, thumbnail,category,description, price,duration} = course;

  return (

    <div className="bg-white  rounded-xl h-120 mb-5 ml-4 overflow-hidden shadow-xl hover:scale-105 transition">
      <div className="relative overflow-hidden">
        <img
          className="w-100 h-54 object-cover"
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

        <div className="flex justify-between items-center">

         <p className='text-[#ea580c] flex items-center gap-1 text-lg'> <MdAccessTimeFilled className='' />{duration}</p>
          <span className="text-2xl font-extrabold text-cyan-600"> ${price} </span> 
          
           </div>
           <div className='flex gap-5 py-4'>
        
         
          <Link to={`/courseDeatils/${_id}`} className="group h-8 select-none rounded-lg  bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset] hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 active:bg-gradient-to-r from-fuchsia-500 to-cyan-500 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]"><span className="block group-active:[transform:translate3d(0,1px,0)]">View Details</span></Link>
          <Link to={`/updateCourse/${_id}`} className="group h-8 select-none rounded-lg bg-blue-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset] hover:bg-blue-700 active:bg-blue-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]"><span className="block group-active:[transform:translate3d(0,1px,0)]">Update Course </span></Link>
          <button onClick={handleDelete} className="group h-8 select-none rounded-lg bg-red-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_#7f1d1d_inset,0_0_0_1px_#b91c1c_inset,0_0.5px_0_1.5px_#f87171_inset] hover:bg-red-700 active:bg-red-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]"><span className="block group-active:[transform:translate3d(0,1px,0)]">Delete</span></button>
           </div>

      </div>

    </div>
  );
};

export default CourseCard;