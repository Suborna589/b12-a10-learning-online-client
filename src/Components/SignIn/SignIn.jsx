
import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {
    return (
     <div className="hero bg-base-200 min-h-screen *:">

    <div className="card  bg-gradient-to-r from-violet-200 to-pink-200 w-[400px] h-[450px] shrink-0 shadow-2xl">
              <h1 className="text-4xl font-bold text-white">Login</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label text-white text-base font-semibold  ">Email</label>
          <input type="email" className="input rounded-xl w-full h-12 border-3 border-purple-500 shadow-2xl" placeholder=" Your Email" />
          <label className="label text-white text-base font-semibold ">Password</label>
          <input type="password" className="input rounded-xl w-full h-12 border-3 border-purple-500 shadow-2xl" placeholder=" Your Password" />
          <div><a className="link link-hover text-white">Forgot password?</a></div>
         
          <button className="btn bg-gradient-to-r from-amber-500 to-pink-500 mt-4 rounded-xl w-full h-12 text-white text-base ">Login</button>
           <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link to={"auth/signUp"}>Sign Up</Link>  </p>
        </fieldset>
      </div>
    </div>
  </div>

    );
};

export default SignIn;