import React from 'react'
import Image from "next/image";

import Icon90 from '/public/Images/90-iconw.png'
import Icon95 from '/public/Images/95-icon.png'

const Content = () => {
  return (
    <div className="flex justify-center " id="Skills">
      <div className="mt-[-2px] pt-2 pb-2 px-2 bg-customGray rounded-xl shadow-[1px_1px_4px_4px_lightblue] lg:p-5 lg:px-16 lg:mt-[-20px] 2xl:p-5 2xl:px-16 2xl:mt-[-30px]">
        <h2 className="text-center font-semibold pb-3 pt-1 text-gray-50 font-Orbitron-font lg:pb-6 lg:pt-1 lg:text-3xl  2xl:pb-6 2xl:pt-1 2xl:text-3xl ">Skills</h2>
        
        <div className='inline-flex pb-4 gap-2 font-semibold 2xl:gap-10 2xl:inline-flex '>
            <div className="relative gap-5">
            <Image className="w-20 ml-3 2xl:w-44" src={Icon90} alt="icon90-1" />
            <h4 className="ml-0 pt-2 mt-2 text-xs 2xl:ml-3 2xl:pt-2 2xl:mt-2 2xl:text-xl text-gray-50">Web Development</h4>
            </div>

            <div className="relative">
            <Image className="w-20 2xl:w-44" src={Icon95} alt="icon95-2" />
            <h4 className="ml-0 pt-2 mt-2 text-xs 2xl:ml-6 2xl:pt-2 2xl:mt-2 2xl:text-xl text-gray-50">UI/UX Design</h4>
            </div>

            <div className="relative ml-3">
            <Image className="w-20 2xl:w-44" src={Icon90} alt="icon90-3" />
            <h4 className="ml-0 pt-2 mt-2 text-xs 2xl:ml-6 2xl:pt-2 2xl:mt-2 2xl:text-xl text-gray-50">3D Animation</h4>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Content
