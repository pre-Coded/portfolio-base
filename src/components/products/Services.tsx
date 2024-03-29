import React, { useRef } from "react"
import Image from "../../../node_modules/next/image";
import Cards from "../molecules/Cards";
import me from '../../assets/images/me.jpg'
import weddingmakeup from '../../assets/images/weddingmakeup.jpg'
import facemakeup from '../../assets/images/facemakeup.jpg'
import hairstyle from '../../assets/images/hairstyle.jpg'
import eyebrowmakeup from '../../assets/images/eyebrowmakeup.jpg'

interface ServicesProps {
  children?: React.ReactNode;
}

const Services: React.FC<ServicesProps> = () => {
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
            className="inline-block h-[32rem] sm:w-full md:w-[50%] lg:w-[33%] overflow-hidden "
          >
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
            className="inline-block h-[32rem] sm:w-full md:w-[50%] lg:w-[33%] overflow-hidden"
          >
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
            className="inline-block h-[32rem] sm:w-full md:w-[50%] lg:w-[33%] overflow-hidden"
          >
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
            className="inline-block h-[32rem] sm:w-full md:w-[50%] lg:w-[33%] overflow-hidden"
          >
            <Cards>
              <div
                className={`h-full w-full rounded-md border overflow-hidden`}
              >
                <Image
                  alt="eyebrowmakeup"
                  src={eyebrowmakeup}
                  className="object-cover h-full w-full"
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
