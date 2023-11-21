import { FC } from "react";

interface youtubePlayerProps {
    src: string;
}
const YoutubePlayer: FC<youtubePlayerProps> = ({src}) => { 
    return ( 
        <div className="group flex flex-col items-center my-5" >
            <iframe className="w-5/5 aspect-video" width="560" height="315" src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </div>     
    ); } 
export default YoutubePlayer;