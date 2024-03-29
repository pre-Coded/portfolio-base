import React from 'react'
import Image from '../../../node_modules/next/image'
import me2 from '../../assets/images/me2.jpg'
import { MdOutlineDone } from "react-icons/md";

const AboutMe = () => {
  return (
    <section
      className={`flex flex-col space-y-8 md:space-y-0 md:flex-row lg:justify-between`}
    >
      <div
        className='flex-1 flex flex-col space-y-3 p-2 md:px-16'
      >
        <span
          className='text-md tracking-wider font-medium'
        > 
          MakeUp Artist
        </span>
        <span
          className={`text-4xl tracking-wider font-bold text-active`}
        >
          Charmy Jain
        </span>
        <span
          className={`text-sm tracking-wider leading-6 text-inactive`}
        >
          Hello, I'm Charmy Jain! I'm passionate about helping people embrace their inner beauty and feel confident in their own skin. Over the past four years, I have dedicated myself to the artistry of makeup, immersing myself in the transformative power of cosmetics. Through my journey, I've witnessed firsthand how makeup can enhance natural features, boost self-esteem, and empower individuals to express themselves creatively. Whether it's a subtle enhancement or a bold statement, I believe that every brushstroke holds the potential to unlock newfound confidence and radiance. As a makeup enthusiast, I'm committed to sharing my knowledge, skills, and love for beauty with others, inspiring them to discover their unique beauty and embrace it with joy.
        </span>
        <ul
          className={`list-none flex flex-col space-y-3 pt-8`}
        >
          <li
            className={`flex flex-row space-x-2`}
          >
            <MdOutlineDone 
              color={'#c44953'}
            />
            <span
              className={`text-sm text-inactive`}
            >
              Face MakeUp
            </span>
          </li>
          <li
            className={`flex flex-row space-x-2`}
          >
            <MdOutlineDone 
              color={'#c44953'}
            />
            <span
              className={`text-sm text-inactive`}
            >
              Wedding MakeUp
            </span>
          </li>
          <li
            className={`flex flex-row space-x-2`}
          >
            <MdOutlineDone 
              color={'#c44953'}
            />
            <span
              className={`text-sm text-inactive`}
            >
              Eyebrow MakeUp
            </span>
          </li>
        </ul>
      </div>
      <div
        className='flex-1 md:pl-12'
      >
        <div
          className={`overflow-hidden h-[40rem] w-full lg:w-[22rem] rounded-full border-2 border-[#c44953]/20 p-4`}
        >
          <div
            className={`overflow-hidden h-full w-full rounded-full`}
          >
            <Image
              alt="charmyjain"
              src={me2}
              className={`object-cover h-full w-full`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe