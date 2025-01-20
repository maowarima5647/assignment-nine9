import React from 'react';
import { NavLink } from 'react-router-dom';
const Homecard = ({ home }) => {

  const { _id, brand_name, brand_logo, description, rating, isSaleOn } = home;

  // Check if isSaleOn is true, otherwise return null
  if (!isSaleOn) {
    return null; // Don't render anything if isSaleOn is false
  }

  return (
    <div>
      <div className="card bg-base-100 w-80 mt-5 h-full shadow-xl">
        <figure>
          <img
            src={brand_logo}
            alt={`${brand_name} Logo`} 
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
          <p>{description}</p>
          <div className="flex items-center mt-2 mr-5">
            <span className="text-yellow-500 mr-2 text-left">⭐</span>
            <span className="font-bold">{rating}</span>
          </div>
          <div className="">
            <NavLink to ={`/details/${_id}`}> 
            <button 
             className="btn btn-primary">View Coupons</button>
        
            </NavLink>
           
          </div>
          <div className="card-actions justify-end">
          {

home.isSaleOn &&(
<p className='mt-4 text-center text-red-500 font-bold animate-bounce'>Sale is on!</p>
)
}
          </div>
        </div>
      </div>
      


      
    </div>
  );
};

export default Homecard;
