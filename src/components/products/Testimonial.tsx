import React from 'react'
import Image from '../../../node_modules/next/image'
import client1 from '../../assets/images/client1.jpg'

const Testimonial = () => {
  return (
    <div
      className='flex flex-col md:flex-row md:space-x-2 overflow-hidden h-[100vh] bg-black/90  relative p-2'
    >
      <div className='overlay absolute h-full lg:w-[60%] opacity-40 top-0 left-0 testi-img mt-2'></div>
      <div className=' md:flex-1 p-2 flex flex-col z-0 pt-8 lg:pt-32 lg:pl-16'>
        <span
          className={`text-md text-active font-medium tracking-wider`}
        >
          Need Help?
        </span>
        <span
          className={`text-2xl font-bold tracking-wider text-white`}
        >
          Do you need help with creative make up?
        </span>
        <button
          title='contact-email'
          className={`border-none flex items-center justify-center h-24 w-56 text-white/80 relative`}
        >
          <div
            className={`absolute left-0 h-[70%] aspect-square bg-[#c44953] rounded-full`}
          ></div>
          <span className='z-[100] text-white/80'>charmyjaing@gmail.com</span>
        </button>
      </div>
      <div className='flex-1 pt-8 lg:pt-32 z-0'>
        <div
          className='bg-white flex flex-col lg:w-[80%] space-y-3 p-2 rounded-md'
        >
          <span
            className={`text-md text-active font-medium tracking-widest`}
          >
            Testimonials
          </span>
          <span
            className={`text-2xl font-bold tracking-wider text-black`}
          >
            What Clients Say?
          </span>
          <div>
            <div>
              <div
                className={`text-sm tracking-wider text-inactive font-light`}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio harum nemo reiciendis necessitatibus ducimus ullam quasi, illum dolorum sed vel cupiditate voluptas officiis, in similique consectetur suscipit obcaecati doloribus natus?
              </div>
              <div
                className={`border-t-[1px] border-[#c44953] mt-8 py-2 flex space-x-3 items-center`}
              >
                <div
                  className='object-contain overflow-hidden h-16 aspect-square rounded-full p-1 border-[1px] border-[#c44953]/20'
                >
                <Image
                  alt='client-image'
                  src={client1}
                  className='object-cover rounded-full h-full w-full border-[1px]'
                />
                </div>
                <div
                  className='flex flex-col justify-around'
                >
                  <span
                    className={`text-md text-active font-medium tracking-wider`}
                  >
                    Bhumi Dubey
                  </span>
                  <span
                    className={`text-md text-inactive font-medium tracking-wider`}
                  >
                    Customer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial