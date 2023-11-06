export default function Portfolio() {
  return (
    
    <div className="flex flex-col items-left justify-center mt-16">
      <div className="w-4/5 flex flex-col items-left justify-left mx-auto">
        <div className="w-full md:w-full text-center flex flex-col justify-center">
          <h1 className="text-5xl font-bold">My Resume</h1>
          <div className="flex grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-3xl font-bold py-10">Experience</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
              

              <li className="text-left justify-left mb-10 ml-6">            

                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Finance job</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 |  June - August</time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I did lots of work</p>
                  <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Company Site</a>
              </li>
            </ol>
          </div>

          <div>
            <h1 className="text-3xl font-bold py-10">Skills</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
              

              <li className="text-left justify-left mb-10 ml-6">            
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Finance job</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 |  June - August</time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I did lots of work</p>
                  <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Link to Company Site</a>
              </li>
            </ol>
          </div>
          </div>

        </div>
      </div>
    </div>
      
    
  );
}
