import React from 'react';

const AddNewCourse = () => {
    
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
          level: 'Intermediate'

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
       }).catch(error=>{
        console.log(error)
       })
        

        console.log(formData);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">

    <div className="card bg-base-100 w-[580px] h-[850px]  shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Add New Coruse</h1>
      <form onSubmit={handleAddCourse} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Title</label>
          <input type="text" className="input w-full h-12 rounded-2xl" name='title' placeholder="Title" />
          <label className="label">Image URL</label>
          <input type="url" className="input w-full h-12 rounded-2xl" name='thumbnail' placeholder="Image URL" />
          <label className="label">Price</label>
          <input type="text" className="input w-full h-12 rounded-2xl"  name='price' placeholder="Price" />
          <label className="label">Duration</label>
          <input type="text" className="input w-full h-12 rounded-2xl" name='duration' placeholder="Duration" />
          <label className="label">Category</label>
          <input type="text" className="input w-full h-12 rounded-2xl" name='category' placeholder="Category" />
          <label className="label">Description</label>
          <textarea type="text" className="input w-full h-14" name='description' placeholder="" />
    
          <button type='submit' className="btn btn-secondary mt-4">Add Course</button>
        </fieldset>
      </form>
    </div>
  </div>

    );
};

export default AddNewCourse;