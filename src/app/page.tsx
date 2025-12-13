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
              I&apos;m a dual major at UC Davis in Computer Science &
              Engineering and Cinema & Digital Media. I&apos;ve been programming
              for 9 years and contributed to AI research, including a published
              IEEE paper on speech classification.
              <br />
              <br />
              I&apos;ve been shooting and editing videos for 4 years, producing
              projects like a promotional video for Dos Pueblos High School and
              a feature on a local fire station.
              <br />
              <br />
              I apply my technical skills in hands-on organizations,
              participating in CodeLab at UC Davis as well as continuing to
              build my skills through side projects.
              <br />
              <br />
              This site showcases my programming and video work, highlighting
              both technical expertise and creative storytelling.
            </p>
          </div>
          <div className="text-center flex items-center w-2xl max-w-3xl mx-auto lg:ml-20">
            <Image
              className="p-5 shadow-xl w-full rounded-full"
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
