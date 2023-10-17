import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import NewImage from '../Assets/NewImage.png';
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="h-full bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 p-10 flex">
      <div className="flex flex-1 flex-col pl-10 justify-center line-height-1 gap-10">
        <h2 className="text-black text-26 font-semibold animate__animated animate__fadeIn animate__delay-1s">
          Winter  New Arrival
        </h2>
        <div>
          <div className="flex items-center gap-10 animate__animated animate__fadeIn animate__delay-2s">
            <p className="text-7xl font-bold transform hover:scale-110 transition-transform">
              Shop it
            </p>
            <img
              src={hand_icon}
              alt=""
              className="w-[100px] transform hover:rotate-45 transition-transform"
            />
          </div>
          <p className="text-7xl font-bold animate__animated animate__fadeIn animate__delay-3s transition-transform transform hover:scale-105">
    Now
  </p>
  <p className="text-7xl font-bold animate__animated animate__fadeIn animate__delay-4s transition-transform transform hover:scale-105">
    Discount Price
  </p>
        </div>

       <Link to="/NewCollection"> <div className="flex justify-center  items-center bg-red-500 rounded-full mt-10 text-white w-[310px] h-[70px] animate__animated animate__fadeIn animate__delay-5s transition-transform transform hover:scale-105">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt=""  className="ml-2"/>
        </div> </Link>
      </div>

      <div className="flex flex-1 justify-center items-center animate__animated animate__fadeIn animate__delay-6s transition-transform transform hover:scale-105">
        <img src={NewImage} alt="" className="w-[400px]" />
      </div>
    </div>
  );
};

export default Hero;
