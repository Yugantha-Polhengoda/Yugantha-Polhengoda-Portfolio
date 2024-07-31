import React from 'react'
import Image from "next/image";
import ProfileImg from '/public/Images/Adobe6.png'
import './Hero.css'

import { FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Import icons from react-icons
import { FaBriefcase } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
      <div className=" bg-cover bg-center min-h-fit flex items-center justify-center lg:items-start lg:justify-start 2xl:items-start 2xl:justify-start" style={{ backgroundImage: "url('/Images/back9.jpg')" }}>
      <div className="text-center bg-opacity-50 p-5 rounded-lg lg:pt-16 lg:pb-16 2xl:p-16">
        <div className="w-full h-50 mx-auto mt-8 mb-4 rounded-full lg:text-left lg:inline-flex lg:w-72 lg:h-72 lg:ml-20 2xl:text-left 2xl:inline-flex 2xl:w-72 2xl:h-72 2xl:ml-20 ">
          <Image src={ProfileImg} alt="Profile Image" className=' w-52 ml-9 lg:w-72 lg:ml-0 2xl:w-72 2xl:ml-0'/>
            <div className='mt-4 lg:absolute lg:ml-80 lg:mt-12 2xl:absolute 2xl:ml-80 2xl:mt-12'>
                <h3 className="text-white text- lg:pb-1 lg:text-2xl 2xl:pb-1 2xl:text-2xl">Hello, It's Me</h3>
                <h1 className="text-white text-lg pb-1 font-semibold lg:text-4xl 2xl:text-4xl">Yugantha Polhengoda</h1>
                <h3 className="text-white text-sm mb-4 lg:text-2xl 2xl:text-2xl">And I'm a <span className='ml-1' id="text">Web Developer...</span></h3> 
                
                <div className="flex gap-3 2xl:mt-5">
                    <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm 2xl:text-lg font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 group">
                    <HiOutlineBriefcase size={25} className="phone-Icon mb-1 mr-2" />
                        Hire Me
                    </button>

                    <button className="inline-flex items-center px-6 py-2 border border-white text-sm 2xl:text-lg font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:text-black group">
                    <LiaPhoneAltSolid size={25} className="phone-Icon mr-1" />
                        Contact
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
