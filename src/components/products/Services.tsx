"use client"

import React, { useRef, useState } from "react"
import Image from "../../../node_modules/next/image";
import Cards from "../molecules/Cards";
import me from '../../assets/images/me.jpg'
import weddingmakeup from '../../assets/images/weddingmakeup.jpg'
import facemakeup from '../../assets/images/facemakeup.jpg'
import hairstyle from '../../assets/images/hairstyle.jpg'
import eyebrowmakeup from '../../assets/images/eyebrowmakeup.jpg'
import { motion } from 'framer-motion'

interface ServicesProps {
  children?: React.ReactNode;
}

const Services: React.FC<ServicesProps> = () => {
  const [activeService, toggleActiveService] = useState<String | Number>()

  return (
    <section
      className="mt-8 w-full"
    >
      <div
        className="w-full flex flex-col space-y-2 items-center mb-10"
      >
        <span
          className={`text-md text-active font-medium tracking-wider`}
        >
          Services that I provide
        </span>
        <span
          className={`text-5xl font-bold tracking-wider`}
        >
          Our Services
        </span>
      </div>

      <div
        className="w-full flex justify-center"
      >
        <div
          className={`whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth`}
        >
          <div
            id="1"
            onPointerEnter={(e) => {
              toggleActiveService(e.currentTarget.id)
              console.log(e.currentTarget.id)
            }}
            className="inline-block h-[32rem] sm:w-full md:w-[50%] lg:w-[33%] overflow-hidden relative rounded-md"
          >
            <motion.div
              onPointerLeave={(e) => {
                toggleActiveService('-1')
              }}
              initial={{
                height: 0,
                opacity : 0,
              }}
              animate={{
                height: activeService == 1 ? '100%' : 0,
                opacity : activeService == 1 ? '100%' : 0,
              }}
              className='overlay absolute h-full w-full bottom-0 left-0 bg-black/60 flex flex-col items-center justify-center overflow-hidden'>
              <span
                className={`text-2xl text-white font-medium tracking-widest`}
              >
                Wedding MakeUp
              </span>
            </motion.div>
            <Cards>
              <div
                className={`h-full w-full rounded-md border overflow-hidden`}
              >
                <Image
                  alt="weddingmakeup"
                  src={weddingmakeup}
                  className="object-cover h-full w-full"
                />
              </div>
            </Cards>
          </div>
          <div
            id="2"
            onPointerEnter={(e) => {
              console.log(e.currentTarget.id)
              toggleActiveService(e.currentTarget.id)
            }}
            className="inline-block h-[32rem] sm:w-full md:w-[50%] lg:w-[33%] overflow-hidden relative"
          >
            <motion.div
              onPointerLeave={(e) => {
                toggleActiveService('-1')
              }}
              initial={{
                height: 0,
                opacity : 0,
              }}
              animate={{
                height: activeService == 2 ? '100%' : 0,
                opacity : activeService == 2 ? '100%' : 0,
              }}
              className='overlay absolute h-full w-full bottom-0 left-0 bg-black/60 flex flex-col items-center justify-center overflow-hidden'>
              <span
                className={`text-2xl text-white font-medium tracking-widest`}
              >
                Face MakeUp
              </span>
            </motion.div>
            <Cards>
              <div
                className={`h-full w-full rounded-md border overflow-hidden`}
              >
                <Image
                  alt="facemakeup"
                  src={facemakeup}
                  className="object-cover h-full w-full"
                />
              </div>
            </Cards>
          </div>
          <div
            id="3"
            onPointerEnter={(e) => {
              console.log(e.currentTarget.id)
              toggleActiveService(e.currentTarget.id)
            }}
            className="inline-block h-[32rem] sm:w-full md:w-[50%] lg:w-[33%] overflow-hidden relative"
          >
            <motion.div
              onPointerLeave={(e) => {
                toggleActiveService('-1')
              }}
              initial={{
                height: 0,
                opacity : 0,
              }}
              animate={{
                height: activeService == 3 ? '100%' : 0,
                opacity : activeService == 3 ? '100%' : 0,
              }}
              className='overlay absolute h-full w-full bottom-0 left-0 bg-black/60 flex flex-col items-center justify-center overflow-hidden'>
              <span
                className={`text-2xl text-white font-medium tracking-widest`}
              >
                Hair Style
              </span>
            </motion.div>
            <Cards>
              <div
                className={`h-full w-full rounded-md border overflow-hidden`}
              >
                <Image
                  alt="hairstyle"
                  src={hairstyle}
                  className="object-cover h-full w-full"
                />
              </div>
            </Cards>
          </div>
          <div
            id="4"
            onPointerEnter={(e) => {
              console.log(e.currentTarget.id)
              toggleActiveService(e.currentTarget.id)
            }}
            className="inline-block h-[32rem] sm:w-full md:w-[50%] lg:w-[33%] overflow-hidden relative"
          >
            <motion.div
              onPointerLeave={(e) => {
                toggleActiveService('-1')
              }}
              initial={{
                height: 0,
                opacity : 0,
              }}
              animate={{
                height: activeService == 4 ? '100%' : 0,
                opacity : activeService == 4 ? '100%' : 0,
              }}
              className='overlay absolute h-full w-full bottom-0 left-0 bg-black/60 flex flex-col items-center justify-center overflow-hidden'>
              <span
                className={`text-2xl text-white font-medium tracking-widest`}
              >
                Eyebrow MakeUp
              </span>
            </motion.div>
            <Cards>
              <div
                className={`h-full w-full rounded-md border overflow-hidden`}
              >
                <Image
                  alt="eyebrowmakeup"
                  src={eyebrowmakeup}
                  className="object-cover h-full w-full"
                  loading="lazy"
                />
              </div>
            </Cards>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
