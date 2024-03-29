"use client"
import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";

const Hamburger = () => {
  const [visible, toggleVisible] = useState(false);

  const handleClick = () => {
    toggleVisible(prev => !prev);
  }
  return (
    <div
      className='flex flex-col lg:hidden'
    >
      <button
        title='hamburger'
        id='hamburger'
        onClick={handleClick}
      >
        {
          !visible ?
            <RxHamburgerMenu size={'1.5rem'}/> :
            <RxCross1 size={'1.5rem'}/>
        }
      </button>

      <ul
        className={`absolute top-full right-0 h-[60vh] w-full bg-white list-none flex-col items-center pt-8 space-y-3 ${visible ? 'flex' : 'hidden'}`}
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
            className='flex flex-row space-x-2 items-center mt-10'>
            <FaPhoneAlt color={'#c44953'} size={'2rem'} />
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

export default Hamburger