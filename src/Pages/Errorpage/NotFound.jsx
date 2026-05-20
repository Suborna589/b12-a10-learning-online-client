import React from 'react';
import { Link } from "react-router";



const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <img  src="https://i.ibb.co.com/q3z6jdY1/Error-Img.jpg"  alt="not found"   className="w-160 mt-10" />    
      <h2 className="text-3xl font-bold mt-4 text-blue-600">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link to="/"className="mt-6 bg-linear-to-r from-yellow-500 via-lime-500 to-green-500 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition" >  Go Back Home </Link>
   
    </div>
  );
}; 



export default NotFound;