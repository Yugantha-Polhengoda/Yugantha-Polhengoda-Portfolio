"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import "../app/globals.css";

import { FaGithub } from "react-icons/fa";

import Campaign from '/public/Images/Campaign.png';
import Campaign1 from '/public/Images/Campaign1.jpg';
import Dashboard from '/public/Images/Dashboard.png';

import Translator1 from '/public/Images/Translator.png';
import Translator2 from '/public/Images/Translator2.png';
import Translator3 from '/public/Images/Translator3.png';

import Hotels from '/public/Images/Hotels.jpg';
import Hotels2 from '/public/Images/Hotels2.jpg';
import Hotels3 from '/public/Images/Hotels3.jpg';

import Clothing from '/public/Images/Clothing.jpg';
import Clothing2 from '/public/Images/Clothing2.jpg';
import Clothing3 from '/public/Images/Clothing3.jpg';

import NavBar from '@/components/Header/NavBar';
import Footer from '@/components/Footer/Footer';
import CustomerService from '@/components/CustomerService/CustomerService';


const images = [
  { id: 1, src: Campaign.src, thumb: Campaign.src },
  { id: 2, src: Campaign1.src, thumb: Campaign1.src },
  { id: 3, src: Dashboard.src, thumb: Dashboard.src },
  { id: 4, src: Translator1.src, thumb: Translator1.src },
  { id: 5, src: Translator2.src, thumb: Translator2.src },
  { id: 6, src: Translator3.src, thumb: Translator3.src },
  { id: 7, src: Hotels.src, thumb: Hotels.src },
  { id: 8, src: Hotels2.src, thumb: Hotels2.src },
  { id: 9, src: Hotels3.src, thumb: Hotels3.src },
  { id: 10, src: Clothing.src, thumb: Clothing.src },
  { id: 11, src: Clothing2.src, thumb: Clothing2.src },
  { id: 12, src: Clothing3.src, thumb: Clothing3.src },
];

