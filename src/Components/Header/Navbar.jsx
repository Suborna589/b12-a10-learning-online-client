import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import learnLogo from "../../assets/learnLogo.png"
import { AuthContext } from '../../Context/AuthContext';
import { LuLogOut } from "react-icons/lu";
import { NavLink } from 'react-router';
import { FaUserLarge } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';
import { MdModeEdit } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa";



const Navbar = () => { 
  const {user,logOut}=use(AuthContext)
  const [theme, setTheme]=useState(localStorage.getItem('theme') || 'light');

  useEffect(()=>{
     const html = document.querySelector('html')
       html.setAttribute('data-theme', theme)
       localStorage.setItem("theme", theme)

  },[theme])
  const handleThemeToggle =(checked)=>{
    setTheme(checked ? "dark": "light")
   
  }
  const handleLogOut= ()=>{
    logOut().then(()=>{
      toast.success("LogOut Successfull")

    }).catch(error=>{
      console.log(error)


    })
    
    
  } 

  const linkStyle = ({ isActive }) =>
    isActive
      ? " font-bold border-b-2 border-linear-to-r from-gray-800 via-blue-700 to-gray-900 pb-1 mr-3"
      : " font-semibold text-white hover:[#7CFC00] mr-3";
    const links = 
    <> 
    <NavLink className={linkStyle} to={'/'}>Home</NavLink>
    <NavLink className={linkStyle} to="/courses">Courses</NavLink>
    <NavLink className={linkStyle} to={'/dashboard'}>Dashboard</NavLink>
    </>
    return (
  <div className='max-w-[1670px] mx-auto mb-3'> 
   <Toaster position="top-center" />
         <div className="navbar  relative bg-linear-to-r from-yellow-500/50 via-lime-500 to-green-500/70">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}


      </ul>
    </div>
    <a className=" text-xl flex items-center gap-2 text-[#000080] font-bold ">
       <img className='w-12 h-12 rounded-full' src={learnLogo} alt="" />
      Learniverse
     
    </a>
  </div>
  <div className=" navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1">
      {links}
    
    </ul>
  </div>
  <div className="navbar-end gap-2  ">


  
    
   

    

    


    {
      user ?   <div className="dropdown ">
      
      <div tabIndex={0} role="button" className="cursor-pointer">
        <img
          className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
          src={user.photoURL }
          alt="user"
        />
      </div> 
     
      <ul
        tabIndex={0}
        className="menu menu-sm text-black   dropdown-content bg-white rounded-box z-50 mt-3 w-56 h-56 p-2 shadow-lg"
      >
         <label onChange={(e)=> handleThemeToggle(e.target.checked)} className="toggle text-base-content mb-2 ml-24">
  <input type="checkbox"  className="" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
       <div>
         <h1 className='text-base font-bold'>{user.displayName}</h1>
        <span className='text-base text-gray-600 mb-3'>{user.email}</span>
       </div>
        <li className='text-black'>
          <Link className='text-center flex text-sm ' to="/profile"> <FaUserLarge/>Profile</Link>
        </li>

        <li className='text-black'> 
          <Link  className='text-center flex text-sm ' to="/update-profile"> <MdModeEdit></MdModeEdit>Update Profile</Link>
        </li>
        <li>
          <Link className='text-center flex text-sm ' to="/myCourse"> <FaDiscourse></FaDiscourse>My Course</Link>
        </li>

        <li>
          <button onClick={handleLogOut} className=' btn bg-linear-to-r from-lime-500 via-green-500 to-emerald-500 text-base  text-white'>LogOut <LuLogOut></LuLogOut></button>
        </li>
      </ul>

      
    </div>:    <div className='flex'> 
                      <Link to="/auth/signIn" className="btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mr-6">Login</Link>
                       <Link to={'/auth/signUp'} className="btn text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">SignUp</Link>
                    

      </div>
    }

  </div>

  
</div>  


  </div>




    );
};

export default Navbar;