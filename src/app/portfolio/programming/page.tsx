"use client"
import ProgrammingProject from "@/app/components/programmingProject"
import YoutubePlayer from "@/app/components/youtubePlayer";
import { useState } from 'react';
export default function Page() {
    const [isProgrammingProjectVisible, setProgrammingProjectVisible] = useState(false);

  return (
    <div className={`${isProgrammingProjectVisible ? 'overflow-hidden fixed':'overflow-show'} flex flex-col items-center z-10 `}>
      <h1 className="mt-16 text-6xl md:text-6xl font-bold pb-5 pt-0 text-center">My Programming Projects</h1>
      <hr className="w-2/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-highlight"></hr>
      <div className="flex items-center justify-center py-5 max-w-2xl">
        <ol className="w-72 md:w-screen relative border-l border-gray-200 dark:border-gray-700">                  
            <li className="h-60 mb-60 ml-6 md:mb-96">            
                <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div> 
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Slime Mould Simulation</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A simple slime mould simulation written from scratch using HTML Canvas, JS, and CSS. Inspired by this blog post: <a className="text-highlight dark:text-white hover:text-black dark:hover:text-highlight" href="https://cargocollective.com/sagejenson/physarum">Blog post by Sage Jenson</a>. Optimized to have around a million mould particles running in the browser.</p>
                <a href="https://github.com/AlexanderGardiner/Slime-Mould" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>

                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8002"} 
                    iframePath="Slime-Mould"
                    imageWidth={350}
                    imageURL={"/portfolio/programmingProjects/SlimeMould.png"} 
                    imageAltText={"Photo of Slime Mould Simulation"} />
                
            </li>

            <li className="mb-10 ml-6">            
                <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div> 
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Octo Lib</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A custom library for the First Robotics Competition, made for team 9084. Includes custom swerve code with odometry and pose estimation. Also includes utility classes for motor initialization as well as math and gyro utility classes.</p>
                <a href="https://github.com/Octobots9084/Octo-Lib-Dev" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>

                <YoutubePlayer src={"https://www.youtube.com/embed/2QfuSLlCeY8?si=dsth_N_hNHbxokwp"}/>    

                
            </li>

            <li className="mb-10 ml-6">            
                <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div> 
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Issue Tracker</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A customizable web-based project managment program built with a HTML, JS and CSS frontend, and NodeJS (Express) backend. Uses MongoDB to store data and uses Passport for user authentication. Supports custom projects, file uploads, as well as user managment.</p>
                <a href="https://github.com/AlexanderGardiner/IssueTracker" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8001"} 
                    iframePath=""
                    imageWidth={1000}
                    imageURL={"/portfolio/programmingProjects/IssueTracker.png"} 
                    imageAltText={"Photo of Issue Tracker"} />
             </li>

            <li className="mb-10 ml-6"> 
                <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>            
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Octo Scout</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A customizable web-based scouting system for the First Robotics Competition. Made for team 9084. Made for the 2023 competition Charged Up. Data is inputted on a web user interface and uploaded to a server for collection, stored as csv files for easy data analysis.</p>
                <a href="https://github.com/AlexanderGardiner/octo-scout" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8003"} 
                    iframePath=""
                    imageWidth={250}
                    imageURL={"/portfolio/programmingProjects/OctoScout.png"} 
                    imageAltText={"Photo of Octo Scout"} />              
            </li>

            <li className="mb-10 ml-6">            
                <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div> 
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">FRC Robot Code</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">First Robotics Competition robot code for team 9084&apos;s bot. Includes closed loop PID based motor control and computer vision code for April Tags, as well as autonomous pathing. (This code was put together by the team during the &quot;Charged Up&quot; game). The code was rewritten during the offseason to implement my Swerve Library.</p>
                <a href="https://github.com/Octobots9084/Aluminati-2023" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <YoutubePlayer src={"https://www.youtube.com/embed/OwLbJpfCA3s?si=yBU1Pc3UzVIzWgdu"}/>    
            </li>


            <li className="mb-10 ml-6">            
                <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div> 
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Electromagnetic Particle Simulation</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A simulation of particles with programmable charges and sizes, written from scratch using HTML Canvas, JS, and CSS. Includes electric and magnetic field simulation.</p>
                <a href="https://github.com/AlexanderGardiner/ElectromagneticParticleSimulator" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
                <ProgrammingProject 
                    onVisibilityChange={setProgrammingProjectVisible} 
                    iframePort={"8002"} 
                    iframePath="ElectromagneticParticleSimulator"
                    imageWidth={1000}
                    imageURL={"/portfolio/programmingProjects/ElectromagneticParticles.png"} 
                    imageAltText={"Photo of Electromagnetic Particle Simulator"} /> 
            </li>

            <li className="mb-10 ml-6">            
                <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div> 
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Platformer V2</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Version 2 of a platformer written from scratch using HTML Canvas, JS, and CSS. Includes level loading and previously uploaded user times (for a leaderboard) to another server hosted by a friend.</p>
                <a href="https://github.com/AlexanderGardiner/Platformerv2" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Github</a>
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