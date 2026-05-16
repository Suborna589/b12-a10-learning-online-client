import React from 'react';
import { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Loading from '../../Components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);


    const location = useLocation();

   
    if(loading){
        return <Loading></Loading>
        
    }
    
    

    if(user && user?.email){
         return  children; 

    } 
    
    return <Navigate  state={location.pathname} to='/auth/signIn'></Navigate>





   
           
            
        
    
};

export default PrivateRoute;