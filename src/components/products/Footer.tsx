import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`bg-black/90 w-full p-2 pt-16`}
    >
      <div
        className={`flex flex-col lg:flex-row w-full space-y-8 lg:space-y-0`}
      >
        <div
          className='about-us text-white flex flex-col space-y-4 w-full md:w-[30%]'
        >
          <span
            className={`text-2xl font-medium tracking-wider`}
          >
            About Us
          </span>
          <span
            className={`text-sm font-light tracking-wider text-white/60`}
          >
            Hello, I’m Charmy Jain! I love people love to feel beautiful, which is the reason I’ve spent last 4 years engulfed in doing Make up.
          </span>
          <ul
            className='list-none flex flex-row space-x-3'
          >
            <li className={`h-12 aspect-square rounded-full border border-[#c44953]/40 flex items-center justify-center`}>
              <FaInstagram size={'2rem'} color="#f2f2f2" />
            </li>
            <li className={`h-12 aspect-square rounded-full border border-[#c44953]/40 flex items-center justify-center`}>
              <FaFacebook size={'2rem'} color="#f2f2f2" />
            </li>
            <li className={`h-12 aspect-square rounded-full border border-[#c44953]/40 flex items-center justify-center`}>
              <FaTwitter size={'2rem'} color="#f2f2f2" />
            </li>
          </ul>
        </div>

        <div
          className='fill-letter flex flex-col space-y-4 w-full lg:pl-10'
        >
          <input
            title='Enter your email'
            placeholder='Enter your email or number'
            className={`border-[1px] border-white/20 rounded-md outline-none h-12 w-full md:w-[50%] lg:w-[40%] p-2 bg-transparent text-white text-sm placeholder:text-sm`}
            type="text"
          />
          <textarea
            title="Enter description"
            placeholder='Enter Your message'
            className={`border-[1px] border-white/20 rounded-md outline-none w-full md:w-[50%] lg:w-[40%] p-2 bg-transparent text-white text-sm placeholder:text-sm`}
          />
          <button
            title='Send msg'
            className='border-none outline-none h-12 w-48 rounded-full bg-[#c44953] text-white'
          >
            Send
          </button>
        </div>
      </div>
      <div
        className={`mt-16 border-t-2 border-[#c44953]/20 h-16 flex items-center text-inactive text-sm space-x-1 tracking-widest`}
      >
        <span>2024</span>
        <FaCopyright />
        <span>All rights reserved by makeupcharmy.</span>
      </div>
    </div>
  )
}

export default Footer