import React from 'react'
import Image from "next/image";

import "./Experience.css"

import htmlIcon from '/public/Images/html-5.png'
import cssIcon from '/public/Images/css-3.png'
import jsIcon from '/public/Images/js.png'
import reactIcon from '/public/Images/react.png'
import nextjsIcon from '/public/Images/nextjs-icon.png'
import vuejsIcon from '/public/Images/vuejs.png'
import nodejsIcon from '/public/Images/node-js.png'
import springIcon from '/public/Images/spring.png'
import bootstrapIcon from '/public/Images/bootstrap.png'

import Icon3D2 from '/public/Images/3D2.jpg'

const Experience = () => {
  return (
    <div className="p-8 justify-center 2xl:mt-16 2xl:p-32 flex flex-wrap text-white 2xl:justify-between items-center">
      <div className="mb-10 2xl:mb-32">
        <h4 className='languages-t text-custom-xs ml-4 w-48  bg-[rgba(25,17,51,0.5)] border border-[rgba(248,246,254,0.3)] rounded-full py-1 pl-5 mb-1 2xl:text-xs 2xl:w-56 2xl:ml-10'>Web Development & Languages</h4>
        <h2 className="pt-2 text-sm 2xl:text-3xl font-bold">I'm Certified & Skilled Developer</h2>
        <p className='pt-5 text-sm 2xl:text-base'>👋 Hi there! I'm a web developer passionate about crafting beautiful
          and functional<br/> web experiences. With a strong foundation in both front-end
          and back-end technologies,<br/> I love turning ideas into real-world applications.</p>
      </div>

      <div className="gap-1 2xl:gap-0 flex 2xl:flex-col 2xl:mb-20 2xl:ml-36">
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg 2xl:w-36 font-bold 2xl:pt-3 2xl:pb-1 mb-2 2xl:text-custom-sm">
          <img className="w-7 ml-4 2xl:ml-0 2xl:inline 2xl:mr-2" src={htmlIcon.src} alt="HTML"/>HTML
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg font-bold 2xl:pb-2 mb-2 2xl:text-custom-sm 2xl:w-36 2xl:p-2">
          <img className="w-7 ml-4 2xl:ml-0 2xl:inline 2xl:mr-2" src={cssIcon.src} alt="CSS"/>CSS
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <img className="w-7 inline 2xl:mr-2" src={jsIcon.src} alt="JavaScript"/>JavaScript
        </h4>
      </div>

      <div className="gap-1 flex 2xl:gap-0 2xl:flex-col 2xl:mb-20">
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <img className="w-7 inline 2xl:mr-2" src={reactIcon.src} alt="React"/>REACT
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <img className="w-7 inline 2xl:mr-2" src={nextjsIcon.src} alt="Next.js"/>NEXT.JS
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <img className="w-7 inline 2xl:mr-2" src={vuejsIcon.src} alt="Vue.js"/>VUE.JS
        </h4>
      </div>

      <div className="gap-1 flex 2xl:gap-0 2xl:flex-col mb-20">
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <img className="w-7 inline mr-2" src={nodejsIcon.src} alt="Node.js"/>node.js
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg 2xl:w-36 font-bold 2xl:pt-3 2xl:pb-4 mb-2 2xl:text-custom-sm">
          <img className="w-7 inline mr-2" src={springIcon.src} alt="Spring Boot"/>Springboot
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-white text-black rounded-lg 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <img className="w-7 inline mr-2" src={bootstrapIcon.src} alt="Bootstrap"/>Bootstrap
        </h4>
      </div>

      <div className="flex flex-wrap text-white justify-between items-center gap-18">
        <div className="mb-10 2xl:mb-40">
          <h4 className='languages-t text-custom-xs 2xl:text-xs bg-[rgba(25,17,51,0.5)] border border-[rgba(248,246,254,0.3)]  rounded-full w-40 py-1 ml-10 pl-5 mb-1 2xl:w-48'>3D Modeling & Animation</h4>
          <h2 className="pt-2 text-sm 2xl:text-3xl font-bold">I'm Certified & Skilled 3D Designer</h2>
          <p className='pt-5 text-sm 2xl:text-base'>I discovered my love for 3D design 5 years ago and have since
            honed my skills<br/> in creating immersive and visually captivating 3D
            models, animations, and environments.<br/> My work spans across various industries, including gaming, film, architecture, and product<br/> design.</p>
        </div>
        <div>
          <img className="mb-32 2xl:ml-20" src={Icon3D2.src} alt="3D2" width="500px"/>
        </div>
      </div>
    </div>
  )
}

export default Experience
