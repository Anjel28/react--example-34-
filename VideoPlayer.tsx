import React, { useRef } from 'react';

const VideoPlayer:React.FC=() =>{
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayPaused = () => {
        if(videoRef.current){
         if(videoRef.current.paused){
            videoRef.current.play();
         }
         else{
            videoRef.current.pause();
         }
        }
    }

    return(
        <div>
            <video ref={videoRef} src="your_video_url.mp4" width="400" />
            <button onClick={handlePlayPaused}>Play/Pause</button>
        </div>
    )
}

export default VideoPlayer;