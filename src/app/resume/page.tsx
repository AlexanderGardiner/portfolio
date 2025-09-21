import Image from 'next/image';

export default function Resume() {
  return (
    <div className="flex justify-center items-start mt-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[120vh]">
        <div className="flex justify-center items-center max-h-[80vh]">
          <Image
            src="/ComputerScienceResume.png"
            alt="Computer Science Resume"
            className="max-h-full w-auto object-contain rounded-lg shadow-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex justify-center items-center max-h-[80vh]">
          <Image
            src="/MediaResume.png"
            alt="Media Resume"
            className="max-h-full w-auto object-contain rounded-lg shadow-lg"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}