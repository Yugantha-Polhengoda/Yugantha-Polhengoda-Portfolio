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
    <div className="mt-16 p-32 flex flex-wrap text-white justify-between items-center">
      <div className="mb-32">
        <h4 className='languages-t text-xs w-56 font-semibold border border-white rounded-full py-1 ml-10 pl-5 mb-1'>Web Development & Languages</h4>
        <h2 className="pt-2 text-3xl font-bold">I'm Certified & Skilled Developer</h2>
        <p className='pt-5'>👋 Hi there! I'm a web developer passionate about crafting beautiful
          and functional<br/> web experiences. With a strong foundation in both front-end
          and back-end technologies,<br/> I love turning ideas into real-world applications.</p>
      </div>

      <div className="flex flex-col mb-20 ml-36">
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={htmlIcon.src} alt="HTML"/>HTML
        </h4>
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={cssIcon.src} alt="CSS"/>CSS
        </h4>
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={jsIcon.src} alt="JavaScript"/>JavaScript
        </h4>
      </div>

      <div className="flex flex-col mb-20">
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={reactIcon.src} alt="React"/>REACT
        </h4>
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={nextjsIcon.src} alt="Next.js"/>NEXT.JS
        </h4>
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={vuejsIcon.src} alt="Vue.js"/>VUE.JS
        </h4>
      </div>

      <div className="flex flex-col mb-20">
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={nodejsIcon.src} alt="Node.js"/>node.js
        </h4>
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={springIcon.src} alt="Spring Boot"/>Springboot
        </h4>
        <h4 className="text-center bg-white text-black rounded-lg w-36 font-bold p-2 mb-2">
          <img className="w-7 inline mr-2" src={bootstrapIcon.src} alt="Bootstrap"/>Bootstrap
        </h4>
      </div>

      <div className="flex flex-wrap text-white justify-between items-center gap-18">
        <div className="mb-40">
          <h4 className='languages-t text-xs w-48 font-semibold border border-white rounded-full py-1 ml-10 pl-5 mb-1'>3D Modeling & Animation</h4>
          <h2 className="pt-2 text-3xl font-bold">I'm Certified & Skilled 3D Designer</h2>
          <p className='pt-5'>I discovered my love for 3D design 5 years ago and have since
            honed my skills<br/> in creating immersive and visually captivating 3D
            models, animations, and environments.<br/> My work spans across various industries, including gaming, film, architecture, and product<br/> design.</p>
        </div>
        <div>
          <img className="mb-32 ml-20" src={Icon3D2.src} alt="3D2" width="500px"/>
        </div>
      </div>
    </div>
  )
}

export default Experience
