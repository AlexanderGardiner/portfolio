"use client"
import ProgrammingProject from "@/app/components/programmingProject"
import YoutubePlayer from "@/app/components/youtubePlayer";
import { useState } from 'react';
export default function Page() {
    const [isProgrammingProjectVisible, setProgrammingProjectVisible] = useState(false);

  return (
    <div className={`${isProgrammingProjectVisible ? 'overflow-hidden fixed':'overflow-show'} flex flex-col items-center z-10`}>
      <h1 className="mt-20 text-5xl font-bold pb-5 pt-0">My Programming Projects</h1>
      <hr className="w-2/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-highlight"></hr>
      <div className="flex items-center justify-center py-5 max-w-2xl">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
            <li className="h-60 mb-60 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Slime Mould Simulation</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A simple slime mould simulation written from scratch using HTML Canvas, JS, and CSS.</p>
                <a href="https://github.com/AlexanderGardiner/Slime-Mould" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>

                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8002"} 
                    iframePath="Slime-Mould"
                    imageWidth={400}
                    imageURL={"/portfolio/programmingProjects/SlimeMould.png"} 
                    imageAltText={"Photo of Slime Mould Simulation"} />
                
            </li>

            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Octo Lib</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A custom library for the First Robotics Competition, made for team 9084. Includes custom swerve code with odometry and pose estimation. Also includes utility classes for motors.</p>
                <a href="https://github.com/Octobots9084/Octo-Lib-Dev" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <a className="group flex flex-col items-center" href="https://github.com/Octobots9084/Octo-Lib-Dev">
                    <img
                        className="w-full md:w-4/5 p-5 max-w-3xl rounded-full dark:shadow-white-800 shadow-xl hover:scale-105"
                        src="/portfolio/programmingProjects/OctoLib.png"
                        alt="Photo of FRC Team 9084"
                    />
                </a>
                <YoutubePlayer src={"https://www.youtube.com/embed/2QfuSLlCeY8?si=dsth_N_hNHbxokwp"}/>    

                
            </li>

            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Issue Tracker</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A customizable web-based project managment program built with a HTML, JS and CSS frontend, and NodeJS (Express) backend. Uses MongoDB to store data and Passport for user authentication.</p>
                <a href="https://github.com/AlexanderGardiner/IssueTracker" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8001"} 
                    iframePath=""
                    imageWidth={1000}
                    imageURL={"/portfolio/programmingProjects/IssueTracker.png"} 
                    imageAltText={"Photo of Issue Tracker"} />
             </li>

            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Octo Scout</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A customizable web-based scouting system for the First Robotics Competition. Made for team 9084.</p>
                <a href="https://github.com/AlexanderGardiner/octo-scout" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8003"} 
                    iframePath=""
                    imageWidth={400}
                    imageURL={"/portfolio/programmingProjects/OctoScout.png"} 
                    imageAltText={"Photo of Octo Scout"} />              
            </li>

            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">FRC Robot Code</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">First Robotics Competition robot code for team 9084&apos;s bot. Includes closed loop PID based motor control and computer vision code for April Tags, as well as autonomous pathing. (This code was put together by the team during the &quot;Charged Up&quot; game). The code was rewritten during the offseason to implement my Swerve Library</p>
                <a href="https://github.com/Octobots9084/Aluminati-2023" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <YoutubePlayer src={"https://www.youtube.com/embed/OwLbJpfCA3s?si=yBU1Pc3UzVIzWgdu"}/>    
                </li>

            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Platformer V3</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Version 3 of a platformer written from scratch using HTML Canvas, JS, and CSS.</p>
                <a href="https://github.com/AlexanderGardiner/Platformerv3" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                         
            </li>

            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Electromagnetic Particle Simulation</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A simulation of particles with programmable charges written from scratch using HTML Canvas, JS, and CSS. Includes electric and magnetic field simulations.</p>
                <a href="https://github.com/AlexanderGardiner/ElectromagneticParticleSimulator" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8002"} 
                    iframePath="ElectromagneticParticleSimulator"
                    imageWidth={1000}
                    imageURL={"/portfolio/programmingProjects/ElectromagneticParticles.png"} 
                    imageAltText={"Photo of Electromagnetic Particle Simulator"} /> 
            </li>

            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Platformer V2</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Version 2 of a platformer written from scratch using HTML Canvas, JS, and CSS.</p>
                <a href="https://github.com/AlexanderGardiner/Platformerv2" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8002"} 
                    iframePath="Platformerv2"
                    imageWidth={1000}
                    imageURL={"/portfolio/programmingProjects/Platformerv2.png"} 
                    imageAltText={"Photo of Platformerv2"} /> 
            </li>

        </ol>
      </div>
    </div>
    )
}