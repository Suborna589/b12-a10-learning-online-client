import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { auth } from '../Firebase/Friebase.config';


const googleProvider = new GoogleAuthProvider();


const SocialSignIn = () => {
  const location = useLocation();
      const navigate = useNavigate(); 
       


    const handleGoogleSignIn = () => {

   signInWithPopup(auth,googleProvider)
   .then((result)=>{
    const user = result.user;
    console.log(user);
    toast.success("Login Successful!");
    navigate(`${location.state ? location.state : '/'}`)
   }).catch(error=>{
    console.log(error);
   })

  }
    return (
        <div>
           <ToastContainer  position="top-right"  />

          <button onClick={handleGoogleSignIn} className='flex justify-center items-center gap-2 btn w-52  ml-40'><FcGoogle className='ml-1 text-2xl text-blue-700   rounded-xl  '></FcGoogle> 
          <p className='text-amber-600'>Sign Google</p>
          </button>
            
        </div>
    );
};

export default SocialSignIn;