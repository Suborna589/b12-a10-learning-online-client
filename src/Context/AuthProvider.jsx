import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Firebase/Friebase.config';
import { useState } from 'react';





const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true);

    const createUser =(email, password) =>{ 
        setLoading(true)
     return  createUserWithEmailAndPassword(auth, email, password)
    } 

    const  signInUser = (email, password)=>{ 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
        
    }  



    useEffect(()=>{
        const unsubscribe  =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        }) 
        return () => {
            unsubscribe()
        }

    })

    const authInfo = {
        createUser,
        user,
        loading,
        signInUser,
        

    };
    return  <AuthContext value={authInfo}>
        {children}

       </AuthContext>
    
};

export default AuthProvider;