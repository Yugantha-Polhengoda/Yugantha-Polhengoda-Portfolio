import React from 'react'
import Image from "next/image";

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
    <div className='mt-40'>
    <div className="languages-container inline-flex text-white">
      <div className="languages-t">
        <h4>Web Development & Languages</h4>
        <h2>I'm Certified & Skilled <span>Developer</span></h2>
        <p>👋 Hi there! I'm a web developer passionate about crafting beautiful
           and functional<br/> web experiences. With a strong foundation in both front-end
           and back-end technologies,<br/> I love turning ideas into real-world applications.</p>
      </div>

      <div className="typ">
        <h4><Image className="react w-[50px]" src={htmlIcon} alt="HTML"/>HTML</h4>
        <h4><Image className="react w-[50px]" src={cssIcon} alt="CSS"/>CSS</h4>
        <h4><Image className="react w-[50px]" src={jsIcon} alt="JavaScript"/>JavaScript</h4>
      </div>

      <div className="type">
        <h4><Image className="react w-[50px]" src={reactIcon} alt="React"/>REACT</h4>
        <h4><Image className="react w-[50px]" src={nextjsIcon} alt="Next.js"/>NEXT.JS</h4>
        <h4><Image className="react w-[50px]" src={vuejsIcon} alt="Vue.js"/>VUE.JS</h4>
      </div>

      <div className="typee">
        <h4><Image className="react w-[50px]" src={nodejsIcon} alt="Node.js"/>node.js</h4>
        <h4><Image className="react w-[50px]" src={springIcon} alt="Spring Boot"/>Springboot</h4>
        <h4><Image className="react w-[50px]" src={bootstrapIcon} alt="Bootstrap"/>Bootstrap</h4>
      </div>

    </div>

    <div className="logo3d-container inline-flex text-white ">

        <div className="logo3d-t">
            <h4>3D Modeling & Animation</h4>
            <h2>I'm Certified & Skilled <span>3D Designer</span></h2>
            <p>I discovered my love for 3D design 5 years ago and have since
                honed my skills<br/> in creating immersive and visually captivating 3D
                models, animations, and environments.<br/> My work spans across various industries, including gaming, film, architecture, and product<br/> design.</p>
        </div>

        <div className="logo3d">
            <Image className="w-[500px]" src={Icon3D2} alt="3D2" />
        </div>
        </div>

    </div>
  )
}

export default Experience
