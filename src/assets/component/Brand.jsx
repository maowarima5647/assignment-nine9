import React from 'react';
import { NavLink } from 'react-router-dom';

const Brand = ({brand}) => {
    const {_id,brand_name,brand_logo,description,rating,isSaleOn} = brand;


   
    return (


      
        <div className="card card-compact bg-base-100 w-80 shadow-xl space-x-8 ">
        <figure>
          <img className='w-22 h-16 object-cover rounded'
            src={brand_logo}
            alt="Shoes" />
        </figure>
        <div className="flex-1">
                <h2 className="font-bold text-xl my-3">{brand_name}</h2>
                <p className="text-gray-600">{description}</p>
                <div className="flex items-center mt-2 mr-5">
                  <span className="text-yellow-500 mr-2 text-left">⭐</span>
                  <span className='font-bold'>{rating}</span>
                </div>
                 </div>

          <div className="card-actions justify-end">
            <NavLink to ={`/details/${_id}`}> 
            <button 
             className="btn btn-primary">View Coupons</button>
        
            </NavLink>
           
          </div>
          {

            brand.isSaleOn &&(
              <p className='mt-4 text-center text-red-500 font-bold animate-bounce'>Sale is on!</p>
            )
          }
        </div>
      
    );
};

export default Brand;