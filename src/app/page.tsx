export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen mt-10 mx-10">
      <h1 className="text-5xl font-bold my-5 text-center">About Me</h1>
      <div className="flex flex-col lg:flex-row text-center my-5">
        <p className="text-xl font-medium my-5 w-full lg:w-1/3 mx-auto">
          Hi, I&apos;m Alex Gardiner. I&apos;m currently attending Dos Pueblos High School in Goleta. This website showcases my portfolio, as well as my resume. It focuses on the two primary skills I have been building, programming and video production. I have been programming for over 7 years in various different programming languages (see my Resume). I have been shooting and editing videos for around 3 years, and during this time I have attended various video production conferences, and contests, and have received awards for my work.
        </p>
        <div className="max-w-2xl items-center">
          <img
            className="p-5 shadow-xl w-full rounded-full"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Photo of Alex Gardiner"
          />
        </div>
      </div>
    </div>
  );
}
