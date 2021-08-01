import React, { useRef,useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
     
    const [playing, setPlay] = useState(false)
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (playing) {
            
            videoRef.current.pause();
             setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }
  return (
    <div className="videoCard">
          <video
              ref={ videoRef}
              loop
             
              onClick={ onVideoPress}
        className="videoPlayer"
        src="https://v77.tiktokcdn.com/0831455cedbe8831356aa87aaea0160a/6107343a/video/tos/useast2a/tos-useast2a-pve-0068/bf298db798674e00bf7a3dfcc5158056/?a=1233&br=2816&bt=1408&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UsE79_4ka&l=202108011754240101902090841A16A7C7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3c5eDc6Zm9qNjMzNzczM0ApaTVnZTg3ZGQ1N2k2ZjNlZGdwcWMzcjRvbm9gLS1kMTZzcy1eNC1fMzEyNTAwYzUtNWE6Yw%3D%3D&vl=&vr="
          />
          <VideoFooter/>
    </div>
  );
}

export default Video;
