import React from 'react';
import SocialSignIn from '../../SocialSignIn/GoogleSignIn';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const Register = () => {
  const{ createUser,setUser} =use(AuthContext);

  const  handleRegister = (e)=>{
    e.preventDefault()
    const form= e.target;
    const name= form.name.value;
    const photo= form.photo.value;
    const email= form.email.value;
    const password= form.password.value;
    console.log(form,name,email,password,photo);

    createUser(email,password)
    .then(result=>{
      const user = result.user;
      setUser(user)
    }).catch(error=>{
      const errorMessage = error.message;
      alert(errorMessage);

    })

  }


   

   
    return (
       <div className="hero bg-base-200 min-h-screen">
  
    <div className="card bg-base-100 w-[550px]  h-[740px] shrink-0 shadow-2xl rounded-3xl">
        <h1 className="text-5xl font-bold text-blue-700">Sign Up</h1>
      <form onSubmit={handleRegister} className="card-body">
    
        <fieldset className="fieldset">
          <label className="label text-black text-base">Name</label>
          <input type="text" className="input rounded-full  w-full h-16 bg-sky-50 border-blue-400/30 shadow-xl " name='name' placeholder="Your Name" />
          <label className="label text-black text-base">Photo URL</label>
          <input type="photo" className="input rounded-full  w-full h-16 bg-sky-50 border-blue-400/30 shadow-xl " name='photo' placeholder="Photo url" />
          <label className="label text-black text-base">Email</label>
          <input type="email" className="input rounded-full  w-full h-16 bg-sky-50 border-blue-400/30 shadow-xl  " name='email' placeholder="Email" />
          <label className="label text-black text-base">Password</label>
          <input type="password" className="input rounded-full   w-full h-16 bg-sky-50 border-blue-400/30 shadow-xl " name='password'  placeholder="Password" />
          <div><a className="link link-hover ">Forgot password?</a></div>
          <button type='submit' className="btn btn-success text-white text-lg mt-4  w-full h-14 rounded-full  border-0 shadow-xl ">Sign Up</button>

          
        </fieldset>

        <SocialSignIn></SocialSignIn>

        
      </form>
    </div>
  </div>

    );
};

export default Register;