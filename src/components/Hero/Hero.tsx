"use client"; 

import React from 'react'
import Image from "next/image";
import ProfileImg from '/public/Images/Adobe6.png'
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css'

import { FaDownload } from "react-icons/fa";
import { LiaPhoneAltSolid } from "react-icons/lia";

const Hero = () => {

  return (
      <div id='Hero' className="bg-cover bg-center min-h-fit flex items-center justify-center
                      md:items-start md:justify-start
                      lg:items-start lg:justify-start 
                      2xl:items-start 2xl:justify-start" style={{ backgroundImage: "url('./Images/back9.jpg')" }}>

      <div className="text-center bg-opacity-50 p-5 rounded-lg 
                      md:pt-16 md:pb-0 md:p-0
                      lg:pt-16 lg:pb-16 
                      2xl:p-16">

        <div className="w-full h-50 mx-auto mt-8 mb-4 rounded-full
                        md:text-left md:inline-flex md:w-auto md:h-72 md:ml-5  
                        lg:text-left lg:inline-flex lg:w-72 lg:h-72 lg:ml-20 
                        2xl:text-left 2xl:inline-flex 2xl:w-72 2xl:h-72 2xl:ml-20 ">

          <Image src={ProfileImg} alt="Profile Image" className=' w-52 mx-auto md:w-52 md:h-52 md:ml-8 lg:w-72 lg:h-72 lg:ml-0 2xl:w-72 2xl:ml-0'/>
            <div className="mt-4 lg:absolute md:ml-5 md:mt-5 lg:ml-80 lg:mt-14 2xl:ml-80 2xl:mt-12">
                <h3 className="text-white font-medium md:pb-1 md:text-xl lg:pb-1 lg:text-2xl 2xl:pb-1 2xl:text-2xl">Hello, It's Me</h3>
                <h1 className="text-white text-lg pb-1 font-semibold md:text-2xl lg:text-4xl 2xl:pb-2 2xl:text-4xl">Yugantha Polhengoda</h1>
                <h3 className="text-white font-medium text-sm mb-4 md:text-xl lg:text-2xl 2xl:text-2xl">And I'm a 
                  <span className="ml-2" id="text"><Typewriter
                      words={['Frontend Developer...', 'Backend Developer...', 'UI/UX Designer...', '3D Artist...']}
                      loop={true}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    /></span></h3> 
                
                <div className="flex pb-4 gap-3 2xl:mt-5">
                    <a href="https://yugantha-polhengoda.github.io/Yugantha-Polhengoda-Portfolio/Images/Yugantha_TotalCV.pdf" download className="inline-flex items-center pl-3 pr-3 py-2 border border-transparent text-sm md:px-6 2xl:text-lg font-medium rounded-md shadow-sm text-zinc-800 bg-white hover:bg-gray-200 hover:text-black group">
                    <FaDownload size={18} className="phone-Icon mr-2" />
                        Resume
                    </a>

                    <a href="tel:+94767801452" className="inline-flex items-center pl-3 pr-3 py-2 border border-white text-sm md:px-6 2xl:text-lg font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:text-zinc-800 group">
                    <LiaPhoneAltSolid size={25} className="phone-Icon mr-1" />
                        Contact
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
