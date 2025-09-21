"use client";
import ProgrammingProject from "@/app/components/programmingProject";
import YoutubePlayer from "@/app/components/youtubePlayer";
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaJava, FaPython } from "react-icons/fa";

export default function Page() {
  return (
    <div
      className={'flex flex-col items-center z-10 w-full px-4 '}
    >
      <h1 className="mt-16 text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold pb-5 pt-0 mx-4 text-center max-w-[80vw]">
        My Programming Projects
      </h1>
      <hr className="w-2/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-highlight"></hr>
      <div className="flex flex-col items-center py-5 w-full max-w-5xl">
          <ol className="w-full relative border-l border-gray-200 dark:border-gray-700">       
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              IEEE ITAIC Published Research Paper
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2025
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <h5 className="text-lg mr-3 text-highlight font-bold">PyTorch</h5>
              </div>
              <div className="pr-6">
                

                <FaPython
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>  
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Engineered and evaluated PyTorch models for adult vs. child speech classification, achieving 93.5% accuracy via cross-validation.</li>
              <li>Unified six large-scale datasets, including two private datasets from UCLA’s Speech and Auditory Processing Lab, to create a comprehensive training corpus.</li>
              <li>Implemented data augmentation using impulse response convolution to mitigate recording artifacts and improve model robustness.</li>
              <li>Extracted embeddings using HuBERT, Whisper, and ECAPA-TDNN for robust feature representation.</li>
              <li>Benchmarked and optimized neural networks, logistic regression, XGBoost, and transformer models to identify the best-performing approaches.</li>
            </ul>

            <a
              href="https://ieeexplore.ieee.org/document/11163088"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Paper
            </a>
            <a
              href="https://github.com/AlexanderGardiner/Robust-Child-Speech-Classification-Leveraging-Augmentation-and-Speaker-Embeddings"
              className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              FRC Robot Code
            </h3>

            {/* 2025 Reefscape */}
            <details className="mb-4" open>
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                2025 – Reefscape
              </summary>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mt-2">
                <li>Developed advanced PID motor control with improved responsiveness for precise robot movements.</li>
                <li>Enhanced AprilTag vision system for tag-specific localization, increasing positioning accuracy in complex scenarios.</li>
                <li>Integrated assisted operation features for automatic scoring and collection, optimizing driver efficiency during matches.</li>
                <li>Achieved top 1% autonomous performance worldwide and recieved the Rising All Star Award.</li>
              </ul>
              <a href="https://github.com/Octobots9084/DAAAVE-2025" className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight">Link to Github</a>
              <YoutubePlayer src="https://www.youtube.com/embed/H-n8UWospvo?si=0qM3CjnierAnY9bD" />
            </details>

            {/* 2024 Crescendo */}
            <details className="mb-4">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                2024 – Crescendo
              </summary>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mt-2">
                <li>Expanded autonomous capabilities with improved trajectory calculations and enhanced PID motor control for smoother movement.</li>
                <li>Upgraded AprilTag vision system to allow more precise localization within 10cm at distances up to 5 meters.</li>
                <li>Transitioned to a community-created swerve library to ensure maintainability and allow new team members to contribute effectively.</li>
                <li>Achieved top 10 ranking in California competitions, demonstrating the software and hardware improvements.</li>
              </ul>
              <a href="https://github.com/Octobots9084/Octave-2024" className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight">Link to Github</a>
              <YoutubePlayer src="https://www.youtube.com/embed/6uoF0Oa8oQY?si=bdPa5cSWNCSAIsBv" />
            </details>

            {/* 2023 Charged Up */}
            <details className="mb-4">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                2023 – Charged Up
              </summary>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mt-2">
                <li>Founded FRC Team 9084 and established the software team to build the robot's codebase from scratch.</li>
                <li>Developed closed-loop PID motor control and computer vision for AprilTags for basic autonomous navigation.</li>
                <li>Implemented autonomous pathing achieving a competitive auto routine.</li>
                <li>Built modular software infrastructure to allow future students to maintain and expand functionality.</li>
                <li>Won the Rookie All Star Award and qualified for World Championships</li>
              </ul>
              <a href="https://github.com/Octobots9084/Aluminati-2023" className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight">Link to Github</a>
              <YoutubePlayer src="https://www.youtube.com/embed/OwLbJpfCA3s?si=yBU1Pc3UzVIzWgdu" />
            </details>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              UCLA COSMOS Research Poster
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <h5 className="text-lg mr-3 text-highlight font-bold">Tensorflow</h5>
              </div>
              <div className="pr-6">
                

                <FaPython
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>  
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Enhanced a public dataset using impulse response convolution to simulate diverse recording environments and improve model generalization.</li>
              <li>Developed multiple AI models with TensorFlow to classify music genres in real-world contexts, achieving a 34% accuracy improvement over the raw dataset.</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Recipe Scout
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
            </time>
           <div className="flex flex-wrap items-center my-4">
              <div className="pr-6 mb-2">
                <h5 className="text-lg mr-3 text-highlight font-bold">Next.js</h5>
              </div>
              <div className="pr-6 mb-2">
                <FaHtml5 className="scale-150" style={{ color: "#6a84f4" }} size={30} />
              </div>
              <div className="pr-6 mb-2">
                <FaCss3Alt className="scale-150" style={{ color: "#6a84f4" }} size={30} />
              </div>
              <div className="pr-6 mb-2">
                <FaJs className="scale-150" style={{ color: "#6a84f4" }} size={30} />
              </div>
              <div className="pr-6 mb-2">
                <FaNode className="scale-150" style={{ color: "#6a84f4" }} size={30} />
              </div>
              <h5 className="text-lg mr-3 mb-2 text-highlight font-bold">Tailwind CSS</h5>
              <h5 className="text-lg mr-3 mb-2 text-highlight font-bold">Daisy UI</h5>
              <h5 className="text-lg mr-3 mb-2 text-highlight font-bold">Express</h5>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed a privacy-focused web app that allows users to take a picture of ingredients and generate personalized recipes using in-browser YOLO for object detection, sending only detected ingredients to ChatGPT.</li>
              <li>Removed the need for external recipe APIs while producing high-quality recipe suggestions.</li>
              <li>Integrated secure Google OAuth authentication and stored user recipes in MongoDB.</li>
              <li>Enabled social features including recipe sharing, commenting, and feedback forums.</li>
              <li>Implemented privacy controls and shareable recipe links for public or private recipes.</li>
              <li>Delivered a full-stack AI-powered solution combining computer vision, LLMs, and interactive web technologies.</li>
            </ul>
            <a
              href="https://github.com/AlexanderGardiner/recipescout"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              imageWidth={1000}
              imageURL={"/portfolio/programmingProjects/recipescout.png"}
              imageAltText={"Photo of recipescout"}
            />
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              octoscout
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024-2025
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaHtml5
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCss3Alt
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaJs
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaNode
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <h5 className="text-lg mr-3 text-highlight font-bold">Express</h5>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed a modular scouting web application for FRC Team 9084, designed to adapt to any game, improving data collection, organization, and real-time match analysis.</li>
              <li>Created dynamic, interactive data visualizations using CanvasJS, enabling the team to identify trends, optimize strategy, and make evidence-based decisions during competitions.</li>
              <li>Established and led a scouting team in 2025 to maintain, expand, and iterate on the web app, ensuring it remains actively used and continually improved.</li>
              <li>Added features such as customizable reports, team comparisons, and performance trend tracking, making the app a critical tool for competitive success.</li>
            </ul>
            <a
              href="https://github.com/Octobots9084/octoscoutinfinite"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              imageWidth={1000}
              imageURL={"/portfolio/programmingProjects/OctoScout2024.png"}
              imageAltText={"Photo of octoscout2024"}
            />
          </li>

          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              webcut
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <h5 className="text-lg mr-3 text-highlight font-bold">Next.js</h5>
              <h5 className="text-lg mr-3 text-highlight font-bold">
                Tailwind CSS
              </h5>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed a fully online video editor using Next.js, Tailwind CSS, and FFmpeg.</li>
              <li>Implemented features including cutting clips, setting in/out points, audio support, video resizing, and rotation.</li>
              <li>Enabled project saving, loading, and exporting at full quality, providing a complete end-to-end video editing workflow in the browser.</li>
            </ul>
            <a
              href="https://github.com/AlexanderGardiner/webcut"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              imageWidth={1000}
              imageURL={"/portfolio/programmingProjects/Webcut.png"}
              imageAltText={"Photo of Webcut"}
            />
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              slimemouldsim
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaHtml5
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCss3Alt
                  className="scale-150 "
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaJs
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaNode
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
                <li>Developed a simplified simulation of slime mold behavior using HTML, CSS, and JavaScript.</li>
                <li>Optimized the simulation to efficiently run in the browser, handling up to around a million mold particles.</li>
                <li>Inspired by <a className="text-highlight dark:text-white hover:text-black dark:hover:text-highlight" href="https://cargocollective.com/sagejenson/physarum">Blog post by Sage Jenson</a>.</li>
              </ul>

            <a
              href="https://github.com/AlexanderGardiner/Slime-Mould"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>

            <ProgrammingProject
              imageWidth={700}
              imageURL={"/portfolio/programmingProjects/SlimeMould.png"}
              imageAltText={"Photo of Slime Mould Simulation"}
            />
          </li>

          <li className="mb-10 ml-6 mt-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Octo Lib
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaJava
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed a custom library for FRC Team 9084, including swerve drive code with odometry and pose estimation.</li>
              <li>Implemented utility classes for motor initialization, as well as math and gyro operations, simplifying robot code development.</li>
              <li>Designed the library to improve maintainability, reusability, and overall performance of the team's robot software.</li>
            </ul>
            <a
              href="https://github.com/Octobots9084/Octo-Lib-Dev"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>

            <YoutubePlayer
              src={
                "https://www.youtube.com/embed/2QfuSLlCeY8?si=dsth_N_hNHbxokwp"
              }
            />
          </li>

          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              issuetracker
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaHtml5
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCss3Alt
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaJs
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaNode
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <h5 className="text-lg mr-3 text-highlight font-bold">Express</h5>
              <h5 className="text-lg text-highlight font-bold">MongoDB</h5>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed a customizable web-based project management program with an HTML, JS, and CSS frontend and Node.js (Express) backend.</li>
              <li>Implemented user authentication with Passport and data storage using MongoDB.</li>
              <li>Enabled features including custom projects, file uploads, and user management for collaborative project tracking.</li>
            </ul>
            <a
              href="https://github.com/AlexanderGardiner/IssueTracker"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              imageWidth={1000}
              imageURL={"/portfolio/programmingProjects/IssueTracker.png"}
              imageAltText={"Photo of Issue Tracker"}
            />
          </li>

          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              octoscout2023
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaHtml5
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCss3Alt
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaJs
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaNode
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <h5 className="text-lg mr-3 text-highlight font-bold">Express</h5>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed a customizable web-based scouting system for FRC Team 9084 for the 2023 "Charged Up" competition.</li>
              <li>Built a web user interface for inputting match data, which is uploaded to a server for collection.</li>
              <li>Stored data as CSV files to enable easy analysis and support team strategy decisions.</li>
            </ul>
            <a
              href="https://github.com/AlexanderGardiner/octo-scout"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              imageWidth={250}
              imageURL={"/portfolio/programmingProjects/OctoScout2023.png"}
              imageAltText={"Photo of Octo Scout"}
            />
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              electromagneticparticlesim
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaHtml5
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCss3Alt
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaJs
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed a particle simulation as an AP Physics final project using HTML Canvas, JavaScript, and CSS.</li>
              <li>Implemented programmable particle charges and sizes, simulating electric and magnetic fields.</li>
              <li>Built the simulation from scratch, demonstrating fundamental physics principles interactively in the browser.</li>
            </ul>
            <a
              href="https://github.com/AlexanderGardiner/electromagneticparticlesim"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              imageWidth={1000}
              imageURL={
                "/portfolio/programmingProjects/ElectromagneticParticles.png"
              }
              imageAltText={"Photo of Electromagnetic Particle Simulator"}
            />
          </li>

          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              platformerv2
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaHtml5
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCss3Alt
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaJs
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed a platformer game from scratch using HTML Canvas, JavaScript, and CSS.</li>
              <li>Implemented level loading and tracking of player times, with data uploaded to a server for competition among friends.</li>
              <li>Created an engaging game that was widely played and fostered friendly competition for fastest times.</li>
            </ul>
            <a
              href="https://github.com/AlexanderGardiner/Platformerv2"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              imageWidth={1000}
              imageURL={"/portfolio/programmingProjects/Platformerv2.png"}
              imageAltText={"Photo of Platformerv2"}
            />
          </li>
        </ol>
      </div>
    </div>
  );
}
