import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion, spring } from 'framer-motion';
import { BlogCard } from './BlogCard';

export const BlogList = () => {
    const [menu , setMenu] = useState('All'); 
  return (
    <div>
      <div className=" flex flex-col justify-center items-center text-center space-y-2  ">
        <form action="relative w-full  max-w-2xl h-12 md:h-13">
          <input
            type="text"
            placeholder="Search For Blog"
            className="  outline-none border border-r sm:border-r-0  border-gray-400 w-40 sm:w-120 py-5 rounded   h-full px-3 text-gray-300"
            required
          />

          <button
            type="submit"
            className="   md:px-12 px-4 sm:px-4 py-5  text-white bg-primary/80 hover:bg-primary transition-all rounded-md   sm:rounded-l-none cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <div className=" flex flex-wrap justify-center px-4 gap-4 sm:gap-8  py-2 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`text-gray-400 ${
                item === menu && "text-white px-4 pt-0.5"
              } `}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: spring, stiffness: 500, damping: 20 }}
                  className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blogs) => (menu === "All" ? true : menu === blogs.category))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
      </div>
    </div>
  );
}
