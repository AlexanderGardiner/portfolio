"use client"
import { useState, useEffect, FC} from 'react';
import Image from 'next/image'
interface programmingProjectProps {
    iframePort: string,
    iframePath: string,
    imageURL: string,
    imageAltText: string,
    imageWidth: number,
    onVisibilityChange: (isVisible: boolean) => void;
}
const ProgrammingProject: FC<programmingProjectProps> = ({iframePort, iframePath, imageWidth, imageURL, imageAltText, onVisibilityChange}) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        onVisibilityChange(!isVisible);
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        // If the iframe becomes visible, create it
        if (isVisible) {
          const iframe = document.createElement('iframe');
          iframe.src = `http://localhost:${iframePort}/${iframePath}`;
          iframe.className = `fixed w-screen top-0 right-0 h-screen visible z-40`;
          document.body.appendChild(iframe);
        
          const backgroundDiv = document.createElement('div');
          backgroundDiv.className = `absolute top-0 left-0 w-screen h-screen bg-white opacity-100 visible z-20`;
          document.body.appendChild(backgroundDiv);

          const exitButton = document.createElement('button');
          exitButton.className = `visible hover:scale-105 bottom-0 right-0 fixed w-30 text-2xl m-5 p-5 bg-highlight rounded-full z-50`;
          exitButton.onclick = toggleVisibility;
          exitButton.innerHTML = "Exit Project"
          document.body.appendChild(exitButton);

          
          return () => {
            document.body.removeChild(iframe);
            document.body.removeChild(backgroundDiv);
            document.body.removeChild(exitButton);
          };
        }
      }, [isVisible, iframePort, iframePath]);
    return (
        <div className="relative">
            <a
                className="group flex flex-col items-center"
                href={`http://localhost:${iframePort}/`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    toggleVisibility();
                  }}
            >
                <Image
                    src={imageURL}
                    alt={imageAltText}
                    width={imageWidth}
                    height={1000}
                    className={`h-44 md:h-full p-5 w-auto dark:shadow-white-800 shadow-xl hover:scale-105 z-5`}
                    />

            </a>
        </div>
    )
};

export default ProgrammingProject;