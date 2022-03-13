import React, { useState } from "react";

function Video({ url }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const onVideoPress = (event) => {
    setIsVideoPlaying(!isVideoPlaying);
    return isVideoPlaying
      ? event.currentTarget.pause()
      : event.currentTarget.play();
  };

  return (
    <video
      onClick={onVideoPress}
      className="video-card__video"
      src={url}
      alt="IG reel video"
      loop
    />
  );
}

export default Video;
