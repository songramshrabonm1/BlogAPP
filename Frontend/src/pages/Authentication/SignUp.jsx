import React from 'react'
import banner from '../../assets/banner.png'
// import loginBanner from '../../assets/loginBanner.png'
// import image_ from '../../assets/image_.png'
// import imageBannerr from "../../assets/imageBannerr.png";
import imagelast from "../../assets/imagelast.png";
import image1 from '../../assets/image1.png' ; 
import image2 from '../../assets/image2.png' ; 
import image3 from '../../assets/image3.png' ; 
import image4 from '../../assets/image4.png' ; 
import image5 from '../../assets/image5.png' ; 
import imagefinalBg from "../../assets/imagefinalBg.png";
import { IoIosStar } from "react-icons/io";
import './authentication.css'
import { Link } from 'react-router'
import { scale } from 'motion';
export const SignUp = () => {
  return (
    <div className="flex flex-col-reverse  bg-black  sm:flex-row lg:flex-row   justify-center items-start pt-10 sm:pt-20 px-1  sm:pr-10">
      {/* LEFT SIDE  */}
      <div className="w-full md:w-1/2  lg:w-1/2 px-15 py-0 md:py-5 flex flex-col justify-center items-start">
        <h1 className="font-pacifico mt-5 sm:mt-1 font-bold text-3xl ">
          DarkSphere
        </h1>
        <h1 className="font_poppins  text-4xl mt-5 sm:mt-3 mb-5 font-bold w-full flex justify-start items-center">
          Create your account
        </h1>
        <p className="font_poppins text-xs text-gray-400 w-full flex justify-start items-center">
          Join DarkSphere and start sharing your ideas with the world.
        </p>

        <label className="text-gray-400 my-3" htmlFor="username">
          User Name
        </label>
        <input
          className="w-full py-2 px-2 border border-gray-400 rounded outline-red-400 "
          type="text"
          placeholder="Enter Your Email"
        />
        <label className="text-gray-400 my-3" htmlFor="email">
          Email
        </label>
        <input
          className="w-full py-2 px-2 border border-gray-400 rounded outline-red-400 "
          type="email"
          placeholder="Enter Your Email"
        />

        <label className="text-gray-400 my-3" htmlFor="password">
          Password
        </label>
        <input
          className="w-full py-2 px-2 border border-gray-400 rounded outline-red-400 "
          type="password"
          placeholder="Enter Your Password"
        />

        <label className="text-gray-400 my-3" htmlFor="password">
          Re-type Password
        </label>
        <input
          className="w-full py-2 px-2 border border-gray-400 rounded outline-red-400 "
          type="password"
          placeholder="Re-Type Your Password"
        />

        <div className="flex justify-center gap-2 items-center">
          <input type="checkbox" />
          <p className="font_poppins text-wrap text-xs text-gray-300 my-10">
            By signing up, I agree to the terms and conditions, privacy policy,
            and cookie policy
          </p>
        </div>

        <button className="btn text-center w-full py-4 bg-red-500 hover:bg-amber-700">
          SIGN UP
        </button>

        <p className="font_poppins text-wrap text-gray-300 text-xs my-5">
          Already have an account?{" "}
          <Link to={"/signIn"} className="text-blue-400 hover:underline">
            {" "}
            Sign in{" "}
          </Link>
        </p>
      </div>
      {/* END LEFT SIDE */}

      {/* RIGHT SIDE */}
      <div
        id="box"
        style={{ borderRadius: "80px 30px 30px 20px" }}
        className="sm:block md:block  md:w-1/2 lg:w-1/2  overflow-hidden   border-white  relative  "
      >
        <img
          className="block sm:hidden "
          style={{ objectFit: "cover", transition: "all ease 1s" }}
          src={imagelast}
          alt=""
        />
        <img
          style={{ objectFit: "cover", transition: "all ease 1s" }}
          className="hidden sm:block md:block  "
          src={imagefinalBg}
          alt=""
        />
        <div className=" absolute left-5 sm:left-10  bottom-5 sm:bottom-10 md:bottom-20 lg:bottom-40 ">
          <h1 className="font_poppins text-wrap text-xl sm:text-4xl  sm:mb-2 font-bold">
            A Space For
          </h1>
          <h1 className="font_poppins text-wrap text-xl sm:text-4xl font-bold">
            Idea And Inspiration
          </h1>
          <p className="hidden [@media(min-width:120px)]:block sm:block text-xs font_poppins text-[#CBD5E1] pt-1 sm:pt-5">
            A curated space for ideas, stories, and insights{" "}
          </p>
          <p className="hidden [@media(min-width:120px)]:block sm:block text-xs font_poppins text-[#CBD5E1] sm:pb-5">
            from curious minds in the digital world.{" "}
          </p>
          <div className="flex relative hidden [@media(min-width:320px)]:block sm:block">
            <div className="flex w-8.5 h-6.5 my-3 relative">
              <img
                className="rounded-full absolute left-0 top-1 bottom-0"
                src={image1}
                alt=""
              />
              <img
                className="rounded-full absolute left-5 top-1 bottom-0"
                src={image2}
                alt=""
              />
              <img
                className="rounded-full absolute left-10 top-1 bottom-0"
                src={image3}
                alt=""
              />
              <img
                className="rounded-full absolute left-15 top-1 bottom-0"
                src={image4}
                alt=""
              />
              <img
                className="rounded-full absolute left-20 top-1 bottom-0"
                src={image5}
                alt=""
              />
            </div>
            <div className="flex absolute left-30 top-5">
              <IoIosStar className="text-red-600" />
              <IoIosStar className="text-red-600" />
              <IoIosStar className="text-red-600" />
              <IoIosStar className="text-red-600" />
              <IoIosStar className="text-red-600" />
            </div>
            <p className="absolute top-10 left-30 text-wrap text-xs font_poppins">
              5.0 from over 100,000 reviews
            </p>
          </div>
        </div>
      </div>
      {/* END RIGHT SIDE */}
    </div>
  );
}
