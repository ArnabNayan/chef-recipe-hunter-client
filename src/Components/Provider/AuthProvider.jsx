import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase.config';

export const AuthContext=createContext(null)

const auth=getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

   const [user,setUser]=useState(null) 
   const [loading,setLoading]=useState(true)

   const signup=(email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
   }

   const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const googleSignIn=(provider)=>{
      setLoading(true)
      return signInWithPopup(auth,provider)
   }

   const githubSignIn=(provider)=>{
      setLoading(true)
      return signInWithPopup(auth,provider)
   }

   const logOut=()=>{
    setLoading(true)
    return signOut(auth)
   }

   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
   },[])
   return()=>{
    return unsubscribe();
   }


   })

   const authInfo={
    user,
    loading,
    signup,
    login,
    googleSignIn,
    githubSignIn,
    logOut
   }

    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>          
    );
};

export default AuthProvider;
