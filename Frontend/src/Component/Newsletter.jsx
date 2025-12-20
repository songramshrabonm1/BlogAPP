import React from 'react'
import { motion } from "framer-motion";

export const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-2 my-32 ">
      <h1 className="text-shadow-amber-100 font-bold md:text-4xl text-2xl">
        {"    "}
        <span className="relative">
          Never
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-3 -right-2 -top-2 bottom-0 translate-y-2"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="4"
            />
          </svg>
        </span>{" "}
        Miss a Blog!
      </h1>

      <p className="text-gray-400 md:text-lg pb-8">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form action="flex  items-center justify-between w-full  max-w-2xl h-12 md:h-13">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="outline-none border border-gray-400 border-r-0 w-40 sm:w-80 py-5 rounded rounded-r-none  h-full px-3 text-gray-300"
          required
        />
        <button
          type="submit"
          className="md:px-12 px-4 sm:px-4 py-5 text-white bg-primary/80 hover:bg-primary transition-all rounded-md rounded-l-none cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
