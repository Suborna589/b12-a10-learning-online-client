import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Swal from 'sweetalert2';

import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const AddNewCourse = () => {
  const {user}=use(AuthContext)

    
    const handleAddCourse = (e)=>{
        e.preventDefault() 
        const form=e.target;
       const formData = {
          
           title :form.title.value,   
           thumbnail :form.thumbnail.value,
           price :form.price.value,
           duration:form.duration.value,
           category:form.category.value,
           rating : 4.6,
           instructor:'Michael Brown',
          description : form.description.value,
          level: 'Intermediate',
          created_by:user.email,

       } 

       fetch(`http://localhost:5183/courses`,{
        method:"POST",
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(formData)
       })
       .then((res)=>res.json())
       .then(data=>{
        console.log(data)
        form.reset();
    
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
         showConfirmButton: false,
         timer: 1500
});
       }).catch(error=>{
        console.log(error)
       })
        

        console.log(formData);
    }
    return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>


          <div className="hero bg-base-200 min-h-screen">
         

    <div className="card bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400 w-[600px] h-[850px]  shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-orange-500">Add New Coruse</h1>
      <form onSubmit={handleAddCourse} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-black text-base font-semibold">Title</label>
          <input type="text" className="input w-full h-12  rounded-2xl" name='title' placeholder="Title" />
          <label className="label text-black text-base font-semibold">Image URL</label>
          <input type="url" className="input w-full h-12 rounded-2xl" name='thumbnail' placeholder="Image URL" />
          <label className="label text-black text-base font-semibold">Price</label>
          <input type="integer" className="input w-full h-12 rounded-2xl"  name='price' placeholder="Price" />
          <label className="label text-black text-base font-semibold">Duration</label>
          <input type="text" className="input w-full h-12 rounded-2xl" name='duration' placeholder="Duration" />
           <label className="block mb-2 text-base font-semibold text-black text-left">Category </label>
         <select
         name="category"
         className="w-full h-14 px-5 rounded-2xl bg-white outline-none border border-transparent focus:border-cyan-500"
          >
         <option value="">Select Category</option>
         <option value="Development">Development</option>
         <option value="Data Science">Data Science</option>
         <option value="Marketing">Marketing</option>
         <option value="Business">Business</option>
         </select>
          <label className="label text-black text-base font-semibold">Description</label>
          <textarea type="text" className="input w-full h-14" name='description' placeholder="" />
    
          <button type='submit' className="btn bg-linear-to-r from-pink-500 via-red-500 to-orange-500 mt-4 h-16 text-white text-lg rounded-2xl">Add Course</button>
        </fieldset>
      </form>
    </div>
  </div>



    </div>

    );
};

export default AddNewCourse;