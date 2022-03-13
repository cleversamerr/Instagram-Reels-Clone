import React from "react";
import VideoCard from "./components/VideoCard";

import "./css/app.css";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
          alt="IG Logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <VideoCard
          channel="Samer A."
          avatarSrc="https://avatars.githubusercontent.com/u/73291969?s=400&u=395eac23ec5c84e1cba65cdff29f3b5adb17d483&v=4"
          song="Industry Baby"
          url="https://vod-progressive.akamaized.net/exp=1647110724~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3988%2F20%2F519943331%2F2424469624.mp4~hmac=bc25741524dd821c5f98493024c3620ed38f2e0b0ec52e2940c7b0afea01cc8d/vimeo-prod-skyfire-std-us/01/3988/20/519943331/2424469624.mp4?filename=pexels-artem-podrez-7049260.mp4&download=1"
          likes={960}
          shares={30}
        />
      </div>
    </div>
  );
}

export default App;
