import Image from "next/image";
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
              <br />
              <br />
              I&apos;m a student at UC Davis majoring in Computer Science. I&apos;ve
              been programming for 10 years and
              contributed to AI research, including a published IEEE paper on
              speech classification.
              <br />
              <br />
              I&apos;ve been shooting and editing videos for 5 years, producing
              projects like a promotional video for Dos Pueblos High School and
              a feature on a local fire station.
              <br />
              <br />
              I apply my technical skills through work at a marketing startup called
              Clove Agency as well as leading CodeLab at UC Davis as
              Vice President of Infrastructure while continuing to build my
              skills through side projects.
              <br />
              <br />
              This site showcases my programming and video work, highlighting
              both technical expertise and creative storytelling.
            </p>
          </div>
          <div className="text-center flex items-center w-2xl max-w-3xl mx-auto lg:ml-20">
            <Image
              className="shadow-xl border-4 border-white w-full rounded-full"
              src="/AlexGardiner.jpeg"
              alt="Photo of Alex Gardiner"
              width={3000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
