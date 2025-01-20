import React from 'react';
import Slider from './Slider';
import Marque from './Marque';
import { useLoaderData } from 'react-router-dom';
import Homecard from './Homecard';

const Home = () => {
    const brand = useLoaderData()
    console.log(brand)
    return (
        <div>
           <Slider></Slider> 
           <Marque></Marque>

           <div className='grid lg:grid-cols-3 mt-6'>
            {
               brand.map(brand  => <Homecard home ={brand}></Homecard>) 
            }
        </div>
        
        </div>
    );
};

export default Home;