import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";

export const Otp = () => {
    const otpNumber = 6 ; 
    const [array , setArray] = useState(new Array(otpNumber).fill("")) ; 
    const RefArray = useRef([]) ; 

    useEffect(()=>{
        RefArray.current[0]?.focus() ; 
    },[]) ; 

    const handleInput = (value , index )=>{
        if(value === ' ' || isNaN(value))return; 

        const newArray = [...array] ; 
        newArray[index] = value.slice(-1) ; 
        setArray(newArray) ; 

        if(value && RefArray.current[index+1]){
            RefArray.current[index+1]?.focus();
        }
         
    }
    const handleBackSpace = (event , index, input) =>{
        if (
          event.key === "Backspace" &&
          !input &&
          RefArray.current[index - 1]
        ) {
          RefArray.current[index - 1]?.focus();
        }
    }

    const[minute , setMinute ] = useState(0) ; 
    const [second , setSecond] = useState(5) ; 

useEffect(() => {
  if (minute === 0 && second === 0) return;

  const interval = setInterval(() => {
    setSecond((prevSecond) => {
      if (prevSecond > 0) return prevSecond - 1;

      setMinute((prevMinute) => {
        if (prevMinute > 0) {
          setSecond(59);
          return prevMinute - 1;
        }
        return 0;
      });

      return 0;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [minute, second]);


    const resendOtp = ()=>{
        setMinute(4); 
        setSecond(59) ; 
    }

  return (
    <div className="flex bg-black flex-col items-center justify-center">
      <h1 className="font-pacifico font-bold text-3xl start">DarkSphere</h1>
      <h1 className="font-bold text-3xl my-3">VERIFY NOW</h1>

      <div className="flex flex-col py-10 items-start">
        <label htmlFor="email" className="text-gray-400  justify-start pb-2">
          ENTER OTP
        </label>
        <div className="flex flex-wrap justify-center items-center">
          {array.map((input, index) => {
            return (
              <div
                className="flex flex-wrap justify-center px-0.5 items-center"
                key={index}
              >
                {index === 3 && <p className="mr-1"> - </p>}

                <input
                  className="w-8 h-8 text-center outline-red-300  border border-primary/80 rounded "
                  type="text"
                  value={array[index]}
                  ref={(Element) => (RefArray.current[index] = Element)}
                  onChange={(event) => {
                    handleInput(event.target.value, index);
                  }}
                  onKeyDown={(event) => handleBackSpace(event, index, input)}
                />
              </div>
            );
          })}
        </div>
        <div className="flex pt-3 justify-between">
          <p className="text-gray-500">
            Time Remaining -
            <span>
              {" "}
              {minute < 10 ? `0${minute} ` : minute}
              {" : "}
              {second < 10 ? `0${second} ` : second}
            </span>
          </p>
        </div>
        <button
          disabled={!(minute === 0 && second === 0)}
          className={`text-xs ${
            minute === 0 && second === 0
              ? "text-red-400 underline cursor-pointer"
              : "text-black cursor-not-allowed"
          }`}
          onClick={resendOtp}
        >
          RESEND OTP
        </button>

        <div className="border border-[#ff0000a2] w-full rounded my-5">
          <SpotlightButton />
        </div>
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
      <span className="border rounded  pointer-events-none relative z-10 mix-blend-difference">
        VERIFY NOW
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};