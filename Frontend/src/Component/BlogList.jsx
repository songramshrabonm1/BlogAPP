import React, { useState } from 'react'
import { useRef } from "react";
// import { FiLock } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


import { blog_data, blogCategories } from '../assets/assets'
import { AnimatePresence, motion, spring } from 'framer-motion';
import { BlogCard } from './BlogCard';

export const BlogList = () => {
    const [menu , setMenu] = useState('All'); 
  return (
    <div className="bg-black text-white">
      <div className=" bg-black flex flex-col justify-center items-center text-center space-y-2  ">
        <form action="relative w-full  max-w-2xl h-12 md:h-13">
          <input
            type="text"
            placeholder="Search For Blog"
            className="  outline-none border border-b-0   border-gray-400 w-40 sm:w-120 py-5 rounded   h-full px-3 text-gray-300"
            required
          />

          <div className="grid  place-content-center ">
            <EncryptButton />
          </div>
        </form>
      </div>

      <div className=" flex flex-wrap justify-center px-4 gap-4 sm:gap-8  py-2 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={` ${
                item === menu ? "text-black px-4 pt-0.5 " : "text-gray-400"
              } `}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: spring, stiffness: 500, damping: 20 }}
                  className="absolute left-0 right-0 top-0 h-7  bg-[#ff627e] rounded-full z-10"
                >
                  {menu}
                </motion.div>
              )}
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={menu} initial={{y:10 , opacity:0}} animate={{y:0, opacity:1}} exit={{y:-10 , opacity:0}} transition={{duration:0.8}}>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
            {blog_data
              .filter((blogs) =>
                menu === "All" ? true : menu === blogs.category,
              )
              .map((blog) => (
                <BlogCard key={blog._id} blog={blog}></BlogCard>
              ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}



const TARGET_TEXT = "SEARCH BLOG";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-5">
        <CiSearch />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};
