"use client";
import { FC } from "react";
import Image from "next/image";

interface ProgrammingProjectProps {
  imageURL: string;
  imageAltText: string;
  imageWidth: number; 
}

const ProgrammingProject: FC<ProgrammingProjectProps> = ({
  imageWidth,
  imageURL,
  imageAltText,
}) => {
  return (
    <div className="relative w-full flex justify-center p-5">
      <Image
        src={imageURL}
        alt={imageAltText}
        width={imageWidth}
        height={1000}
        className="max-w-full h-auto max-h-[80vh] rounded-lg dark:shadow-white-800 shadow-xl"
      />
    </div>
  );
};

export default ProgrammingProject;