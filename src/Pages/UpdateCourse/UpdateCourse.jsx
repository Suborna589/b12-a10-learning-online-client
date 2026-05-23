import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCourse = () => {
    const course = useLoaderData();  
      const navigate = useNavigate();

  const handleUpdateCourse = (e) => {
  e.preventDefault();

  const form = e.target;

  const formData = {
    title: form.title.value,
    thumbnail: form.thumbnail.value,
    price: form.price.value,
    duration: form.duration.value,
    category: form.category.value,
    description: form.description.value,
  };

  fetch(`http://localhost:5183/courses/${course._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      Swal.fire({
        title: "Updated!",
        text: "Course updated successfully",
        icon: "success",
      });

      navigate("/courses", { replace: true });
      
    })
    .catch((error) => {
      console.log("Update error:", error);

      Swal.fire({
        title: "Error!",
        text: "Failed to update course",
        icon: "error",
      });
    });
};


    
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
             
             <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-linear-to-r from-green-200 via-teal-400 to-cyan-600 w-[580px] h-[850px]  shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-[#1e3a8a]">Update Coruse</h1>
      <form onSubmit={handleUpdateCourse} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-base font-semibold text-black">Title</label>
          <input type="text" className="input w-full h-14 rounded-2xl" defaultValue={course.title} name='title' placeholder="Title" />
          <label className="label  text-base font-semibold text-black">Image URL</label>
          <input type="url" className="input w-full h-14 rounded-2xl" defaultValue={course.thumbnail}  name='thumbnail' placeholder="Image URL" />
          <label className="label  text-base font-semibold text-black">Price</label>
          <input type="number" className="input w-full h-14  rounded-2xl" defaultValue={course.price}  name='price' placeholder="Price" />
          <label className="label  text-base font-semibold text-black">Duration</label>
          <input type="text" className="input w-full h-14 rounded-2xl" defaultValue={course.duration} name='duration' placeholder="Duration" />
         <label className="block mb-2 text-base font-semibold text-black text-left">Category </label>
         <select
         name="category"
         defaultValue={course?.category}
         className="w-full h-14 px-5 rounded-2xl bg-white outline-none border border-transparent focus:border-cyan-500"
          >
         <option value="">Select Category</option>
         <option value="Development">Development</option>
         <option value="Data Science">Data Science</option>
         <option value="Marketing">Marketing</option>
         <option value="Business">Business</option>
         </select>
        
          <label className="label  text-base font-semibold text-black">Description</label>
          <textarea type="text" className="input w-full h-14 pt-5 " name='description' defaultValue={course.description} placeholder="" />
          <button type='submit' className="btn bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 mt-4 text-white text-lg h-13 rounded-2xl">Update Course</button>
        </fieldset>
      </form>
    </div>
  </div>
      </div>
    );
};

export default UpdateCourse;