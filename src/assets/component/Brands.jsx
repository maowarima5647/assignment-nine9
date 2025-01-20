import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Brand from './Brand';
import Details from './Details';

const Brands = () => {
    const brand = useLoaderData()
   
   
    const [searchInput,setSearchInput] = useState('');

    const filteredBrands = brand.filter(
      (item) =>
        item.brand_name &&
        item.brand_name.toLowerCase().includes(searchInput.toLowerCase())
    );
    
    return (
      <div>
        <h3 className='font-bold text-center text-3xl text-center my-6'> Explore Our Brands</h3>
     
        <label className="my-6 input input-bordered flex items-center gap-2">
  <input type="text" 
  className="grow "
  value={searchInput} 
  onChange={(e) => setSearchInput(e.target.value)} 
 
   placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
       
       <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {filteredBrands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand> 
        ))}
      </div>
        
        </div>
    );
};

export default Brands;