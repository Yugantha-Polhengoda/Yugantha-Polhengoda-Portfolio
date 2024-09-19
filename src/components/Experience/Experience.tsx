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

import Icon3D2 from '/public/Images/3D1.jpg'

const Experience = () => {
  return (
    <div>
      <div id='Experience' className="hidden p-8 pb-0 mt-16 justify-center md:flex flex-wrap text-white font-Poppins-font items-center md:mt-8 md:p-12 md:pb-0 md:justify-between lg:mt-8 lg:p-12 lg:pb-0 lg:justify-between 2xl:mt-16 2xl:p-32 2xl:pb-0 2xl:justify-between scroll-mt-10 lg:-scroll-mt-5">
      <div className="mb-10 md:w-410 lg:w-2/3 2xl:w-55% 2xl:mb-32">
        <h4  className="languages-t ml-4 w-52 py-1 pl-3 mb-1 text-custom-xs bg-[rgba(25,17,51,0.5)] border border-[rgba(248,246,254,0.3)] rounded-full hover:shadow-inner hover:shadow-[rgba(111,65,210,0.5)]
                      md:pl-3 md:text-xs md:w-60
                      lg:pl-5 lg:text-xs lg:w-64 
                      2xl:w-64 2xl:ml-10"
                       >💻 Web Development & Languages</h4>

        <h2 className="pt-2 text-sm md:text-xl lg:text-2xl 2xl:text-3xl font-bold">I'm Certified & Skilled Developer</h2>
        <p className="pt-5 text-sm text-zinc-50 md:text-base lg:text-base 2xl:text-base">👋 I'm a web developer passionate about crafting beautiful
          and functional web experiences. With a strong foundation in both front-end
          and back-end technologies,I love turning ideas into real-world applications.</p>
      </div>

    <div className="lg:flex md:mt-20 md:gap-1 lg:mt-16 lg:gap-1 2xl:mt-0">
      <div className="gap-1 flex lg:flex-col lg:gap-0 2xl:flex-col 2xl:gap-0 2xl:mb-20 2xl:ml-24">
        <h4 className="w-20 p-2 mb-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold md:pb-1 lg:mb-1 2xl:w-36 2xl:pt-3 2xl:pb-1 2xl:text-custom-sm">
          <Image className="w-7 ml-4 2xl:ml-0 2xl:inline 2xl:mr-2" src={htmlIcon.src} alt="HTML" width={144} height={5}/>HTML
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold md:pb-1 lg:mb-1 2xl:pb-2 mb-2 2xl:text-custom-sm 2xl:w-36 2xl:p-2">
          <Image className="w-7 ml-4 2xl:ml-0 2xl:inline 2xl:mr-2" src={cssIcon.src} alt="CSS" width={144} height={5}/>CSS
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg md:pb-1 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <Image className="w-7 inline 2xl:mr-2" src={jsIcon.src} alt="JavaScript" width={144} height={5}/>JavaScript
        </h4>
      </div>

      <div className="gap-1 flex lg:flex-col lg:gap-0 2xl:gap-0 2xl:flex-col 2xl:mb-20">
        <h4 className="w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg md:pb-1 lg:mb-1 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <Image className="w-7 inline 2xl:mr-2" src={reactIcon.src} alt="React" width={144} height={5}/>REACT
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg md:pb-1 lg:mb-1 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <Image className="w-7 inline 2xl:mr-2" src={nextjsIcon.src} alt="Next.js" width={144} height={5}/>NEXT.JS
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg md:pb-1 lg:mb-1 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <Image className="w-7 inline 2xl:mr-2" src={vuejsIcon.src} alt="Vue.js" width={144} height={5}/>VUE.JS
        </h4>
      </div>

      <div className="gap-1 mb-20 flex lg:flex-col lg:gap-0 lg:mb-0 2xl:gap-0 2xl:flex-col">
        <h4 className="w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg md:pb-1 lg:mb-1 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <Image className="w-7 inline mr-2" src={nodejsIcon.src} alt="Node.js" width={144} height={5}/>node.js
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg md:pb-1 lg:mb-1 lg:pt-3 lg:pb-4 2xl:w-36 font-bold 2xl:pt-3 2xl:pb-4 mb-2 2xl:text-custom-sm">
          <Image className="w-7 inline mr-2" src={springIcon.src} alt="Spring Boot" width={144} height={5}/>Springboot
        </h4>
        <h4 className="w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg md:pb-1 lg:mb-1 2xl:w-36 font-bold 2xl:pt-2 2xl:pb-2 mb-2 2xl:text-custom-sm">
          <Image className="w-7 inline mr-2" src={bootstrapIcon.src} alt="Bootstrap" width={144} height={5}/>Bootstrap
        </h4>
      </div>
      </div>

      <div className="flex flex-wrap text-white justify-between items-center gap-18 lg:gap-8 2xl:gap-0 2xl:mt-16">
        <div className="mb-10 md:w-350 md:mt-0 lg:w-55% 2xl:w-2/4 2xl:mb-40">
          <h4 className="languages-t w-44 py-1 ml-4 pl-4 mb-1 text-custom-xs bg-[rgba(25,17,51,0.5)] border border-[rgba(248,246,254,0.3)]  rounded-full hover:shadow-inner hover:shadow-[rgba(111,65,210,0.5)]
                        md:w-52 md:text-xs
                        lg:w-52 lg:text-xs 
                        2xl:text-xs 2xl:w-52 2xl:ml-10"
                        >⚽ 3D Modeling & Animation</h4>

          <h2 className="pt-2 text-sm lg:text-2xl 2xl:text-3xl font-bold">I'm Certified & Skilled 3D Designer</h2>
          <p className="pt-5 text-sm text-zinc-50 2xl:text-base">☝️ I discovered my love for 3D design 5 years ago and have since
            honed my skills in creating immersive and visually captivating 3D
            models, animations, and environments. My work spans across various industries, including gaming, film, architecture, and product design.</p>
        </div>
        <div>
          <Image className="mb-32 md:max-w-80 md:mt-28 lg:max-w-96 lg:mt-28 lg:ml-0 2xl:w-600 2xl:mt-0 2xl:mr-10" src={Icon3D2.src} alt="3D2" width="700" height="0"/>
        </div>
      </div>
    </div>


    

      {/* -------------------------------------mobile---------------------------------- */}

        <div id='MobileExperience' className='md:hidden scroll-mt-14 md:scroll-mt-0'>
          <div id='Experience' className="grid grid-cols-1 md:grid-cols-2 mx-5 pb-0 mt-16 justify-center items-center text-white font-Poppins-font md:mt-8 lg:mt-8 xl:mt-16 lg:-scroll-mt-5 xl:gap-80">
            <div className="mb-10 max-w-full">
              <h4 className="languages-t grid grid-cols-1 ml-4 max-w-52 py-1 pl-3 mb-1 text-custom-xs bg-[rgba(25,17,51,0.5)] border border-[rgba(248,246,254,0.3)] rounded-full hover:shadow-inner hover:shadow-[rgba(111,65,210,0.5)]">
                💻 Web Development & Languages</h4>

              <h2 className="pt-2 text-sm lg:text-2xl 2xl:text-3xl font-bold">I'm Certified & Skilled Developer</h2>
              <p className="pt-5 text-sm xl:text-base text-zinc-50">👋 I'm a web developer passionate about crafting beautiful
                and functional web experiences. With a strong foundation in both front-end
                and back-end technologies,I love turning ideas into real-world applications.</p>
            </div>

            <div className="mx-auto">
              <div className="gap-1 grid grid-cols-3 justify-center">
                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="w-7 ml-4" src={htmlIcon.src} alt="HTML" width={144} height={5}/>HTML
                </h4>
                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="max-w-7 ml-4" src={cssIcon.src} alt="CSS" width={144} height={5}/>CSS
                </h4>
                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="max-w-7 ml-4" src={jsIcon.src} alt="JavaScript" width={144} height={5}/>JavaScript
                </h4>

                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="max-w-7 ml-4" src={reactIcon.src} alt="React" width={144} height={5}/>REACT
                </h4>
                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="w-7 ml-4" src={nextjsIcon.src} alt="Next.js" width={144} height={5}/>NEXT.JS
                </h4>
                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="max-w-7 ml-4" src={vuejsIcon.src} alt="Vue.js" width={144} height={5}/>VUE.JS
                </h4>

                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="max-w-7 inline mr-2" src={nodejsIcon.src} alt="Node.js" width={144} height={5}/>node.js
                </h4>
                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="max-w-7 inline mr-2" src={springIcon.src} alt="Spring Boot" width={144} height={5}/><span className=''>Springboot</span>
                </h4>
                <h4 className="max-w-20 p-2 text-center text-xs bg-zinc-50 text-black rounded-lg font-bold">
                  <Image className="max-w-7 inline mr-2" src={bootstrapIcon.src} alt="Bootstrap" width={144} height={5}/>Bootstrap
                </h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mx-5 mt-10 text-white justify-center items-center md:gap-10 lg:gap-14 xl:gap-80">
            <div className="mb-10 max-w-full">
              <h4 className="languages-t max-w-44 py-1 ml-4 pl-4 mb-1 text-custom-xs bg-[rgba(25,17,51,0.5)] border border-[rgba(248,246,254,0.3)]  rounded-full hover:shadow-inner hover:shadow-[rgba(111,65,210,0.5)]">
                ⚽ 3D Modeling & Animation
              </h4>

              <h2 className="pt-2 text-sm lg:text-2xl 2xl:text-3xl font-bold">I'm Certified & Skilled 3D Designer</h2>
              <p className="pt-5 text-sm text-zinc-50 xl:text-base">☝️ I discovered my love for 3D design 5 years ago and have since
                honed my skills in creating immersive and visually captivating 3D
                models, animations, and environments. My work spans across various industries, including gaming, film, architecture, and product design.
              </p>
            </div>
            <div>
              <Image className="mb-32 md:max-w-80 md:mt-28 lg:max-w-96 lg:mt-28 2xl:w-600 " src={Icon3D2.src} alt="3D2" width="700" height="0"/>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Experience
