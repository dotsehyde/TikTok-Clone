import React from "react";
import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className="main">
      <div className="videoFooterText">
        <h3>@username</h3>
        <p>This is a description</p>
      </div>
      <img
        className="cd-spin"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Blank_cd.png"
        
        alt="cd"
      />
    </div>
  );
}

export default VideoFooter;
