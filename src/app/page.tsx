export default function Home() {
  return (
    <div className="flex h-screen justify-center mt-16">
      <div className="w-full">
        <h1 className="text-6xl font-bold text-center">About Me</h1>
        <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center w-full my-10 px-10">
          <div className="text-center flex items-center w-2xl max-w-2xl mx-auto lg:mr-20">
            <p className="text-xl font-medium my-5">
              <span className="text-4xl text-highlight font-bold">
                Hi, I&apos;m Alex Gardiner.
              </span>
              <br></br>
              <br></br>
              I&apos;m currently attending Dos Pueblos High School in Goleta.
              This website showcases my portfolio, as well as my resume. It
              focuses on the two primary skills I have been building,
              programming and video production. I have been programming for over
              8 years in various different programming languages (see my
              Resume). I have been shooting and editing videos for around 3
              years, and during this time I have attended various video
              production conferences, and contests, and have received awards for
              my work.
            </p>
          </div>
          <div className="text-center flex items-center w-2xl max-w-2xl mx-auto lg:ml-20">
            <img
              className="p-5 shadow-xl w-full rounded-full"
              src="/AlexGardiner.png"
              alt="Photo of Alex Gardiner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