const WebDevelopment = () => {
  const [selectedImage1, setSelectedImage1] = useState(images[0]?.src) // For section 1 (images 1-3)
  const [selectedImage2, setSelectedImage2] = useState(images[3]?.src);
  const [selectedImage3, setSelectedImage3] = useState(images[6]?.src);
  const [selectedImage4, setSelectedImage4] = useState(images[9]?.src);

  return (
    <div className='bg-black h-auto'>
      <NavBar />


      {/* ------------------------ Mobile VIEW ---------------------------- */}
      
      <div className='py-40 lg:hidden'>
        <h4 className="text-center text-5xl pb-10 font-bold">
          <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
            Web Development
          </span>
        </h4> 

        <div className='grid grid-cols-1 mx-4 text-white py-20'>
          <div className="left">   
            <Image className="img1 h-64 rounded-[5px] object-contain md:ml-12"
              src={selectedImage1}
              alt="Selected"
              width={640}
              height={256} />
            <div className="flex justify-center md:mt-2">
              {images.slice(0, 3).map((image) => (
                <div key={image.id} className="m-1 mt-1">
                  <Image
                    src={image.thumb}
                    alt={`Thumbnail ${image.id}`}
                    className={`cursor-pointer w-36 h-20 md:w-full object-cover rounded-[5px] transition-shadow duration-300 ease-in-out ${selectedImage1 === image.src ? 'shadow-outline' : ''}`}
                    onClick={() => setSelectedImage1(image.src)}
                    width={160}
                    height={64} />
                </div>
              ))}
            </div>
          </div>

          <div className="right md:px-32">
            <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0 md:text-center'>Online Cosmetic Store</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
            
            <div className='grid grid-cols-3 w-72 text-center gap-3 mt-4 md:justify-center md:w-full'>
              <p className='bg-red-700 rounded-[20px] text-sm p-1'>HTML</p>
              <p className='bg-cyan-300 rounded-[20px] text-sm p-1'>CSS</p>
              <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
              <p className='bg-blue-500 rounded-[20px] text-sm p-1'>REACT</p>
              <p className='bg-purple-500 rounded-[20px] text-sm p-1'>Bootstrap</p>
              <p className='bg-green-500 rounded-[20px] text-sm p-1'>NodeJS</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 py-20 px-4 text-white'>
          <div className="left">
            <Image className="img1 h-64 rounded-[5px] object-contain md:ml-12"
              src={selectedImage2}
              alt="Selected"
              width={640}
              height={256} />
            <div className="flex justify-center -mt-6 md:mt-2">
              {images.slice(3, 6).map((image) => (
                <div key={image.id} className="m-1">
                  <Image
                    src={image.thumb}
                    alt={`Thumbnail ${image.id}`}
                    className={`cursor-pointer w-36 h-20 md:w-full object-cover rounded-[5px] transition-shadow duration-300 ease-in-out ${selectedImage2 === image.src ? 'shadow-outline' : ''}`}
                    onClick={() => setSelectedImage2(image.src)}
                    width={160}
                    height={64} />
                </div>
              ))}
            </div>
          </div>

          <div className="right md:px-32">
            <h1 className='text-3xl mt-5 pb-5 md:text-center'>Multi Translator</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
            
            <div className='grid grid-cols-3 w-72 text-center gap-3 mt-4 md:justify-center md:w-full'>
              <p className='bg-red-700 rounded-[20px] text-sm p-1'>HTML</p>
              <p className='bg-cyan-300 rounded-[20px] text-sm p-1'>CSS</p>
              <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
              <p className='bg-blue-500 rounded-[20px] text-sm p-1'>REACT</p>
              <p className='bg-purple-500 rounded-[20px] text-sm p-1'>TailwindCSS</p>
              <p className='bg-green-500 rounded-[20px] text-sm p-1'>NodeJS</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 mx-4 text-white py-20'>
          <div className="left">   
            <Image className="img1 h-64 rounded-[5px] object-contain md:ml-12"
              src={selectedImage3}
              alt="Selected"
              width={640}
              height={256} />
            <div className="flex justify-center -mt-6 md:mt-2">
              {images.slice(6, 9).map((image) => (
                <div key={image.id} className="m-1">
                  <Image
                    src={image.thumb}
                    alt={`Thumbnail ${image.id}`}
                    className={`cursor-pointer w-36 h-20 md:w-full object-cover rounded-[5px] transition-shadow duration-300 ease-in-out ${selectedImage3 === image.src ? 'shadow-outline' : ''}`}
                    onClick={() => setSelectedImage3(image.src)}
                    width={160}
                    height={64} />
                </div>
              ))}
            </div>
          </div>

          <div className="right md:px-32">
            <h1 className='text-3xl text-white mt-5 pb-5 md:text-center'>Hotel Reservation System</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
            
            <div className='grid grid-cols-3 w-72 text-center gap-3 mt-4 md:justify-center md:w-full'>
              <p className='bg-red-700 rounded-[20px] text-sm p-1'>HTML</p>
              <p className='bg-cyan-300 rounded-[20px] text-sm p-1'>CSS</p>
              <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
              <p className='bg-blue-500 rounded-[20px] text-sm p-1'>REACT</p>
              <p className='bg-purple-500 rounded-[20px] text-sm p-1'>TailwindCSS</p>
              <p className='bg-green-500 rounded-[20px] text-sm p-1'>NodeJS</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 mx-4 text-white py-20'>
          <div className="left">   
            <Image className="img1 h-64 rounded-[5px] object-contain md:ml-12"
              src={selectedImage4}
              alt="Selected"
              width={640}
              height={256} />
            <div className="flex justify-center -mt-6 md:mt-2">
              {images.slice(9, 12).map((image) => (
                <div key={image.id} className="m-1">
                  <Image
                    src={image.thumb}
                    alt={`Thumbnail ${image.id}`}
                    className={`cursor-pointer w-36 h-20 md:w-full object-cover rounded-[5px] transition-shadow duration-300 ease-in-out ${selectedImage4 === image.src ? 'shadow-outline' : ''}`}
                    onClick={() => setSelectedImage4(image.src)}
                    width={160}
                    height={64} />
                </div>
              ))}
            </div>
          </div>

          <div className="right md:px-32">
            <h1 className='text-3xl text-white mt-5 pb-5 md:text-center'>Clothing Store</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
            
            <div className='grid grid-cols-3 w-72 text-center gap-3 mt-4 md:justify-center md:w-full'>
              <p className='bg-red-700 rounded-[20px] text-sm p-1'>HTML</p>
              <p className='bg-cyan-300 rounded-[20px] text-sm p-1'>CSS</p>
              <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
              <p className='bg-blue-500 rounded-[20px] text-sm p-1'>REACT</p>
              <p className='bg-purple-500 rounded-[20px] text-sm p-1'>TailwindCSS</p>
              <p className='bg-green-500 rounded-[20px] text-sm p-1'>NodeJS</p>
            </div>
          </div>
        </div>
      </div>


      {/* ------------------------ WEB VIEW ---------------------------- */}


      <div className='py-40 xl:h-[340vh] h-[270vh] hidden lg:block'>
        <h4 className="text-center text-5xl pb-10 font-bold">
          <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
            Web Development
          </span>
        </h4>

        <div className='absolute grid grid-cols-2 my-10 px-5 left-5 max-w-[1000px] text-white py-20'>
          <div
            className="left max-w-[90%]">
            <Image
              className={`img1 h-64 rounded-[5px] object-contain cursor-pointer transition-opacity duration-300 ${selectedImage1 === 'image.src' ? 'opacity-50' : ''}`}
              src={selectedImage1}
              alt="Selected"
              width={640}
              height={256}
            />

            <div className="flex justify-center mt-2">
              {images.slice(0, 3).map((image) => (
                <div key={image.id} className="m-1">
                  <Image
                    src={image.thumb}
                    alt={`Thumbnail ${image.id}`}
                    className={`cursor-pointer w-36 h-20 object-cover rounded-[5px] transition-shadow duration-300 ease-in-out ${selectedImage1 === image.src ? 'shadow-outline' : ''}`}
                    onClick={() => setSelectedImage1(image.src)}
                    width={160}
                    height={64}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="right max-w-[90%]">
            <h1 className='text-3xl text-white pb-5'>Online Cosmetic Store</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="#">Buy Extended Warranty</a></p>

            <div className='grid grid-cols-3 w-[300px] font-semibold text-center gap-3 mt-4'>
              <p className='bg-orange-500 rounded-[20px] text-sm p-1'>HTML</p>
              <p className='bg-cyan-400 rounded-[20px] text-sm p-1'>CSS</p>
              <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
              <p className='bg-blue-600 rounded-[20px] text-sm p-1'>REACT</p>
              <p className='bg-purple-500 rounded-[20px] text-sm p-1'>Bootstrap</p>
              <p className='bg-green-600 rounded-[20px] text-sm p-1'>Node JS</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white xl:mt-[38%] lg:mt-[50%] py-10'>
          <div
            className="right max-w-[90%] mt-8"
          >
            <h1 className='text-3xl text-white pb-5'>Multi Translator</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="#">Buy Extended Warranty</a></p>

            <div className='grid grid-cols-3 w-[300px] font-semibold text-center gap-3 mt-4'>
              <p className='bg-orange-500 rounded-[20px] text-sm p-1'>HTML</p>
              <p className='bg-cyan-400 rounded-[20px] text-sm p-1'>CSS</p>
              <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
              <p className='bg-blue-600 rounded-[20px] text-sm p-1'>REACT</p>
              <p className='bg-purple-500 rounded-[20px] text-sm p-1'>Tailwind CSS</p>
              <p className='bg-green-600 rounded-[20px] text-sm p-1'>Node JS</p>
            </div>
          </div>

          <div
            className="left max-w-[90%]">
            <Image
              className={`img1 h-64 rounded-[5px] object-contain cursor-pointer transition-opacity duration-300 ${selectedImage2 === 'image.src' ? 'opacity-50' : ''}`}
              src={selectedImage2}
              alt="Selected"
              width={640}
              height={256} 
            />
            
            <div className="flex justify-center -mt-5">
              {images.slice(3, 6).map((image) => (
                <div key={image.id} className="m-1">
                  <Image
                    src={image.thumb}
                    alt={`Thumbnail ${image.id}`}
                    className={`cursor-pointer w-36 h-20 object-cover rounded-[5px] transition-shadow duration-300 ease-in-out ${selectedImage2 === image.src ? 'shadow-outline' : ''}`}
                    onClick={() => setSelectedImage2(image.src)}
                    width={160}
                    height={64}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Project 3 */}
        <div className='absolute grid grid-cols-1 my-10 lg:grid-cols-2 px-5 lg:left-5 max-w-[1000px] text-white xl:mt-[68%] lg:mt-[90%] py-20'>
          <div
            className="left max-w-[90%]">
            <Image
              className={`img1 h-64 rounded-[5px] object-contain cursor-pointer transition-opacity duration-300 ${selectedImage3 === 'image.src' ? 'opacity-50' : ''}`}
              src={selectedImage3}
              alt="Selected"
              width={640}
              height={256}
            />

            <div className="flex justify-center -mt-4">
              {images.slice(6, 9).map((image) => (
                <div key={image.id} className="m-1">
                  <Image
                    src={image.thumb}
                    alt={`Thumbnail ${image.id}`}
                    className={`cursor-pointer w-36 h-20 object-cover rounded-[5px] transition-shadow duration-300 ease-in-out ${selectedImage3 === image.src ? 'shadow-outline' : ''}`}
                    onClick={() => setSelectedImage3(image.src)}
                    width={160}
                    height={64}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="right max-w-[90%] mt-5">
            <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0'>Hotel Reservation System</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="#">Buy Extended Warranty</a></p>

            <div className='grid grid-cols-3 w-[300px] font-semibold text-center gap-3 mt-6'>
              <p className='bg-orange-500 rounded-[20px] text-sm p-1'>HTML</p>
              <p className='bg-cyan-400 rounded-[20px] text-sm p-1'>CSS</p>
              <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white xl:mt-[104%] lg:mt-[144%] py-10'>
          <div className="right max-w-[90%] mt-5">
            <h1 className='text-3xl text-white pb-5'>Online Shopping Application</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="#">Buy Extended Warranty</a></p>

            <div className='grid grid-cols-3 w-[300px] font-semibold text-center gap-3 mt-4'>
              <p className='bg-orange-500 rounded-[20px] text-sm p-1'>HTML</p>
              <p className='bg-cyan-400 rounded-[20px] text-sm p-1'>CSS</p>
              <p className='bg-yellow-500 rounded-[20px] text-sm p-1'>JS</p>
              <p className='bg-blue-600 rounded-[20px] text-sm p-1'>REACT</p>
              <p className='bg-purple-500 rounded-[20px] text-sm p-1'>Tailwind CSS</p>
              <p className='bg-green-600 rounded-[20px] text-sm p-1'>Node JS</p>
            </div>
          </div>

          <div
            className="left max-w-[90%]">
            <Image
              className={`img1 h-60 rounded-[5px] object-contain cursor-pointer transition-opacity duration-300 ${selectedImage4 === 'image.src' ? 'opacity-50' : ''}`}
              src={selectedImage4}
              alt="Selected"
              width={640}
              height={256} 
            />

            <div className="flex justify-center -mt-3">
              {images.slice(9, 12).map((image) => (
                <div key={image.id} className="m-1">
                  <Image
                    src={image.thumb}
                    alt={`Thumbnail ${image.id}`}
                    className={`cursor-pointer w-36 h-20 object-cover rounded-[5px] transition-shadow duration-300 ease-in-out ${selectedImage4 === image.src ? 'shadow-outline' : ''}`}
                    onClick={() => setSelectedImage4(image.src)}
                    width={160}
                    height={64}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CustomerService />
    </div>
  );
}

export default WebDevelopment;














