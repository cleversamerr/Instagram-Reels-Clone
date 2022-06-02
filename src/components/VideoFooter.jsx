import Ticker from "react-ticker";
import { Button, Avatar } from "@mui/material";
import {
  MusicNote,
  Favorite,
  ModeComment,
  Send,
  MoreHoriz,
} from "@mui/icons-material";

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
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>

      <div className="video-card__footer-actions">
        <div className="video-card__footer-actions--left">
          <Favorite fontSize="large" />
          <ModeComment fontSize="large" />
          <Send fontSize="large" />
          <MoreHoriz fontSize="large" />
        </div>

        <div className="video-card__footer-actions--right">
          <div className="video-card__footer-actions-stat">
            <Favorite />
            <p>{likes}</p>
          </div>

          <div className="video-card__footer-actions-stat">
            <ModeComment />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
