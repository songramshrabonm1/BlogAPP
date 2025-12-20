import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'
import  penAndPaper  from "../../src/assets/penAndPaper.png";


export const Navbar = () => {
    const navigate = useNavigate() ;
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ">
      <div>
        <img
          onClick={() => navigate("/")}
          src={penAndPaper}
          alt="logo "
          className="w-10 sm:w-14 cursor-pointer"
        />
        {/* <p className='text-sm font-bold text-primary'>MidNight_Throught</p> */}
      </div>

      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm  cursor-pointer bg-primary text-white px-10 py-2.5"
      >
        Login
        <img src={assets.arrow} className="w-3" alt="" />
      </button>
    </div>
  );
}
