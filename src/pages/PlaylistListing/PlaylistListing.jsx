import { useContext, useState } from "react";
import PlaylistAddModal from "../../components/PlaylistAddModal/PlaylistAddModal";
import Playlist from "../../components/cards/Playlist/Playlist";
import { VideosContext } from "../../contexts/VideosContext";
import "./PlaylistListing.css";

export default function PlaylistListing() {
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const { playlistsState } = useContext(VideosContext);

  console.log({ playlistsState });
  return (
    <div>
      <h1>Playlists</h1>
      <div className="flex-wrap">
        {playlistsState?.map((playlist) => (
          <Playlist key={playlist._id} playlist={playlist} />
        ))}
        <span
          class="material-symbols-outlined pointer"
          onClick={() => setShowAddToPlaylistModal(true)}
        >
          add_circle
        </span>
      </div>

      {showAddToPlaylistModal && (
        <PlaylistAddModal
          setShowAddToPlaylistModal={setShowAddToPlaylistModal}
        />
      )}
    </div>
  );
}
