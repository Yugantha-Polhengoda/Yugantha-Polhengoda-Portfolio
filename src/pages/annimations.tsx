"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import "../app/globals.css";

import Campaign from '/public/Images/Campaign.png';
import Translator from '/public/Images/Translator.png';
import FINAL from '/public/Images/FINAL.jpg';
import Clothing from '/public/Images/Clothing.png';
import image3d1 from '/public/Images/3D2.jpg';
import Landing from '/public/Images/Landing.jpg';
import Mobile from '/public/Images/Mobile-UI.jpg';
import UISlideshow from '/public/Images/UISlideshow.gif';
import Slideshow3D from '/public/Images/3DSlideshow.gif';
import Projects from '@/components/Projects/Projects';
import NavBar from '@/components/Header/NavBar';
import Footer from '@/components/Footer/Footer';

const annimations = () => {
  return (
    <div className='bg-black h-auto'>
        <NavBar />
        
        <div className='py-40 lg:hidden'>
          <h4 className="text-center text-5xl pb-10 font-bold">
                <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
                 3D Animation
                </span>
          </h4> 

            
          <div className='grid grid-cols-1 mx-4 text-white py-20'>

            <div className="">
              <Image className="img1 rounded-[5px] object-cover" src={image3d1} alt="image3d1" />
            </div>

            <div className="right">
                  <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0'>Our Services 3d Model 
                  </h1>
                  <h2></h2>
                  <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>V-Ray</p>
                  </div>
            </div>

          </div>


          <div className='grid grid-cols-1 py-10 px-4 text-white'>

            <div className="">   
                <Image className="img1 rounded-[5px] object-fill" src={Mobile} alt="Mobile-UI" />
            </div>

            <div className="right">
                  <h1 className='text-3xl mt-5 pb-5'>Multi Translator
                  </h1>
                  <h2></h2>
                  <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>V-Ray</p>
                  </div>
            </div>
          </div>



          <div className='grid grid-cols-1 mx-4 text-white py-20'>

            <div className="">
                  
                  <Image className="img1 rounded-[5px] object-fill" src={Landing} alt="Landing" />

            </div>

            <div className="right">
                  <h1 className='text-3xl text-white mt-5 pb-5'>Hotel Reservation System
                  </h1>
                  <h2></h2>
                  <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>V-Ray</p>
                  </div>
            </div>
            
          </div>


          <div className='grid grid-cols-1 mx-4 text-white py-20'>

            <div className="">  
                  <Image className="img1 rounded-[5px] object-fill" src={FINAL} alt="FINAL" />
            </div>

            <div className="right">
                  <h1 className='text-3xl text-white mt-5 pb-5'>Online Shopping Application

                  </h1>
                  <h2></h2>
                  <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>V-Ray</p>
                  </div>
            </div>
          </div> 

        </div>





      {/* ------------------------     WEB VIEW    ---------------------------- */}




        <div className='py-40 xl:h-[340vh] h-[270vh] hidden lg:block'>
          <h4 className="text-center text-5xl pb-10 font-bold">
                <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
                 3D Animation
                </span>
          </h4> 

            
          <div className='absolute grid grid-cols-2 my-10 px-5 left-5 max-w-[1000px] text-white py-20 '>

            <div className="left max-w-[90%]">
                  
                  <Image className="img1 rounded-[5px] object-fill" src={image3d1} alt="image3d1" />

            </div>

            <div className="right">
                  <h1 className='text-3xl text-white pb-5'>Our Services 3d Model
                  </h1>
                  <h2></h2>
                  <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>V-Ray</p>
                  </div>
            </div>

          </div>


          <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white xl:mt-[38%] lg:mt-[50%] py-10 '>

            <div className="right">
                  <h1 className='text-3xl text-white pb-5'>Multi Translator
                  </h1>
                  <h2></h2>
                  <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>HTML</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>CSS</p>
                    <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
                    <p className='bg-blue-500 rounded-[20px] text-sm p-1'>Tailwind CSS</p>
                  </div>
            </div>

            
            <div className="left max-w-[90%]">
                  
                  <Image className="img1 h-64 rounded-[5px] object-cover" src={Mobile} alt="Mobile-UI" />

            </div>

          </div>



          <div className='absolute grid grid-cols-1 my-10 lg:grid-cols-2 px-5 lg:left-5 max-w-[1000px] text-white xl:mt-[68%]  lg:mt-[90%] py-20 '>

            <div className="left max-w-[90%]">
                  
                  <Image className="img1 h-64 rounded-[5px] object-fill" src={Landing} alt="Landing" />

            </div>

            <div className="right">
                  <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0'>Hotel Reservation System
                  </h1>
                  <h2></h2>
                  <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>HTML</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>CSS</p>
                    <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
                    <p className='bg-blue-500 rounded-[20px] text-sm p-1'>Bootstrap</p>
                  </div>
            </div>
            
          </div>


          <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white xl:mt-[104%] lg:mt-[144%] py-10 '>

            <div className="right">
                  <h1 className='text-3xl text-white pb-5'>Online Shopping Application

                  </h1>
                  <h2></h2>
                  <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>HTML</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>CSS</p>
                    <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
                    <p className='bg-blue-500 rounded-[20px] text-sm p-1'>Tailwind CSS</p>
                  </div>
            </div>

            <div className="left max-w-[90%]">
                  
                  <Image className="img1 h-64 rounded-[5px] object-fill" src={FINAL} alt="FINAL" />

            </div>
          </div> 

        </div>

        <Footer />
      </div>
  )
}

export default annimations
