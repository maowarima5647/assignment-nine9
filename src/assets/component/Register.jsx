import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from './Authprovider';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification } from 'firebase/auth';
import auth from '../firebase/firebase';
const Register = () => {


    const  navigate = useNavigate()
 
    const {creatuser,updateuserpp} = useContext(Authcontext)
     const [showpassword,setShowpassword] = useState(false)
     const[errormessage,setErrormessage] = useState('')
     const[success,setSuccess] = useState(false)
    const hadleregister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photo,email,password)
        setErrormessage('')
        setSuccess(false)
        if (password.length < 6){
         setErrormessage ('password should be 6 carecters')
         return
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

        if (!passwordRegex.test(password)){

          setErrormessage ('At least one uppercase ,one lowercase one number,one special carecter')
          return;
        }
        creatuser(email,password)
        .then(result =>{
            console.log(result.user)


            updateuserpp({
              displayName:name ,
              photoURL: photo})
            .then(()=>{
             
            })


            setSuccess(true)
            //send email verification
            sendEmailVerification(auth.currentUser)
            .then(() =>{})
            e.target.reset();
            navigate('/')
        })
        .catch(error =>{
          console.log(error.message);
          setErrormessage(error.message)
          setSuccess(false)
        })
    }
    const handleforget = () =>{
      
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={hadleregister} className="card-body">
          
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo url</span>
                </label>
                <input name='photo' type="text" placeholder="Photo url" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label onClick={handleforget} className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showpassword ? 'text' :'password'}
                name='password'
                 placeholder="password" 
                 className="input input-bordered"
                  required />
                <button
                onClick={() => setShowpassword(!showpassword)}
            className='btn-xs absolute right-6 top-12'>
               

                {
                  showpassword ?  <FaEye /> :<FaEyeSlash />
                }
                </button>


                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>
             Aleady have an account? please <span className='text-blue-600'><Link to='/login'>Login</Link></span>
            </p>
            {
              errormessage && <p className='text-red-600'>{errormessage}</p>
            }
            
            {
              success && <p className='text-green-600'>succesfully create user</p>
            }
          </div>
        </div>
      </div>
    );
};

export default Register;