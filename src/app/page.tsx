export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <div className="w-4/5 flex flex-col items-center justify-center md:flex-row mx-auto">
        <div className="w-full md:w-1/2 px-20 text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold py-5">About Me</h1>
          <p className="text-xl font-medium py-5">  
            Hi, I'm Alex Gardiner. I'm currently attending Dos Pueblos High School in Goleta. This website showcases my portfolio, as well as my resume. It focuses on the two primary skills I have been building, programming and video production. I have been programming for over 7 years in various different programming languages (see my Resume). I have been shooting and editing videos for around 3 years, and during this time I have attended various video production conferences, and contests, and have recieved awards for my work.
          </p>
        </div>
        
        <img
          className="w-full md:w-1/2 p-5 ml-auto h-auto max-w-3xl rounded-full dark:shadow-white-800 shadow-xl"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="Photo of Alex Gardiner"
        />

      </div>
    </div>

  )
}

