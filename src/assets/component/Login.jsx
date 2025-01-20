import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from './Authprovider';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
const Login = () => {
  const navigate = useNavigate()
const {signinuser ,signingoogle} = useContext(Authcontext)
  const [showpassword,setShowpassword] = useState(false)
const hadlelogin = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    signinuser(email,password)
    .then(result =>{
        console.log(result.user);
        e.target.reset();
        navigate('/')
    })
  
}

const handlegogle  =() =>{
  signingoogle()
  .then(result =>{
    console.log(result.user)
    navigate('/')
  })
}


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={hadlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showpassword ? 'text' :'password'} name='password' placeholder="password" className="input input-bordered" required />
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
                new to this website please <span className='text-blue-600'><Link to='/register'>register</Link></span>
            </p>
            <p>
              <button onClick={handlegogle } className='btn'><IoLogoGoogle /> sign up with google</button>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;