import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase';


export  const Authcontext = createContext(null)
const googleprovider = new GoogleAuthProvider()


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
    const creatuser = (email,password ) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinuser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signout =() =>{
        return signOut (auth)
    }
    const signingoogle = () =>{
        return signInWithPopup(auth ,googleprovider)
    }
    onAuthStateChanged(auth,currentuser =>{
        if (currentuser){
           setUser(currentuser)
        }
        else{
           setUser(null)
        }
    })
 useEffect(() =>{
  const  unsibscribe =  onAuthStateChanged(auth, currentuser =>{
        setUser(currentuser)
    })
    return () =>{
        unsibscribe()
    }
 },[])

          const updateuserpp = (updatedata)=>{
          return updateProfile(auth.currentUser,updatedata)
}


    const authinfo = {
        user,
        creatuser,
        signinuser,
        signout,
        signingoogle,
        updateuserpp,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;