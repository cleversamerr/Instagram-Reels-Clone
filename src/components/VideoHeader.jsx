import React from "react";
import { ArrowBackIos, CameraAltOutlined } from "@material-ui/icons";
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
