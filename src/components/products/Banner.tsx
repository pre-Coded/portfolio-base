import React from 'react'
import Image from '../../../node_modules/next/image'
import me from '../../assets/images/me.jpg'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row space-x-2 overflow-hidden'>
      <div className='flex-1 p-2 flex items-center justify-center'>
        <div className='banner-img overflow-hidden sm:h-[20rem] md:h-[25rem] lg:h-[40rem] aspect-square'>
          <Image
            alt='bannerimg'
            src={me}
            className="object-cover h-full aspect-square"
          />
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-center space-y-2'>
          <span
            className={`text-md text-active font-medium tracking-wider`}
          >
            MakeUp Artist
          </span>
          <span
            className={`text-5xl text-active font-bold tracking-wide`}
          >
            Charmy Jain
          </span>
          <span
            className={`text-sm text-inactive tracking-wide`}
          >
            Hello, I’m Charmy Jain! I love people love to feel beautiful, which is the reason I’ve spent last 4 years engulfed in doing Make up.
          </span>
      </div>
    </div>
  )
}

export default Banner