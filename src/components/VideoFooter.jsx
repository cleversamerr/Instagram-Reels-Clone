import React from "react";
import { Button, Avatar } from "@mui/material";
import { MusicNote } from "@mui/icons-material";
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

      <div className="video-card__footer-ticker">
        <MusicNote className="video-card__footer-icon" />
      </div>
    </div>
  );
}

export default VideoFooter;
