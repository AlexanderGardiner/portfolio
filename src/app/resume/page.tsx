export default function Portfolio() {
  return (
    
    <div className="flex flex-col items-left justify-center mt-16">
      <div className="w-4/5 flex flex-col items-left justify-left mx-auto">
        <div className="w-full md:w-full text-center flex flex-col justify-center">
          <h1 className="text-5xl font-bold">My Resume</h1>
          <div className="flex grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-left justify-left text-3xl font-bold py-10">Experience</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
              

              <li className="text-left justify-left mb-10 ml-6">            

                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">First Robotics Competition (FRC) team</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2022 - Current Time</time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">&emsp; I joined my school&apos;s FRC team (The Octobots, team number 9084) when it was created at the start of the school year in 2022 (my sophmore year), I was on the software part of the team which used java. I initally worked on a project to get encoders (rotational position sensors) implemented. I quickly finished that project, and soon after, the FRC season started. <br></br>&emsp;Each FRC season (once a year) there is a &quot;game&quot; that is announced, that you have to build and code a robot for in 6 weeks. I was one of the primary programmers for the bot, and implemented Swerve Drive (Swerve Drive is where the wheels can rotate in 360 degrees and can also drive forward and backward). I also helped implemented closed loop position control on our motors for multiple &quot;arms&quot; on the robot. I coded a custom scouting tool in HTML, CSS and JS, to record data for matched for later data analysis. I additionally built a google sheet with weights for each category we collected, which allowed us to determine which teams to select during alliance selection. During the season we competed in two competitions, and qualified for Championships in Texas. By this point I had been promoted to a co-software lead. At Championships we made it to the semifinals before we were unfortunately eliminated.   <br></br><br></br>&emsp;We took a short break, before starting offseason projects. I coded a custom Swerve library from scratch (before we had been using one supplied to us by FRC), it also included odometry (position estimates of the robot on the field from encoder readings from the wheels). I also coded a motor wrapper class for two motors that allows them to be setup much more easily. <br></br>&emsp; After these projects, school started back up, and we returned to regular meetings. I, along with the other software co-lead, setup offseason teams, and set them working on training projects, including further swerve research, vision research (FRC puts apriltags on the field for pose estimation), along with subsystem training.</p>
                  <a href="https://teamoctobots.org" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to The Octobots website</a>
                  <a href="https://firstinspires.org" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700 mx-3">Link to The FRC website</a>

              </li>

              <li className="text-left justify-left mb-10 ml-6">            

                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">DPNews Media Program</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2021 - Current Time</time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">&emsp; I joined the program at the start of my Freshman year in high school. My first year, I shot and edited various video projects for our daily livestreamed news show. However, unfortunately due to scheduling conflicts I was unable to work directly on the livestream my first year, however I aquired experience in editing in Premiere Pro, and DaVinci Resolve, as well as improving my skill with cameras, audio equipment, and cinematography.<br></br>&emsp;My second year in DPNews I resolved my scheduling conflict, and worked on the daily show. I gained lots of exerience in many different roles including switcher, audio, graphics, media, floor director, camera operator. That year for our equipment we used a TC-Mini, made by NewTek for our Tricaster (with livepanel for graphics), an x32 Behringer audio board, livestream studio for media, and we used various blackmagic cameras.<br></br>&emsp;At the start of my third year in DPNews, I was promoted to leadership. We moved into a new building, and I was one of the main contributers to the replication of our streaming setup from our previous location. A little after that, we bought a new tricaster (TC-1, from NewTek), and I along with one other leader, pioneered our livestreaming using it. We additionally reworked our workflow to streamline the livestreaming process, we implemented macros for graphics switching as well as ...  </p>
                  <a href="https://dpnews.org/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to The DPNews website</a>

              </li>
            </ol>
          </div>

          <div>
            <h1 className="text-left justify-left text-3xl font-bold pt-10">Skills</h1>
            <h1 className="text-left justify-left text-2xl font-bold py-5">Programming</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• Javascript</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I am extremely familiar with javascript, and have used it for most of my programming projects, due to them mostly being web based. I have coded completely from scratch, as well as utilizing librarie, like passport.js, and three.js.</p>
              </li>

              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• HTML/CSS</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I am quite familiar with HTML/CSS, and have used it for the frontend of the majority of my programming projects, due to most of them being web based. I have also implemented css frameworks including tailwind (combined with next.js).</p>
              </li>
              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• Java</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I have a very large amount of knowledge on java. I have been programming in java for my school&apos;s First Robotics Competition (FRC) team for 2 years now, and I also took the AP Computer Science exam and recieved the maximum score of 5.</p>
              </li>
              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• Python</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I am very familiar with python, and have used it for a number of small programming projects, mostly involving data processing.</p>
              </li>
              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• C/C++</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I have some experience with C++, but I have not used it to build any major programming projects, so my knowledge of it is not quite as extensive as other programming languages I know.</p>
              </li>
              
            </ol>

            <h1 className="text-left justify-left text-2xl font-bold py-5">Video Production</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• Javascript</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I am extremely familiar with javascript, and have used it for most of my programming projects, due to them mostly being web based. I have coded completely from scratch, as well as utilizing librarie, like passport.js, and three.js.</p>
              </li>

              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• HTML/CSS</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I am quite familiar with HTML/CSS, and have used it for the frontend of the majority of my programming projects, due to most of them being web based. I have also implemented css frameworks including tailwind (combined with next.js).</p>
              </li>
              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• Java</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I have a very large amount of knowledge on java. I have been programming in java for my school&apos;s First Robotics Competition (FRC) team for 2 years now, and I also took the AP Computer Science exam and recieved the maximum score of 5.</p>
              </li>
              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• Python</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I am very familiar with python, and have used it for a number of small programming projects, mostly involving data processing.</p>
              </li>
              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">• C/C++</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I have some experience with C++, but I have not used it to build any major programming projects, so my knowledge of it is not quite as extensive as other programming languages I know.</p>
              </li>
              
            </ol>
          </div>
          </div>

        </div>
      </div>
    </div>
      
    
  );
}
