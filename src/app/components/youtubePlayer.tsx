import { FC } from "react";

interface YoutubePlayerProps {
  src: string;
}

const YoutubePlayer: FC<YoutubePlayerProps> = ({ src }) => {
  return (
    <div className="group flex flex-col items-center my-5 w-full max-w-4xl">
      <div className="w-full relative aspect-video">
        <iframe
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubePlayer;