"use client"
import { useState, useEffect, FC} from 'react';

interface programmingProjectProps {
    iframePort: string,
    imageURL: string,
    imageAltText: string,
    onVisibilityChange: (isVisible: boolean) => void;
}
const ProgrammingProject: FC<programmingProjectProps> = ({iframePort, imageURL, imageAltText, onVisibilityChange}) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        onVisibilityChange(!isVisible);
        setIsVisible(!isVisible);
    }

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
                <img
                        className="w-full md:w-5/5 p-5 max-w-3xl dark:shadow-white-800 shadow-xl hover:scale-105"
                        src={imageURL}
                        alt={imageAltText}
                    />
            </a>
            <iframe src={`http://localhost:${iframePort}/`} className={`w-screen top-0 right-0 aspect-video fixed ${isVisible ? 'visible' : 'invisible'} z-40`}></iframe>
            <button onClick={toggleVisibility} className={`${isVisible ? 'visible' : 'invisible'} hover:scale-105 z-40 bottom-0 right-0 fixed w-30 text-2xl m-5 p-5 bg-highlight rounded-full`}>Exit Project</button>
        </div>
    )
};

export default ProgrammingProject;