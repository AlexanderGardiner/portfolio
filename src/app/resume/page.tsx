import Image from "next/image";
import PDFViewer from "../components/pdfEmbed";

export default function Resume() {
  return (
    <div className="flex justify-center items-start mt-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[120vh]">
        {/* Programming Section */}
        <div className="flex flex-col justify-center items-center max-h-[85vh]">
          <h1 className="mb-4 text-2xl font-bold">Programming</h1>
          <PDFViewer pdfSRC="/ComputerScienceResume.pdf" />
          {/* <Image
            src="/ComputerScienceResume.png"
            alt="Computer Science Resume"
            className="max-h-full w-auto object-contain rounded-lg shadow-lg"
            width={1000}
            height={1000}
          /> */}
        </div>

        {/* Video Production Section */}
        <div className="flex flex-col justify-center items-center max-h-[85vh]">
          <h1 className="mb-4 text-2xl font-bold">Video Production</h1>
          <PDFViewer pdfSRC="/ComputerScienceResume.pdf" />
          {/* <Image
            src="/MediaResume.png"
            alt="Media Resume"
            className="max-h-full w-auto object-contain rounded-lg shadow-lg"
            width={1000}
            height={1000}
          /> */}
        </div>
      </div>
    </div>
  );
}
