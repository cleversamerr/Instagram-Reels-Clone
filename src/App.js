import React, { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { reelsRef } from "./firebase";
import VideoCard from "./components/VideoCard";
import "./css/app.css";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    onSnapshot(reelsRef, ({ docs }) =>
      setReels(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

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
        {reels.map((reel) => (
          <VideoCard
            key={reel.id}
            channel={reel.channel}
            avatarSrc={reel.avatarSrc}
            song={reel.song}
            url={reel.url}
            likes={reel.likes}
            shares={reel.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
