"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import "../app/globals.css";

import Icon3D1 from '/public/Images/3D1.jpg'
import Icon3D2 from '/public/Images/3D.jpg'
import Icon3D3 from '/public/Images/3D3.png'

import Mobile1 from '/public/Images/Mobile-UI.jpg';
import Mobile2 from '/public/Images/Mobile-UI2.png';
import Mobile3 from '/public/Images/Mobile-UI3.png';

import Hotels from '/public/Images/ModernHouse.jpg';
import Hotels2 from '/public/Images/HotelDesign.jpg';
import Hotels3 from '/public/Images/SLIIT.jpg';

import Slideshow from '/public/Images/Slideshow.jpg';
import Slideshow1 from '/public/Images/Slideshow.jpg';
import Slideshow2 from '/public/Images/Slideshow.jpg';

import NavBar from '@/components/Header/NavBar';
import Footer from '@/components/Footer/Footer';
import CustomerService from '@/components/CustomerService/CustomerService';

const images = [
  { id: 1, src: Icon3D1.src, thumb: Icon3D1.src },
  { id: 2, src: Icon3D2.src, thumb: Icon3D2.src },
  { id: 3, src: Icon3D3.src, thumb: Icon3D3.src },
  { id: 4, src: Mobile1.src, thumb: Mobile1.src },
  { id: 5, src: Mobile2.src, thumb: Mobile2.src },
  { id: 6, src: Mobile3.src, thumb: Mobile3.src },
  { id: 7, src: Hotels.src, thumb: Hotels.src },
  { id: 8, src: Hotels2.src, thumb: Hotels2.src },
  { id: 9, src: Hotels3.src, thumb: Hotels3.src },
  { id: 10, src: Slideshow.src, thumb: Slideshow.src },
  { id: 11, src: Slideshow1.src, thumb: Slideshow1.src },
  { id: 12, src: Slideshow2.src, thumb: Slideshow2.src },
];

