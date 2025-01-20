import React from 'react';

const Slider = () => {
    return (
        <div>
          <div className="carousel w-96 h-1/2">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/6YD2PhX/slider1.jpg"
      className="w-80% h-100%" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/QD28xRM/slider2.jpg"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/k5zkR2c/slider3.jpg"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/fxRXZbw/slider5.jpg"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>  
        </div>
    );
};

export default Slider;