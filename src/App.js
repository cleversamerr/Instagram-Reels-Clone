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
        <h2 className="app__rights">
          Made With ❤️ By{" "}
          <a href="https://twitter.com/ssadawi__" target="__blank">
            Samer A.
          </a>
        </h2>
      </div>

      <div className="app__videos">
        <VideoCard
          channel="Samer A."
          avatarSrc="https://avatars.githubusercontent.com/u/73291969?s=400&u=395eac23ec5c84e1cba65cdff29f3b5adb17d483&v=4"
          song="Industry Baby"
          url="https://vod-progressive.akamaized.net/exp=1647192129~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1419%2F20%2F507097464%2F2328131478.mp4~hmac=f5012a847f2af817af1db133e7e0e1126263419a1c05c7efa7e5d26d072d8405/vimeo-prod-skyfire-std-us/01/1419/20/507097464/2328131478.mp4?filename=pexels-cottonbro-6673886.mp4&download=1"
          likes={960}
          shares={30}
        />
        <VideoCard
          channel="Samer A."
          avatarSrc="https://avatars.githubusercontent.com/u/73291969?s=400&u=395eac23ec5c84e1cba65cdff29f3b5adb17d483&v=4"
          song="Industry Baby"
          url="https://vod-progressive.akamaized.net/exp=1647192129~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1419%2F20%2F507097464%2F2328131478.mp4~hmac=f5012a847f2af817af1db133e7e0e1126263419a1c05c7efa7e5d26d072d8405/vimeo-prod-skyfire-std-us/01/1419/20/507097464/2328131478.mp4?filename=pexels-cottonbro-6673886.mp4&download=1"
          likes={960}
          shares={30}
        />
        <VideoCard
          channel="Samer A."
          avatarSrc="https://avatars.githubusercontent.com/u/73291969?s=400&u=395eac23ec5c84e1cba65cdff29f3b5adb17d483&v=4"
          song="Industry Baby"
          url="https://vod-progressive.akamaized.net/exp=1647192129~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1419%2F20%2F507097464%2F2328131478.mp4~hmac=f5012a847f2af817af1db133e7e0e1126263419a1c05c7efa7e5d26d072d8405/vimeo-prod-skyfire-std-us/01/1419/20/507097464/2328131478.mp4?filename=pexels-cottonbro-6673886.mp4&download=1"
          likes={960}
          shares={30}
        />
      </div>
    </div>
  );
}

export default App;
