import Image from 'next/image'
export default function Home() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://alexandergardiner.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Photo of Alex Gardiner" />
            <span className="self-center text-2xl text-lightModenavigationUnselectedPageColour font-semibold whitespace-nowrap dark:text-darkModenavigationUnselectedPageColour">Alex Gardiner</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="py-2 pl-3 pr-4 text-lightModeNavigationSelectedPageColour dark:text-darkModeNavigationSelectedPageColour md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/about" className="py-2 pl-3 pr-4 text-lightModenavigationUnselectedPageColour md:hover:text-lightModeNavigationSelectedPageColour md:p-0 dark:text-darkModenavigationUnselectedPageColour md:dark:hover:text-darkModeNavigationSelectedPageColour">About</a>
            </li>
            <li>
              <a href="/portfolio" className="py-2 pl-3 pr-4 text-lightModenavigationUnselectedPageColour md:hover:text-lightModeNavigationSelectedPageColour md:p-0 dark:text-darkModenavigationUnselectedPageColour md:dark:hover:text-darkModeNavigationSelectedPageColour">Portfolio</a>
            </li>
            <li>
              <a href="/contact" className="py-2 pl-3 pr-4 text-lightModenavigationUnselectedPageColour md:hover:text-lightModeNavigationSelectedPageColour md:p-0 dark:text-darkModenavigationUnselectedPageColour md:dark:hover:text-darkModeNavigationSelectedPageColour">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
