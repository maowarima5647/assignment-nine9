import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from './Authprovider';

const Navbar = () => {
  const {user,signout} = useContext(Authcontext)
  const handlesignout = () =>{
    signout()
    .then(() =>{
      console.log()
    })
  }
    const links = <>
        <li><NavLink to='/'> Home</NavLink></li>
        <li><NavLink to='login'> Login</NavLink></li>
        <li><NavLink to='register'>Register</NavLink></li>
        
        {
          user && <>
           <li><NavLink to='profile'>My Profile</NavLink></li>
          
           <li><NavLink to='brands'> brands</NavLink></li>
           </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             { links }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-purple-600">Shop<span className='text-black'>Ease</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
        { links }
          </ul>
        </div>
        <div className="navbar-end">
        

        {
          user && user?.email ? <div><img src={user?.photoURL}  alt="" />
          <p>{user?.
                      displayName} </p>
          </div>:''
        }
          {
            user ?<>
            <span>
              {
                <>
                 <span></span>
                 <a onClick={handlesignout} className="btn">sign out</a>
                </>
               
              }
            </span>
            </> : <Link to='/login'>Login</Link>
          }
        </div>
      </div>
    );
};

export default Navbar;