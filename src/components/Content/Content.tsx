import React from 'react'
import Image from "next/image";

import Icon90 from '/public/Images/90-iconw.png'
import Icon95 from '/public/Images/95-icon.png'

const Content = () => {
  return (
    <div>
      {/* <div className="flex justify-center z-30 " id="Skills">
      <div className="mt-[-14px] pt-2 pb-2 px-2 bg-customGray rounded-xl shadow-[1px_1px_4px_4px_lightblue] 
                      md:p-5 md:px-16 md:mt-[-20px]
                      lg:p-5 lg:px-16 lg:mt-[-20px] 
                      2xl:p-5 2xl:px-16 2xl:mt-[-30px]">
        <h2 className="text-center font-semibold pb-3 pt-1 text-gray-50 font-Orbitron-font 
                      md:pb-6 md:pt-1 md:text-3xl
                      lg:pb-6 lg:pt-1 lg:text-3xl  
                      2xl:pb-6 2xl:pt-1 2xl:text-3xl ">Skills</h2>
        
        <div className='inline-flex pb-4 gap-2 font-semibold 
                        md:gap-10 md:inline-flex
                        2xl:gap-10 2xl:inline-flex '>

            <div className="relative gap-5">
            <Image className="w-20 ml-3 2xl:w-44" src={Icon90} alt="icon90-1" />
            <h4 className="ml-0 pt-2 mt-2 text-xs 2xl:ml-3 2xl:pt-2 2xl:mt-2 2xl:text-xl text-gray-50">Web Development</h4>
            </div>

            <div className="relative lg:ml-2 2xl:ml-3">
            <Image className="w-20 2xl:w-44" src={Icon95} alt="icon95-2" />
            <h4 className="ml-0 pt-2 mt-2 text-xs 2xl:ml-6 2xl:pt-2 2xl:mt-2 2xl:text-xl text-gray-50">UI/UX Design</h4>
            </div>

            <div className="relative ml-3">
            <Image className="w-20 2xl:w-44" src={Icon90} alt="icon90-3" />
            <h4 className="ml-0 pt-2 mt-2 text-xs 2xl:ml-6 2xl:pt-2 2xl:mt-2 2xl:text-xl text-gray-50">3D Animation</h4>
            </div>

        </div>
      </div>
    </div> */}

    {/* ---------------------------------------------------------- */}

      <div className="z-30 flex flex-col md:grid-cols-3 items-center mx-2" id="Skills">
        <div
          className="bg-customGray rounded-xl shadow-[1px_1px_4px_4px_lightblue] pt-2 pb-4 grid grid-cols-1 items-center 
                        md:p-5 md:pb-8 md:px-9 md:mt-[-20px]
                        lg:p-5 lg:pb-10 lg:px-12 lg:mt-[-20px] 
                        xl:p-5 xl:pb-12 xl:px-20 xl:mt-[-30px]"
                      >
          <h2 className="text-center font-semibold text-gray-50 font-Orbitron-font mb-4
                        md:pb-2 md:text-2xl 
                        2xl:pb-6 2xl:pt-2 2xl:text-3xl ">
            Skills
          </h2>

          <div className="grid grid-cols-3 items-center gap-4 ml-3 mr-3 font-semibold xl:gap-10">
            <div className="relative flex flex-col items-center">
              <Image className="w-20 mb-2 xl:w-44" src={Icon90} alt="Web Development Icon" />
              <h4 className="text-gray-50 text-xs text-center md:text-sm xl:text-xl">Web Development</h4>
            </div>

            <div className="relative flex flex-col items-center">
              <Image className="w-20 mb-2 xl:w-44" src={Icon95} alt="UI/UX Design Icon" />
              <h4 className="text-gray-50 text-xs text-center md:text-sm xl:text-xl">UI/UX Design</h4>
            </div>

            <div className="relative flex flex-col items-center">
              <Image className="w-20 mb-2 xl:w-44" src={Icon90} alt="3D Animation Icon" />
              <h4 className="text-gray-50 text-xs text-center md:text-sm xl:text-xl">3D Animation</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
