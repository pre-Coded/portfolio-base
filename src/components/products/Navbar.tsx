import React from 'react'
import Hamburger from '../molecules/Hamburger'
import Logo from '../molecules/Logo'
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
        className='h-20 w-full flex items-center justify-between px-8 lg:px-16 sticky top-0 left-0 bg-white z-[1000]'
    >
        <Logo/>
        <Hamburger/>
        <ul
          className={`list-none  flex-row space-x-8 hidden lg:flex items-center`}
        >
          <li
            className='text-md text-black font-medium tracking-widest'
          >
            Home
          </li>
          <li
            className='text-md text-black font-medium tracking-widest'
          > 
            About
          </li>
          <li
            className='text-md text-black font-medium tracking-widest'
          >
            Services
          </li>
          <li>
            <a 
              href={'tel:8320871229'}
              className='flex flex-row space-x-2 items-center'>
              <FaPhoneAlt color={'#c44953'} size={'2rem'}/>
              <div className='flex flex-col'>
                <span
                  className='text-xs text-active font-normal'
                >Need Make ?</span>
                <span
                  className='text-xl text-black font-medium tracking-wide'
                >
                  8320871229
                </span>
              </div>
            </a>
          </li>
        </ul> 
    </div>
  )
}

export default Navbar 