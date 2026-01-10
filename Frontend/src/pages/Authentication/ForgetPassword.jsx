import React from 'react'
// import forgetPass from "../../assets/forgetPass.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Form, Link } from 'react-router';
export const ForgetPassword = () => {
  return (
    <div className="flex bg-black flex-col items-center justify-center">
      <h1 className="font-pacifico font-bold text-3xl start">DarkSphere</h1>
      <h1 className="font-bold text-3xl my-1">Forget Password</h1>

      <div className="flex flex-col py-10 items-start">
        <label htmlFor="email" className="text-gray-400  justify-start pb-2">
          New Password
        </label>
        <input
          type="password"
          placeholder="Enter New Password"
          className="border border-gray-400 rounded py-3 px-2 outline-red-300"
          required
        />
        <label
          htmlFor="email"
          className="text-gray-400 justify-start mt-5 pb-2"
        >
          Re Type Password
        </label>
        <input
          type="password"
          placeholder="Re-Type Password"
          className="border border-gray-400 rounded py-3 px-2 outline-red-300"
          required
        />
        <Link to={"/otp"} className="border w-full rounded my-5">
          <SpotlightButton />
        </Link>
      </div>
    </div>
  );
}

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
        
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span  className="border rounded rounded px-1 py-1 pointer-events-none relative z-10 mix-blend-difference">
        RESET PASSWORD
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};