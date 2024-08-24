"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import "../app/globals.css";
import "./webDevelopment.css";

import Campaign from '/public/Images/Campaign.png';
import Translator from '/public/Images/Translator.png';
import Hotels from '/public/Images/Hotels.jpg';
import Clothing from '/public/Images/Clothing.png';
import UI2 from '/public/Images/UI2.jpg';
import MobileUI from '/public/Images/Mobile-UI.jpg';
import WebSlideshow from '/public/Images/WebSlideshow.gif';
import UISlideshow from '/public/Images/UISlideshow.gif';
import Slideshow3D from '/public/Images/3DSlideshow.gif';
import Projects from '@/components/Projects/Projects';
import NavBar from '@/components/Header/NavBar';
import Footer from '@/components/Footer/Footer';

const uiux = () => {
  return (
    <div className='bg-black h-full'>
    <NavBar />
    <div className='py-40 h-[1020vh] lg:h-[320vh]'>
    <h4 className="text-center text-5xl pb-10 font-bold">
            <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
              Web Development
            </span>
      </h4> 

        
      <div className='absolute grid grid-cols-1 my-10 lg:grid-cols-2 px-5 lg:left-5 max-w-[1000px] text-white py-20 '>

        <div className="left max-w-[90%]">
              
              <Image className="img1 h-64 rounded-[5px] object-cover" src={Campaign} alt="Campaign" />

        </div>

        <div className="right">
              <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0'>Online Cosmetic Store
              </h1>
              <h2></h2>
              <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
              <p>In stock. <a href="">Buy Extended Warranty</a></p>
              <p></p>
        </div>

      </div>


      <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white mt-[700px] lg:mt-[38%] py-10 '>

        <div className="right">
              <h1 className='text-3xl text-white pb-5'>Multi Translator
              </h1>
              <h2></h2>
              <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
              <p>In stock. <a href="">Buy Extended Warranty</a></p>
              <p></p>
        </div>

        
        <div className="left max-w-[90%]">
              
              <Image className="img1 h-64 rounded-[5px] object-cover" src={Translator} alt="Translator" />

        </div>

      </div>



      <div className='absolute grid grid-cols-1 my-10 lg:grid-cols-2 px-5 lg:left-5 max-w-[1000px] text-white mt-[418%]  lg:mt-[68%] py-20 '>

        <div className="left max-w-[90%]">
              
              <Image className="img1 h-64 rounded-[5px] object-fill" src={Hotels} alt="Hotels" />

        </div>

        <div className="right">
              <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0'>Hotel Reservation System
              </h1>
              <h2></h2>
              <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
              <p>In stock. <a href="">Buy Extended Warranty</a></p>
              <p></p>
        </div>
        
      </div>


      <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white mt-[630%] lg:mt-[104%] py-10 '>

        <div className="right">
              <h1 className='text-3xl text-white pb-5'>Online Shopping Application

              </h1>
              <h2></h2>
              <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
              <p>In stock. <a href="">Buy Extended Warranty</a></p>
              <p></p>
        </div>

        
        <div className="left max-w-[90%]">
              
              <Image className="img1 h-64 rounded-[5px] object-fill" src={Clothing} alt="Clothing" />

        </div>

      </div>


    </div>

    <Footer />
  </div>
  )
}

export default uiux
