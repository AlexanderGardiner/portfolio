"use client";
import ProgrammingProject from "@/app/components/programmingProject";
import YoutubePlayer from "@/app/components/youtubePlayer";
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaJava } from "react-icons/fa";

export default function Page() {
  const [isProgrammingProjectVisible, setProgrammingProjectVisible] =
    useState(false);

  return (
    <div
      className={`${
        isProgrammingProjectVisible ? "overflow-hidden fixed" : "overflow-show"
      } flex flex-col items-center z-10 `}
    >
      <h1 className="mt-16 text-6xl md:text-6xl font-bold pb-5 pt-0 text-center">
        My Programming Projects
      </h1>
      <hr className="w-2/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-highlight"></hr>
      <div className="flex items-center justify-center py-5 max-w-2xl">
        <ol className="w-72 md:w-screen relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              octoscout2024
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              This project is the updated version of the custom scouting system
              developed for FRC Team 9084, tailored for the 2024 game. This
              iteration builds on the foundation of its predecessor, enhancing
              data collection, storage, and analysis capabilities to provide an
              even more robust and efficient scouting solution. With a focus on
              data visualization using CanvasJS, octoscout2024 enabled the team
              to gain deeper insights into their performance and strategize more
              effectively.
            </p>
            <a
              href="https://github.com/AlexanderGardiner/OctoScout2024v2"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              onVisibilityChange={setProgrammingProjectVisible}
              iframePort={""}
              iframePath="octoscout2024"
              imageWidth={1000}
              imageURL={"/portfolio/programmingProjects/OctoScout2024.png"}
              imageAltText={"Photo of octoscout2024"}
            />
          </li>

          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              FRC Robot Code
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              First Robotics Competition robot code for team 9084&apos;s bot.
              Includes closed loop PID based motor control and computer vision
              code for April Tags, accurate localization within 10cm to around 5
              meters, as well as autonomous pathing. This year we pivoted to a
              community created swerve library for maintainability, as I would
              not be able to maintain my library after high school. We also
              added functionality to our robot, including trajectory calculation
              for gamepieces, and upgraded our motor control. (This code was put
              together by the team during the &quot;Crescendo&quot; game).
            </p>
            <a
              href="https://github.com/Octobots9084/Octave-2024"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <YoutubePlayer
              src={
                "https://www.youtube.com/embed/6uoF0Oa8oQY?si=bdPa5cSWNCSAIsBv"
              }
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A fully online video editor, made using Next.js, Tailwind CSS and
              FFmpeg. Includes many features including: cutting clips, setting
              in and out points of clips, audio support, video resizing, video
              rotation, project saving, project loading and exporting at full
              quality.
            </p>
            <a
              href="https://github.com/AlexanderGardiner/webcut"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              onVisibilityChange={setProgrammingProjectVisible}
              iframePort={""}
              iframePath="webcut"
              imageWidth={1000}
              imageURL={"/portfolio/programmingProjects/Webcut.png"}
              imageAltText={"Photo of Webcut"}
            />
          </li>
          <li className="h-96 md:h-full mb-52 ml-6 md:mb-0">
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              This project is a simplified simulation of slime mold behavior,
              implemented using HTML, CSS, and JavaScript. The primary challenge
              in developing this simulation was optimizing it to efficiently run
              in the browser, especially when handling a large number of agents.
              Inspired by this blog post:{" "}
              <a
                className="text-highlight dark:text-white hover:text-black dark:hover:text-highlight"
                href="https://cargocollective.com/sagejenson/physarum"
              >
                Blog post by Sage Jenson
              </a>
              . Optimized to have around a million mould particles running in
              the browser.
            </p>

            <a
              href="https://github.com/AlexanderGardiner/Slime-Mould"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>

            <ProgrammingProject
              onVisibilityChange={setProgrammingProjectVisible}
              iframePort={""}
              iframePath="slimemouldsim"
              imageWidth={350}
              imageURL={"/portfolio/programmingProjects/SlimeMould.png"}
              imageAltText={"Photo of Slime Mould Simulation"}
            />
          </li>

          <li className="mb-10 ml-6">
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A custom library for the First Robotics Competition, made for team
              9084. Includes custom swerve code with odometry and pose
              estimation. Also includes utility classes for motor initialization
              as well as math and gyro utility classes.
            </p>
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A customizable web-based project management program built with a
              HTML, JS and CSS frontend, and NodeJS (Express) backend.
              (Username: &quot;<span className="text-highlight">username</span>
              &quot;, Password: &quot;
              <span className="text-highlight">Password</span>&quot;) Uses
              MongoDB to store data and uses Passport for user authentication.
              Supports custom projects, file uploads, as well as user
              management.
            </p>
            <a
              href="https://github.com/AlexanderGardiner/IssueTracker"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              onVisibilityChange={setProgrammingProjectVisible}
              iframePort={""}
              iframePath="issuetracker"
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A customizable web-based scouting system for the First Robotics
              Competition. Made for team 9084. Made for the 2023 competition
              Charged Up. Data is inputted on a web user interface and uploaded
              to a server for collection, stored as csv files for easy data
              analysis.
            </p>
            <a
              href="https://github.com/AlexanderGardiner/octo-scout"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              onVisibilityChange={setProgrammingProjectVisible}
              iframePort={""}
              iframePath="octoscout2023"
              imageWidth={250}
              imageURL={"/portfolio/programmingProjects/OctoScout2023.png"}
              imageAltText={"Photo of Octo Scout"}
            />
          </li>

          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              FRC Robot Code
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              First Robotics Competition robot code for team 9084&apos;s bot.
              Includes closed loop PID based motor control and computer vision
              code for April Tags, as well as autonomous pathing. (This code was
              put together by the team during the &quot;Charged Up&quot; game).
              The code was rewritten during the offseason to implement my Swerve
              Library.
            </p>
            <a
              href="https://github.com/Octobots9084/Aluminati-2023"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <YoutubePlayer
              src={
                "https://www.youtube.com/embed/OwLbJpfCA3s?si=yBU1Pc3UzVIzWgdu"
              }
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A simulation of particles with programmable charges and sizes,
              written from scratch using HTML Canvas, JS, and CSS. Includes
              electric and magnetic field simulation.
            </p>
            <a
              href="https://github.com/AlexanderGardiner/electromagneticparticlesim"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              onVisibilityChange={setProgrammingProjectVisible}
              iframePort={""}
              iframePath="electromagneticparticlesim"
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Version 2 of a platformer written from scratch using HTML Canvas,
              JS, and CSS. This game was created when I was in High School, and
              played by a large number of my friends who competed for the
              fastest times. Includes level loading and previously uploaded user
              times to another server hosted by a friend.
            </p>
            <a
              href="https://github.com/AlexanderGardiner/Platformerv2"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-lg bg-highlight hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700"
            >
              Link to Github
            </a>
            <ProgrammingProject
              onVisibilityChange={setProgrammingProjectVisible}
              iframePort={""}
              iframePath="platformerv2"
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
