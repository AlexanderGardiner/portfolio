import { FaCamera, FaCut, FaVolumeUp, FaUser } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="mt-16 text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold pb-2 pt-0 mx-4 text-center max-w-[70vw]">
        My Video Production Projects
      </h1>
      <h2 className="text-1xl">
        Demo Reel Available Upon Request
      </h2>
      <hr className="w-2/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-highlight"></hr>
      <div className="w-72 md:w-screen flex items-center justify-center py-5 max-w-2xl">
        <ol className="w-full relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Dos Pueblos High School Promotional Video
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2025
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Directed and edited a 6-minute promotional video for Dos Pueblos High School, featured on the school website.</li>
              <li>Managed a multi-month production, coordinating with students, staff, and faculty to capture academics, arts, and athletics.</li>
              <li>Produced a narrative-driven project featuring 15+ student testimonials, highlighting the school’s inclusive culture and diverse opportunities.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1tK1TEAs4G2Cwy3EP0G1IsNsnWo0hJrUw/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Killer B Fitness Promotional Video
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2025
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Directed a promotional video showcasing the dynamic atmosphere and community-focused classes of a local gym.</li>
              <li>Developed a marketing asset that drove membership sign-ups and increased local brand awareness.</li>
            </ul>


            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1mVgZbIPqO2d9onQD0zoNFsKhJMCASQnA/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Student Television Network Convention Promo
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2025
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a promotional video for the STN Convention Promo Category, earning 4th place in one of the most competitive categories.</li>
              <li>Produced the project over 72 hours during the convention, capturing the theme of “so much drama” through dynamic storytelling and visuals.</li>
              <li>Served as primary cinematographer using the FX3, capturing dramatic and visually engaging footage.</li>
              <li>Acted as primary editor and scriptwriter, shaping narrative, pacing, and dramatic emphasis throughout the video.</li>
              <li>Handled tracking for on-screen text, integrating graphics seamlessly into the footage for a professional finish.</li>
            </ul>

            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1TPRWAm7x-L81u1ENtWzbBgt1zt_ja2n8/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Feature on Local Fire Station
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2025
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Produced a video showcasing a fire station’s commitment to community service.</li>
              <li>Crafted a compelling narrative emphasizing the strong connection between firefighters and the community they serve.</li>
            </ul>

            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1iNprksOZd2MlgvzHVQpHQB5xbvo2FIqv/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Student Television Network Convention - Crazy 8s 
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2025
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a morning show for the 2025 STN Convention, earning 4th place. <a className="text-highlight hover:text-white" href="https://www.stnconvention.com/">Link</a></li>
              <li>Primary editor for the assembly of the show and created all graphics independently, including segment transitions, intro, and outro.</li>
              <li>Produced the show under tight 8-hour convention deadlines, demonstrating efficiency.</li>
              <li>Enhanced the broadcast’s visual identity through creative and cohesive graphic design handled entirely solo.</li>
            </ul>

            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/19mUayc-FY8rWSnDd4CfMbq9Tu4MSkgXc/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Dos Pueblos High School Short Promo
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2025
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Directed and edited a 1-minute mini version of the Dos Pueblos High School promotional video.</li>
              <li>Condensed a multi-month production into a concise, script-driven format while highlighting academics, arts, and athletics.</li>
              <li>Produced a tightly structured narrative emphasizing the school’s culture and diverse opportunities.</li>
            </ul>

            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1pwEJqE89nthTZw3yqEONC8QUeUF-Z7RO/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Student Television Network Convention - Crazy 8s
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Contributed to a morning show for the 2024 STN Convention. <a className="text-highlight hover:text-white" href="https://www.stnconvention.com/">Link</a></li>
              <li>Worked as part of the DPNews team of ~30 students from high school, producing the show in just 8 hours.</li>
              <li>Served on the intro and graphics team, designing all on-screen graphics, segment transitions, and the show’s intro and outro.</li>
              <li>Enhanced the visual identity of the broadcast through creative and cohesive graphic design under tight deadlines.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/19ziBBRtEH7nofOq1hEvMvvtiufRDzxb_/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Wet Wednesdays
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Produced a video showcasing a local sailing competition, “Wet Wednesdays.”</li>
              <li>Served as one of the cinematographers, capturing dynamic sailing footage and event highlights.</li>
              <li>Worked as one of the editors, assembling the footage into a cohesive and engaging story.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1R49ScbuwRGJdS5hNmUFSWalQ7dbYf8Qy/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              STN Convention - Nat Package
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a Nat Package for the 2024 STN Convention. <a className="text-highlight hover:text-white" href="https://www.stnconvention.com/">Link</a></li>
              <li>Produced the package in 6 hours total—3 hours for filming and 3 hours for editing—demonstrating speed and efficiency.</li>
              <li>Served as one of the primary cameramen and one of the primary editors, contributing to both production and post-production.</li>
              <li>Adhered to category rules by using only interviews and natural audio, without stand-ups.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1yIszH-f0OACV3ISTXHcp2GrDqtALeYpu/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Ultimate Frisbee Team
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Edited a video package showcasing the community around the local ultimate frisbee team. <a className="text-highlight hover:text-white" href="https://www.sbyouthultimate.org/">Link</a></li>
              <li>Served as the primary editor, shaping footage into a cohesive and engaging story over the course of a few days during high school.</li>
              <li>Focused entirely on post-production, delivering polished visuals and storytelling without involvement in filming.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1D0K3ISv_eCBsW9N8-NHzcFRjaM96QUjn/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              STN Convention Practice - Nat Package
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a Nat Package as practice for the 2024 STN Convention. <a className="text-highlight hover:text-white" href="https://www.stnconvention.com/">Link</a></li>
              <li>Filmed and edited the package in approximately 6 hours, demonstrating speed and efficiency under tight time constraints.</li>
              <li>Served as one of the primary cameramen and the primary editor, handling all key aspects of production.</li>
              <li>Produced content using only interviews and natural audio, adhering to category rules prohibiting stand-ups.</li>
            </ul>

            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1hAdSbs-anZhddJMQ5Mu1sA5AEcjboE2R/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              STN Fall Nationals - Mobile Journalism
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a 60-second vertical news story for the STN Fall Nationals Contest. <a className="text-highlight hover:text-white" href="https://studenttelevision.com/fall-nationals/">Link</a></li>
              <li>Filmed over 2 days and edited in a few days during high school, demonstrating efficient production and post-production skills.</li>
              <li>Served as one of the primary cameramen and the primary editor, overseeing all aspects of visual storytelling.</li>
              <li>Won first place, highlighting excellence in content creation and adherence to contest constraints.</li>
            </ul>

            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1KJXEDVrDswzGcsBE26JhmUnEUgTyDxRl/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              DPNews Intro
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a short intro for the high school news program, featured on the daily news show throughout 2023. <a className="text-highlight hover:text-white" href="https://dpnews.org/">Link</a></li>
              <li>Showcased daily life at the school as well as the news program itself through engaging visuals and editing.</li>
              <li>Designed an attention-grabbing opening sequence that set the tone for the broadcast and highlighted key aspects of student life.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1RGpNQnXHQ61EV5G48e1iSNhtzhnlIC1Z/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              STN Convention 30 second PSA
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a PSA in the High School category for the 2023 STN Convention. <a className="text-highlight hover:text-white" href="https://www.stnconvention.com/general-contest-winners/">Link</a></li>
              <li>Written, filmed, and edited in under 12 hours, demonstrating rapid content creation and time management.</li>
              <li>Served as primary cameraman, scriptwriter, and editor, handling all major aspects of production.</li>
              <li>Produced a competitive submission in a category allowing only one entry per school, judged among over 3,000 student attendees.</li>
              <li>Received an honorary mention (4th Place) for quality and creativity under tight constraints.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1T6jTrX7DxPd_MHriA07tlbizdXdZfmNp/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              STN Challenge - Commercial
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a 30-second commercial for the STN Challenge Contest. <a className="text-highlight hover:text-white" href="https://studenttelevision.com/stn-challenge-main">Link</a></li>
              <li>Filmed in approximately 2 hours and edited in about a day during high school, demonstrating rapid production and post-production skills.</li>
              <li>Served as primary cameraman and primary editor, overseeing all visual and technical aspects of the project.</li>
              <li>Promoted a app mockup while integrating a clear, memorable catchphrase to meet contest requirements.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1Zw4oFfKx9G8pl38uP-YDsZ9VpPTU0X-n/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              STN 60 second Horrorfest Contest
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a 60-second horror short for the STN Horrorfest Contest. <a className="text-highlight hover:text-white" href="https://studenttelevision.com/sixty-second-horrorfest/">Link</a></li>
              <li>Filmed and edited over approximately 2 weeks during high school, managing both production and post-production.</li>
              <li>Served as one of the primary cameramen and the primary editor, crafting suspenseful visuals and pacing.</li>
              <li>Integrated contest requirements, including a key line of dialogue, a public domain film clip, and a mirror element.</li>
            </ul>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1HniKviLjajNwXm2XqhAtv3mrxMfaJ88U/preview"
            ></iframe>
          </li>
          
          

          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              STN Challenge - Nat Sound
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022
            </time>
            <div className="flex items-center my-4">
              <div className="pr-6">
                <FaCamera
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaCut
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
              <div className="pr-6">
                <FaVolumeUp
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Created a video package for the 2022 STN Challenge under the "Nat Sound" category.</li>
              <li>Produced content for the prompt "Rhythm of the Street," highlighting a local musician performing at a nearby marketplace.</li>
              <li>Served as one of the primary videographers, capturing authentic street performances and ambient sounds.</li>
              <li>Worked as one of the primary editors, assembling footage to emphasize rhythm, mood, and storytelling.</li>
              <li>Showcased the vibrancy of an individual musician through audiovisual storytelling and natural sound design.</li>
            </ul>

            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1r0tJbvFHotFWlEfNwEYAwpry3s0akEIE/preview"
            ></iframe>
          </li>
        </ol>
      </div>
    </div>
  );
}
