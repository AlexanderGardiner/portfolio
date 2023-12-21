import { FaCamera, FaCut, FaVolumeUp, FaUser } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="mt-16 text-6xl md:text-6xl font-bold pb-5 pt-0 text-center">
        My Video Production Projects
      </h1>
      <hr className="w-2/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-highlight"></hr>
      <div className="w-72 md:w-screen flex items-center justify-center py-5 max-w-2xl">
        <ol className="w-full relative border-l border-gray-200 dark:border-gray-700">
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A 60 second news story created for the STN Fall Nationals Contest{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://studenttelevision.com/fall-nationals/"
              >
                https://studenttelevision.com/fall-nationals/
              </a>
              , with the constraint of a vertical aspect ratio . This project
              was filmed over the course of 2 days and edited in a few days
              during High School. I was one of the primary cameramen and the
              primary editor.
            </p>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1KJXEDVrDswzGcsBE26JhmUnEUgTyDxRl/preview"
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A 30 second commercial created for the STN Challenge Contest{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://studenttelevision.com/stn-challenge-main"
              >
                https://studenttelevision.com/stn-challenge-main/
              </a>
              . This project was filmed in around 2 hours and edited in around a
              day during High School. I was the primary cameramen and the
              primary editor. The prompt was to promote an app that you created,
              and to include a clear catchphrase in the commercial.
            </p>
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A 60 second horror short film created for the STN Horrorfest
              Contest{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://studenttelevision.com/sixty-second-horrorfest/"
              >
                https://studenttelevision.com/sixty-second-horrorfest/
              </a>
              . This project was filmed and edited in around 2 weeks during High
              School. I was one of the primary cameramen and the primary editor.
              We had to include the line of dialogue &quot;Is it over?&quot;, a
              video from a horror film in the public domain, as well as a
              mirror.
            </p>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1HniKviLjajNwXm2XqhAtv3mrxMfaJ88U/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Lemon Festival
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
            </div>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A video package created to showcase the Lemon Festival.{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://lemonfestival.com/"
              >
                https://lemonfestival.com/
              </a>
              . Filmed and edited in around 2 weeks during High School. I was
              one of the primary cameramen. I filmed the pie eating at the
              beginning, and the second interview, along with various clips of
              broll. I was not very involved with the edit.
            </p>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1HeJkS-l8p1N0-SNmgoHU8LZpGGrExxr6/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Sea Glass and Ocean Arts Festival
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
            </div>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A video package created to showcase the Sea Glass and Ocean Arts
              Festival.{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://www.santabarbaraseaglassandoceanartsfestival.com/"
              >
                https://santabarbaraseaglassandoceanartsfestival.com/
              </a>
              . Filmed and edited in around 2 weeks during High School. I was
              one of the primary cameramen. I helped film the interviews, along
              with various clips of broll. I was not heavily involved with the
              edit.
            </p>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/15lLGzYhTUnhUlz-ggwVZ8_mxInMV3c1t/preview"
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A short intro created for the high school news program at my
              school. This intro played on the daily news show during 2023. It
              showcases life at my high school as well as the news program
              itself.{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://dpnews.org/"
              >
                https://dpnews.org/
              </a>
            </p>
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A PSA (Under the High School category) created during the 2023 STN
              Convention{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://www.stnconvention.com/general-contest-winners/"
              >
                https://stnconvention.com/
              </a>
              . Written, filmed and edited in less than 12 hours. I was the
              primary cameraman, script writer, and editor. More than 3000
              students attended the convention for their high schools. One
              submission was permitted to this category per school and this
              video won an honorary mention (4th Place).
            </p>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1T6jTrX7DxPd_MHriA07tlbizdXdZfmNp/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Waterwise Contest
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
              <div className="pr-6">
                <FaUser
                  className="scale-150"
                  style={{ color: "#6a84f4" }}
                  size={30}
                />
              </div>
            </div>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A 30 second PSA created for the Santa Barbara Waterwise video
              contest. WaterwiseSB is a regional partnership that aims to
              promote water use efficiency{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://waterwisesb.com/"
              >
                https://waterwisesb.com/
              </a>
              . I entered this yearly video contest and was the actor, as well
              as one of the editors for the project.
            </p>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1Q2zk6W6fZOlZEi68dEPN_nlRurtS5hZI/preview"
            ></iframe>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 bg-highlight"></div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              STN 60 second Horrorfest Contest
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A 60 second horror short film created for the STN Horrorfest
              Contest{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://studenttelevision.com/sixty-second-horrorfest/"
              >
                https://studenttelevision.com/sixty-second-horrorfest/
              </a>
              . This was filmed in around 2 hours. I was one of the primary
              editors, as well as the primary videographer. We had to include a
              box (the elevator was our box of choice), a line (&quot;Don&apos;t
              be scared, just come with me&quot;), and negative space.
            </p>
            <iframe
              className="w-full aspect-video"
              allowFullScreen
              src="https://drive.google.com/file/d/1sZHb3PolZdA1NPtRehYvuIupLM2aEgDM/preview"
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
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A video package created for the 2022 STN Challenge under the
              category of &quot;Nat Sound&quot;{" "}
              <a
                className="text-highlight hover:text-white"
                href="https://studenttelevision.com/stn-challenge-prompts"
              >
                https://studenttelevision.com/stn-challenge-prompts/
              </a>
              . The prompt was Rhythm of the Street and we chose to showcase a
              local musician who often played at a marketplace nearby. I was one
              of the primary videographers, and one of the primary editors.
            </p>
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
