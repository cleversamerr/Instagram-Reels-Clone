import React from "react";
import { Button, Avatar } from "@material-ui/core";
import "../css/video-footer.css";

function VideoFooter({ channel, avatarSrc, song, likes, shares }) {
  return (
    <div className="video-card__footer">
      <div className="video-card__footer-text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} ●<Button>Follow</Button>
        </h3>
      </div>
    </div>
  );
}

export default VideoFooter;
