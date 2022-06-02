import VideoHeader from "./VideoHeader";
import Video from "./Video";
import VideoFooter from "./VideoFooter";

function VideoCard({ channel, avatarSrc, song, url, likes, shares }) {
  return (
    <div className="video-card">
      <VideoHeader />
      <Video url={url} />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        likes={likes}
        shares={shares}
      />
    </div>
  );
}

export default VideoCard;
