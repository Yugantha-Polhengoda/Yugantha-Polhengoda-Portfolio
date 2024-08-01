"use client";

import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import './NavBar.css';

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed shadow-custom-shadow top-0 z-[999] w-full backdrop-blur-sm">
      <nav className="bg-transparent text-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-4 mr-4 md:pl-8 md:pr-8 md:pt-5 md:pb-5 lg:pt-5 lg:pb-5 lg:ml-20 lg:mr-20 2xl:mr-40 2xl:pt-5 2xl:pl-0 2xl:pr-0 2xl:pb-5">
          <h4 className='flex gap-1 font-Poppins-font text-custom-xs font-light border border-cyan-200 rounded-full py-1 pr-3 pl-3 mb-1 
                        md:pr-3 md:pl-4 md:text-xs 
                        lg:pr-3 lg:pl-4 lg:text-xs 
                        2xl:pr-3 2xl:pl-4 2xl:text-xs'>
            Yugantha Polhengoda
            <div className="pluseDot2"></div>
            <div className="pluseDot3"></div>
            <div className="pluseDot"></div>
          </h4>

          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="flex text-sm gap-1 lg:gap-2 2xl:gap-1 bg-transparent rounded-full md:me-0 focus:ring-4 focus:ring-gray-300
             dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>

              <Link href="https://github.com/Yugantha-Polhengoda" className="">
                <FaGithub color='white' className='w-5 h-5 hover:scale-90 transition-transform duration-200 md:w-5 md:h-5 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 border-2 border-[#0ef] rounded-full p-[2px]' />
              </Link>

              <Link href="https://www.linkedin.com/in/yugantha-polhengoda-7b5348175/" className="">
                <FaLinkedinIn color='white' className='w-5 h-5 hover:scale-90 transition-transform duration-200 md:w-5 md:h-5 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 border-2 border-[#0ef] rounded-full p-[2px]' />
              </Link>

              <Link href="https://www.behance.net/yuganthpolheng" className="">
                <FaBehance color='white' className='w-5 h-5 hover:scale-90 transition-transform duration-200 md:w-5 md:h-5 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 border-2 border-[#0ef] rounded-full p-[2px]' />
              </Link>
            </button>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded={menuOpen}
              onClick={toggleMenu} // Toggle menu visibility
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`text-base items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
            <ul className="lg:bg-transparent flex flex-col font-light p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 rounded text-black transition-transform duration-200 hover:bg-gray-200 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 font-Poppins-font
                                     md:text-white md:dark:hover:text-blue-500 md:hover:bg-transparent md:dark:hover:bg-transparent md:hover:text-cyan-600 md:p-0
                                     lg:text-white lg:hover:scale-125
                                     2xl:text-white 2xl:hover:scale-125
                                    " aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded text-black transition-transform duration-200 hover:bg-gray-200 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 font-Poppins-font
                                     md:text-white md:dark:hover:text-blue-500 md:hover:bg-transparent md:dark:hover:bg-transparent md:hover:text-cyan-600 md:p-0
                                     lg:text-white lg:hover:scale-125
                                     2xl:text-white md:hover:scale-125 2xl:hover:scale-125
                                     ">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded text-black transition-transform duration-200 hover:bg-gray-200 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 font-Poppins-font
                                     md:text-white md:hover:scale-125 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent
                                     lg:text-white lg:hover:scale-125
                                     2xl:text-white 2xl:hover:scale-125 
                                     ">Projects</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded text-black transition-transform duration-200 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 font-Poppins-font
                                      md:text-white md:hover:scale-125 md:hover:text-cyan-600 md:p-0 md:dark:hover:text-blue-500 md:hover:bg-transparent md:dark:hover:bg-transparent
                                      lg:text-white lg:hover:scale-125
                                      2xl:text-white 2xl:hover:scale-125
                                     ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;
