"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(usePathname());
    let unselectedStyle = "py-2 pl-3 pr-4 text-lightModenavigationUnselectedPageColour md:hover:text-lightModeNavigationSelectedPageColour md:p-0 dark:text-darkModenavigationUnselectedPageColour md:dark:hover:text-darkModeNavigationSelectedPageColour";
    let selectedStyle = "py-2 pl-3 pr-4 text-lightModeNavigationSelectedPageColour dark:text-darkModeNavigationSelectedPageColour md:p-0"
    

    return (       
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://alexandergardiner.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Photo of Alex Gardiner" />
                    <span className="self-center text-2xl text-lightModenavigationUnselectedPageColour font-semibold whitespace-nowrap dark:text-darkModenavigationUnselectedPageColour">Alex Gardiner</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div className={`w-full lg:flex-none lg:flex lg:items-end lg:w-auto md:w-auto md:block md:w-auto md:block ${isOpen ? "block" : "hidden"}`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/" className={"/" == usePathname() ? selectedStyle : unselectedStyle}>Home</a>
                    </li>
                    <li>
                        <a href="/about" className={"/about" == usePathname() ? selectedStyle : unselectedStyle}>About</a>
                    </li>
                    <li>
                        <a href="/portfolio" className={"/portfolio" == usePathname() ? selectedStyle : unselectedStyle}>Portfolio</a>
                    </li>
                    <li>
                        <a href="/contact" className={"/contact" == usePathname() ? selectedStyle : unselectedStyle}>Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>

      

    );
  };
  
  export default Navbar;