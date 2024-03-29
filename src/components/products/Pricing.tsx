import React from 'react'
import Cards from '../molecules/Cards'
import { MdOutlineDone } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const Pricing = () => {
  return (
    <div
      className='flex flex-col space-y-2 w-full'
    >
      <div
        className="w-full flex flex-col space-y-2 items-center mb-10"
      >
        <span
          className={`text-md text-active font-medium tracking-wider`}
        >
          Our Pricing
        </span>
        <span
          className={`text-5xl font-bold tracking-wider`}
        >
          Pricing Plan
        </span>
      </div>


      <div
        className={`whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar w-full flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 p-2  justify-center space-x-0`}
      >
        <div
          className="inline-block h-[18rem] sm:w-full md:w-[50%] lg:w-[40%] overflow-hidden rounded-md  bg-black/90 py-4 px-6"
        >
          <Cards>
            <div
              className={`h-full w-full overflow-hidden flex flex-col space-y-2`}
            >
              <div
                className={`flex justify-end`}
              >
                <button
                  className={`rounded-full tracking-wider h-12 w-36 text-white border border-[#c44953]/90`}
                >
                  General
                </button>
              </div>

              <div
                className={`flex flex-row space-x-4`}
              >
                <span
                  className={`text-white text-3xl font-bold flex flex-row items-center`}
                >
                  <FaRupeeSign color={'white'}/>
                  12,000
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
                  <li
                    className={`flex flex-row space-x-2`}
                  >
                    <MdOutlineDone
                      color={'#c44953'}
                    />
                    <span
                      className={`text-sm text-inactive`}
                    >
                      Children FaceMakeUp
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
                      FaceMakeUp
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Cards>
        </div>
        <div
          className="inline-block h-[18rem] sm:w-full md:w-[50%] lg:w-[40%] overflow-hidden rounded-md  bg-black/90 py-4 px-6"
        >
          <Cards>
          <div
              className={`h-full w-full overflow-hidden flex flex-col space-y-2`}
            >
              <div
                className={`flex justify-end`}
              >
                <button
                  className={`rounded-full tracking-wider h-12 w-36 text-white border border-[#c44953]/90`}
                >
                  Wedding
                </button>
              </div>

              <div
                className={`flex flex-row space-x-4`}
              >
                <span
                  className={`text-white text-3xl font-bold flex flex-row items-center`}
                >
                  <FaRupeeSign color={'white'}/>
                  15,000
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
                      Curly Haircut & Colors
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
                      Color Corrections
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
                      Hair Wash
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
                      Blow Dry Hair
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
                      Foilyage
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Cards>
        </div>
      </div>
    </div>
  )
}

export default Pricing