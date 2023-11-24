export default function Home() {
  return (
    <div className="flex h-screen justify-center mt-16">
      <div className="w-full">
        <h1 className="text-6xl font-bold text-center">About Me</h1>
        <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center w-full">
          <div className="text-center flex items-center w-3xl max-w-3xl mx-auto mr-20">
            <p className="text-xl font-medium my-5">
              Hi, I&apos;m Alex Gardiner. I&apos;m currently attending Dos Pueblos High School in Goleta. This website showcases my portfolio, as well as my resume. It focuses on the two primary skills I have been building, programming and video production. I have been programming for over 7 years in various different programming languages (see my Resume). I have been shooting and editing videos for around 3 years, and during this time I have attended various video production conferences, and contests, and have received awards for my work.
            </p>
          </div>
          <div className="text-center flex items-center w-3xl max-w-3xl mx-auto ml-20">
            <img 
              className="p-5 shadow-xl w-full rounded-full"
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="Photo of Alex Gardiner"
            />  
          </div>
        </div>
      </div>
    </div>
  );
}
