import React from 'react'

export const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-2 my-32 ">
      <h1 className="text-shadow-amber-100 font-bold md:text-4xl text-2xl">Never Miss a Blog!</h1>
      <p className='text-gray-400 md:text-lg pb-8'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
      <form action="flex  items-center justify-between w-full  max-w-2xl h-12 md:h-13">
        <input type="text" placeholder='Enter Your Email' className='outline-none border border-gray-400 border-r-0 w-40 sm:w-80 py-5 rounded rounded-r-none  h-full px-3 text-gray-300' required/>
        <button type='submit' className='md:px-12 px-4 sm:px-4 py-5 text-white bg-primary/80 hover:bg-primary transition-all rounded-md rounded-l-none cursor-pointer'>Subscribe</button>
      </form>
    </div>
  );
}
