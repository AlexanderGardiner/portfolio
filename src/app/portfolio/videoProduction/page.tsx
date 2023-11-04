export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold pt-10 pb-5">My Video Production Projects</h1>
      <hr className="w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-highlight"></hr>
      <div className="flex items-center justify-center py-5 max-w-2xl">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
            

            <li className="mb-10 ml-6">            
                {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span> */}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">60 second Horrorfest Contest</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A 60 second horror short film created for the STN Horrorfest Contest. This project was filmed and edited in around 2 weeks during High School. I was one of the primary cameramen and the primary editor.</p>
                <video className="w-full" controls>
                    <source src="/portfolio/videoProjects/Horrorfest2023.mp4" type="video/mp4"></source>
                    Your browser does not support playing this video.
                </video>
            </li>
            <li className="mb-10 ml-6">            
                {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span> */}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Lemon Festival</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A video package created to showcase the Lemon Festival. <a className="text-highlight hover:text-white" href="https://lemonfestival.com/">https://lemonfestival.com/</a>. Filmed and edited in around 2 weeks during High School. I was one of the primary cameramen. I filmed the pie eating at the beginning, and the second interview, along with various clips of broll. I was not very involved with the edit.</p>
                <video className="w-full" controls>
                    <source src="/portfolio/videoProjects/LemonFestival.mp4" type="video/mp4"></source>
                    Your browser does not support playing this video.
                </video>
            </li>
            <li className="mb-10 ml-6">            
                {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span> */}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Sea Glass and Ocean Arts Festival</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A video package created to showcase the Sea Glass and Ocean Arts Festival. <a className="text-highlight hover:text-white" href="https://www.santabarbaraseaglassandoceanartsfestival.com/">https://santabarbaraseaglassandoceanartsfestival.com/</a>. Filmed and edited in around 2 weeks during High School. I was one of the primary cameramen. I helped film the interviews, along with various clips of broll. I was not heavily involved with the edit.</p>
                <video className="w-full" controls>
                    <source src="/portfolio/videoProjects/SeaGlassAndOceanArt.mp4" type="video/mp4"></source>
                    Your browser does not support playing this video.
                </video>
            </li>
            <li className="mb-10 ml-6">            
                {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span> */}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">DPNews Intro</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A 60 second horror short film created for the STN Horrorfest Contest.</p>
                <video className="w-full" controls>
                    <source src="/portfolio/videoProjects/DPNewsIntro2023.mp4" type="video/mp4"></source>
                    Your browser does not support playing this video.
                </video>
            </li>
            <li className="mb-10 ml-6">            
                {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span> */}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">STN Convention 30 second PSA</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A PSA (Under the High School category) created during the 2023 STN Convention <a className="text-highlight hover:text-white" href="https://www.stnconvention.com/general-contest-winners/">https://stnconvention.com/</a>. Written, filmed and edited in less than 12 hours. I was the primary cameraman and the primary editor. More than 3000 students attended the convention for their high schools. One submission was permitted to this category per school and this video won an honorary mention (4th Place).</p>
                <video className="w-full" controls>
                    <source src="/portfolio/videoProjects/STNConventionPSA.mp4" type="video/mp4"></source>
                    Your browser does not support playing this video.
                </video>
            </li>
            <li className="mb-10 ml-6">            
                {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span> */}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Waterwise Contest</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A 60 second horror short film created for the STN Horrorfest Contest.</p>
                <video className="w-full" controls>
                    <source src="/portfolio/videoProjects/Waterwise2023.mp4" type="video/mp4"></source>
                    Your browser does not support playing this video.
                </video>
            </li>
            <li className="mb-10 ml-6">            
                {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span> */}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">60 second Horrorfest Contest</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A 60 second horror short film created for the STN Horrorfest Contest.</p>
                <video className="w-full" controls>
                    <source src="/portfolio/videoProjects/Horrorfest2022.mp4" type="video/mp4"></source>
                    Your browser does not support playing this video.
                </video>
            </li>
            <li className="mb-10 ml-6">            
                {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span> */}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">STN Challenge - Nat Sound</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A 60 second horror short film created for the STN Horrorfest Contest.</p>
                <video className="w-full" controls>
                    <source src="/portfolio/videoProjects/STNChallengeNatSound.mp4" type="video/mp4"></source>
                    Your browser does not support playing this video.
                </video>
            </li>
        </ol>
      </div>
    </div>
    )
}