import { useContext } from "react";
import { useParams } from "react-router-dom";
import Video from "../../components/cards/Video/Video";
import { VideosContext } from "../../contexts/VideosContext";
import "./SinglePlaylist.css";

export default function SinglePlaylist() {
  const { playlistsState, videosState } = useContext(VideosContext);

  const { playlistId } = useParams();

  const currentPlaylist = playlistsState.find(
    ({ _id }) => _id === Number(playlistId)
  );

  const currentVideos = videosState.filter(({ _id }) =>
    currentPlaylist.videos.some((videoId) => Number(videoId) === _id)
  );

  return (
    <div>
      <h1>{currentPlaylist?.title}</h1>
      <div className="flex-wrap">
        {currentVideos?.map((video) => (
          <Video key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
