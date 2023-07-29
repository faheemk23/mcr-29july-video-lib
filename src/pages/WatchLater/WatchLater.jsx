import { useContext } from "react";
import Video from "../../components/cards/Video/Video";
import { VideosContext } from "../../contexts/VideosContext";
import "./WatchLater.css";

export default function WatchLater() {
  const { videosState } = useContext(VideosContext);

  const watchLaterVideos = videosState?.filter(({ watchLater }) => watchLater);
  return (
    <div>
      <h1>Watch Later</h1>
      <div className="flex-wrap">
        {watchLaterVideos.map((video) => (
          <Video key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
