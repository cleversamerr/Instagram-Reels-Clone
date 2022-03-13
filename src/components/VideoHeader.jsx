import React from "react";
import { ArrowBackIos, CameraAltOutlined } from "@mui/icons-material";
import "../css/video-header.css";

function VideoHeader() {
  return (
    <div className="video-card__header">
      <ArrowBackIos />
      <h3>Reels</h3>
      <CameraAltOutlined />
    </div>
  );
}

export default VideoHeader;
