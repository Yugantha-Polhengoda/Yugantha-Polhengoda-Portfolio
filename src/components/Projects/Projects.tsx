"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import "./Projects.css"

import Campaign from '/public/Images/Campaign.png';
import UI2 from '/public/Images/UI2.jpg';
import MobileUI from '/public/Images/Mobile-UI.jpg';
import WebSlideshow from '/public/Images/WebSlideshow.gif';
import UISlideshow from '/public/Images/UISlideshow.gif';
import Slideshow3D from '/public/Images/3DSlideshow.gif';

const Projects = () => {
  return (
    <div className="pt-30 pb-20">
      <div className="text-center 2xl:text-left">
        <h4 className="Projects-h4 text-custom-xs mx-auto z-10 text-white bg-[rgba(25,17,51,0.5)] border border-[rgba(248,246,254,0.2)] rounded-full mb-1 px-5 pt-1 pb-1 inline-block justify-center items-center relative hover:shadow-inner hover:shadow-[rgba(111,65,210,0.5)] lg:text-xs 2xl:text-xs 2xl:ml-44">
        📅 Projects & Recent Works
        </h4>
        <div className="lg:gap-0 2xl:gap-8 relative flex justify-center items-center flex-wrap z-10">

          <Tilt className="group w-[350px] h-[345px] md:mt-10 md:w-[300px] md:h-[380px] lg:m-3 lg:w-[300px] lg:h-[380px] 2xl:w-[340px] 2xl:h-[400px] m-8 rounded-[15px] bg-transparent overflow-hidden flex justify-center items-center border-t border-l border-white backdrop-blur-[5px] shadow-[20px_20px_50px_rgba(200,200,200,0.2)] transition-all">
            <div className="text-center transition-all">
              <Image className="absolute w-full h-44 md:h-1/2 lg:h-1/2 2xl:h-1/2 top-1.5 left-0 px-1.5 rounded-[15px] object-cover" src={Campaign} alt="Campaign" />
              <Image className="absolute w-full h-44 md:h-1/2 lg:h-1/2 2xl:h-1/2 top-1.5 left-0 px-1.5 rounded-[15px] object-cover hidden group-hover:block" src={WebSlideshow} alt="Campaign Hover" />
              <h3 className="text-white text-2xl z-10 pt-48">Web Development</h3>
              <Link href="/Pages/WebDevelopment.html">
                <button className="text-white mt-5 w-20 h-9 text-lg font-montserrat bg-[rgba(25,17,51,0.5)] border-t border-l border-white backdrop-blur-[5px] rounded-full hover:bg-transparent transition-all">
                  <span className="relative inline-block cursor-pointer transition-all hover:pr-4 ">
                    View
                    <span className="absolute opacity-0 top-0 right-[-1rem] transition-all hover:opacity-100 hover:right-0">&raquo;</span>
                  </span>
                </button>
              </Link>
            </div>
          </Tilt>

          <Tilt className="group w-[350px] h-[380px] md:mt-10 md:w-[300px] md:h-[380px]  lg:m-3 lg:w-[300px] lg:h-[380px] 2xl:w-[350px] 2xl:h-[400px] m-8 rounded-[15px] bg-transparent overflow-hidden flex justify-center items-center border-t border-l border-white backdrop-blur-[5px] shadow-[20px_20px_50px_rgba(200,200,200,0.2)] transition-all">
            <div className="text-center transition-all">
              <Image className="absolute w-full h-1/2 top-1.5 left-0 px-1.5 rounded-[15px] object-cover" src={UI2} alt="UI Design" />
              <Image className="absolute w-full h-1/2 top-1.5 left-0 px-1.5 rounded-[15px] object-cover hidden group-hover:block" src={UISlideshow} alt="UI Design Hover" />
              <h3 className="text-white text-2xl z-10 pt-48">UI/UX Design</h3>
              <Link href="/Pages/UI.html">
                <button className="text-white mt-5 w-20 h-9 text-lg font-montserrat bg-[rgba(25,17,51,0.5)] border-t border-l border-white backdrop-blur-[5px] rounded-full hover:bg-transparent transition-all">
                  <span className="relative inline-block cursor-pointer transition-all hover:pr-4">
                    View
                    <span className="absolute opacity-0 top-0 right-[-1rem] transition-all hover:opacity-100 hover:right-0">&raquo;</span>
                  </span>
                </button>
              </Link>
            </div>
          </Tilt>

          <Tilt className="group w-[350px] h-[380px] md:mt-10 md:w-[300px] md:h-[380px] lg:m-3 lg:w-[300px] lg:h-[380px] 2xl:w-[350px] 2xl:h-[400px] m-8 rounded-[15px] bg-transparent overflow-hidden flex justify-center items-center border-t border-l border-white backdrop-blur-[5px] shadow-[20px_20px_50px_rgba(200,200,200,0.2)] transition-all">
            <div className="text-center transition-all">
              <Image className="absolute w-full h-1/2 top-1.5 left-0 px-1.5 rounded-[15px] object-cover" src={MobileUI} alt="3D Animation" />
              <Image className="absolute w-full h-1/2 top-1.5 left-0 px-1.5 rounded-[15px] object-cover hidden group-hover:block" src={Slideshow3D} alt="3D Animation Hover" />
              <h3 className="text-white text-2xl z-10 pt-48">3D Animation</h3>
              <Link href="/Pages/3D.html">
                <button className="text-white mt-5 bg-[rgba(25,17,51,0.5)] border-t border-l border-white backdrop-blur-[5px] rounded-full w-20 h-9 text-lg font-montserrat hover:bg-transparent transition-all">
                  <span className="relative inline-block cursor-pointer transition-all hover:pr-4">
                    View
                    <span className="absolute opacity-0 top-0 right-[-1rem] transition-all hover:opacity-100 hover:right-0">&raquo;</span>
                  </span>
                </button>
              </Link>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Projects;










