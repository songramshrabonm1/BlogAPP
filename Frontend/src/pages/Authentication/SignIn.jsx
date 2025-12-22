import React, { useEffect, useRef } from 'react'
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { Link, Links } from 'react-router';
import  './authentication.css'; 
import { FaFacebook } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";




export const SignIn = () => {
  return (
    // <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
    //   <Card href="#" Icon={FiUser} />

    <div className=" h-full w-full bg-black">
      <div className="min-h-screen  py-20  flex justify-center items-start">
        <div className=" w-150 gap-4  flex flex-col justify-center ">
          <h1 className="font-pacifico font-bold text-3xl start">DarkSphere</h1>
          <h1 className="font-bold text-3xl my-1">Sign in to your account</h1>
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link to={"/signUp"} className="text-blue-500">
              Create one.
            </Link>
          </p>

          <div className="flex gap-3  justify-between">
            <Card href="#" Icon={FaFacebook} />

            <Card href="#" Icon={FaSquareGithub} />
          </div>
          <button className="flex">
            <Card href="#" Icon={FaGoogle} />
          </button>

          <div className="divider text-gray-400">OR</div>

          <label htmlFor="email" className="text-gray-400">
            Email
          </label>
          <input
            className="border border-gray-400 rounded py-3 px-2 outline-red-300"
            type="text"
            placeholder="Your.email@provider.com"
            required
          />
          <label htmlFor="email" className="text-gray-400">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="border border-gray-400 rounded py-3 px-2 outline-red-300"
            required
          />
          <Link className="text-xs text-blue-500 hover:underline">
            Forgot Password ?
          </Link>

          <button className="border py-5  border-gray-400 transition-all  rounded btn bg-primary text-white  text-xl ">
            Sign In
          </button>
          <p className="text-gray-400 text-xs">
            By signing in, you agree to our <Link className='text-blue-500'> Terms & Conditions </Link>{" "}and
            {" "}
            <Link className='text-blue-500 '>
            Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const Card = ({  Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-2 rounded border-[1px] border-gray-500 relative overflow-hidden group bg-black"
    >
      <div className=" absolute  inset-0 bg-gradient-to-r from-white  to-indigo-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-200" />


      <Icon className="absolute  z-10 -top-12 -right-12 text-9xl text-black group-hover:text-black group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-white group-hover:text-black transition-colors relative z-10 duration-300 mx-auto" />
    </a>
  );
};


