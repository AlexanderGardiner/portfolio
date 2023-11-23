export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="w-4/5 flex flex-col items-center justify-center mx-auto">
        <div className="w-full md:w-full mx-20 text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">My Portfolio</h1>
          
          <div className="grid lg:grid-cols-2 gap-4 justify-center items-center p-16 w-screen">
          <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold">Programming</h3>
              <a className="group flex flex-col items-center" href="portfolio/programming">
                <img
                  className="rounded-[150px] max-h-44 md:max-h-max w-5/5 md:w-4/5 aspect-video object-cover my-10 md:my-20 hover:scale-105"
                  src="/portfolio/ProgrammingPortfolio.png"
                  alt="Photo of Alex Gardiner"
                />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold">Video Production</h3>
              <a className="group flex flex-col items-center" href="portfolio/videoProduction">
                <img
                  className="rounded-[150px] max-h-44 md:max-h-max w-5/5 md:w-4/5 aspect-video object-cover my-10 md:my-20 hover:scale-105"
                  src="/portfolio/VideoPortfolio.png"
                  alt="Photo of Video Camera"
                />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
