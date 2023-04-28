import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut,updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);

    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateNameProfile=(userName,photo)=>{
        setLoader(true)
        updateProfile(auth.currentUser,{
            displayName: userName, photoURL: photo
        })
    }

    const logOut=()=>{
        setLoader(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            console.log("logged user inside auth state observe", loggedUser);
            setUser(loggedUser);
            setLoader(false)
        })
        return()=>{
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        updateNameProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;