const annimations = () => {

  const [selectedImage1, setSelectedImage1] = useState(images[0].src);
  const [selectedImage2, setSelectedImage2] = useState(images[3].src);
  const [selectedImage3, setSelectedImage3] = useState(images[6].src);
  const [selectedImage4, setSelectedImage4] = useState(images[9].src);

  return (
    <div className='bg-black h-auto w-full'>
      <NavBar />


      {/* ------------------------ Mobile VIEW ---------------------------- */}
      
      <div className='py-40 lg:hidden'>
        <h4 className="text-center text-3xl pb-2 font-bold">
          <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
            3D Animation
          </span>
        </h4> 

        <div className='grid grid-cols-1 mx-4 text-white py-10'>
          <div className="left">   
            <Image className="img1 h-64 rounded-[5px] object-contain md:ml-12"
              src={selectedImage1}
              alt="Selected"
              width={640}
              height={256} />
            <div className="flex justify-center md:mt-2">
              {images.slice(0, 3).map((image) => (
                <div key={image.id} className="mx-1 mt-2">
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
            <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0 md:text-center'>3D office work space</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
            
            <div className='grid grid-cols-3 text-center gap-3 mt-4 md:justify-center md:w-full'>
              <p className='bg-blue-500 rounded-[20px] text-xs p-1'>Cinema4D</p>
              <p className='bg-red-700 rounded-[20px] text-xs p-1'>Redshift</p>      
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
            <div className="flex justify-center md:mt-2">
              {images.slice(3, 6).map((image) => (
                <div key={image.id} className="mx-1 mt-2">
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
            <h1 className='text-3xl mt-5 pb-5 md:text-center'>Product Design & Advertising</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
            
            <div className='grid grid-cols-3 text-center gap-3 mt-4 md:justify-center md:w-full'>
              <p className='bg-blue-500 rounded-[20px] text-xs p-1'>Cinema4D</p>
              <p className='bg-red-700 rounded-[20px] text-xs p-1'>Redshift</p>      
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
            <div className="flex justify-center mt-2 md:mt-6">
              {images.slice(6, 9).map((image) => (
                <div key={image.id} className="mx-1 -mt-3">
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
            <h1 className='text-3xl text-white mt-5 pb-5 md:text-center'>Modern Building Designs</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
            
            <div className='grid grid-cols-3 text-center gap-3 mt-4 md:justify-center md:w-full'>
              <p className='bg-cyan-300 rounded-[20px] text-xs p-1'>3D's Max</p>
              <p className='bg-red-700 rounded-[20px] text-xs p-1'>Redshift</p> 
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
            <div className="flex justify-center md:mt-2">
              {images.slice(9, 12).map((image) => (
                <div key={image.id} className="mx-1 mt-0">
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
            <h1 className='text-3xl text-white mt-5 pb-5 md:text-center'>Landing Page Animation</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
            
            <div className='grid grid-cols-3 text-center gap-3 mt-4 md:justify-center md:w-full'>
              <p className='bg-blue-500 rounded-[20px] text-xs p-1'>Cinema4D</p>
              <p className='bg-red-700 rounded-[20px] text-xs p-1'>Redshift</p>
            </div>
          </div>
        </div>
      </div>


      {/* ------------------------ WEB VIEW ---------------------------- */}


      <div className='py-40 lg:h-[340vh] h-[270vh] hidden lg:block'>
        <h4 className="text-center text-5xl pb-10 font-bold">
          <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
            3D Animation
          </span>
        </h4>

        <div className='absolute grid grid-cols-2 my-10 px-5 left-5 max-w-[1000px] text-white py-20'>
          <div className="left max-w-[90%]">
            <Image
              className="img1 h-64 rounded-[5px] object-cover"
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
            <h1 className='text-3xl text-white pb-5'>3D office work space</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>

            <div className='grid grid-cols-3 w-[300px] font-semibold text-center gap-3 mt-4'>
              <p className='bg-blue-500 rounded-[20px] text-sm p-1'>Cinema4D</p>
              <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
            </div>
          </div>
        </div>

        <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white xl:mt-[38%] lg:mt-[50%] py-10'>
          <div className="right max-w-[90%] mt-2">
            <h1 className='text-3xl text-white pb-5'>Product Design & Advertising</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>

            <div className='grid grid-cols-3 w-[300px] font-semibold text-center gap-3 mt-4'>
              <p className='bg-blue-500 rounded-[20px] text-sm p-1'>Cinema4D</p>
              <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
            </div>
          </div>

          <div className="left max-w-[90%]">
            <Image
              className="img1 h-64 rounded-[5px] object-contain"
              src={selectedImage2}
              alt="Selected"
              width={640}
              height={256}
            />
            <div className="flex justify-center mt-2">
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

        <div className='absolute grid grid-cols-1 my-10 lg:grid-cols-2 px-5 lg:left-5 max-w-[1000px] text-white xl:mt-[68%] lg:mt-[90%] py-20'>
          <div className="left max-w-[90%]">
            <Image
              className="img1 h-64 rounded-[5px] object-contain"
              src={selectedImage3}
              alt="Selected"
              width={640}
              height={256}
            />
            <div className="flex justify-center mt-2">
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

          <div className="right max-w-[90%] mt-2">
            <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0'>Modern Building Designs</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>

            <div className='grid grid-cols-3 w-[300px] font-semibold text-center gap-3 mt-6'>
             <p className='bg-cyan-500 rounded-[20px] text-sm p-1'>3D's Max</p>
              <p className='bg-blue-500 rounded-[20px] text-sm p-1'>Vray</p>
            </div>
          </div>
        </div>

        <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white xl:mt-[104%] lg:mt-[144%] py-10'>
          <div className="right max-w-[90%]">
            <h1 className='text-3xl text-white pb-5'>Landing Page Animation</h1>
            <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
            <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>

            <div className='grid grid-cols-3 w-[300px] font-semibold text-center gap-3 mt-4'>
              <p className='bg-blue-500 rounded-[20px] text-sm p-1'>Cinema4D</p>
              <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
            </div>
          </div>

          <div className="left max-w-[90%]">
            <Image
              className="img1 h-60 rounded-[5px] object-contain"
              src={selectedImage4}
              alt="Selected"
              width={640}
              height={256}
            />
            <div className="flex justify-center mt-3">
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
  )
}

export default annimations
