import React from 'react'

const Footer = () => {
  return (
    <div className=' text-center flex flex-col items-center justify-center clear-both backdrop-blur-md bg-[#1a1a1a] pb-4'>
      <section id="title" className="w-full">
        <hr className=" border-gray-600 w-full mx-auto "/>
        <br/>
        <br/>
        <div className=""> </div>
        <div className=" text-gray-400 text-xs">
          Copyright © 2024 Yugantha Polhengoda | All rights reserved | 
          <a href="#" className="text-xs"> Privacy Policy </a> | 
          <a href="#" className="text-xs"> Terms of Use </a>
        </div>
      </section>
    </div>
  )
}

export default Footer
