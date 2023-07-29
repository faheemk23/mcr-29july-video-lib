import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistAddModal from "../../components/PlaylistAddModal/PlaylistAddModal";
import { VideosContext } from "../../contexts/VideosContext";
import "./SingleVideo.css";

export default function SingleVideo() {
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);

  const { videosState } = useContext(VideosContext);
  const { videoId } = useParams();

  const currentVideo = videosState?.find(({ _id }) => _id === Number(videoId));

  const { title, src } = currentVideo ?? {};
  return (
    <div>
      <iframe height="450px" width="650px" src={src} frameborder="0"></iframe>
      <div>
        <img
          src="https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687810552/social-media-avatars/avatar4_smzw3v.jpg"
          alt="profile"
          height="50px"
          width="50px"
        />
        <span>{title}</span>
        <span className="material-symbols-outlined pointer">schedule</span>
        <span
          className="material-symbols-outlined pointer"
          onClick={() => setShowAddToPlaylistModal(true)}
        >
          playlist_add
        </span>
        <span class="material-symbols-outlined pointer">edit_note</span>
      </div>
      {showAddToPlaylistModal && (
        <PlaylistAddModal
          setShowAddToPlaylistModal={setShowAddToPlaylistModal}
          showAllPlaylists
          videoId={videoId}
        />
      )}
      <hr />
      <h2>My Notes</h2>
    </div>
  );
}
