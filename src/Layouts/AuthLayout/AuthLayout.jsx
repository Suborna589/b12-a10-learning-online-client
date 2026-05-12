import React from 'react';

import Register from '../../Components/Register/Register';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
           <header >
            <Navbar className='w-11/12 mx-auto'></Navbar>
           </header> 
           <main>
            <Outlet></Outlet>
           </main>
        
            
        </div>
    );
};

export default AuthLayout;