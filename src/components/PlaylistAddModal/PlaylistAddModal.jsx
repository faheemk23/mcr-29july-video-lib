import { useContext, useState } from "react";
import { VideosContext } from "../../contexts/VideosContext";
import "./PlaylistAddModal.css";

export default function PlaylistAddModal({
  setShowAddToPlaylistModal,
  showAllPlaylists,
  videoId,
}) {
  const [playlistInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { playlistsState, playlistsDispatch } = useContext(VideosContext);

  const validate = () => {};

  const handleFieldChange = (e) => {
    const field = e.target.id;
    setPlaylistInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleBtnCreatePlaylist = () => {
    if (playlistInfo.title !== "" && playlistInfo.description !== "") {
      playlistsDispatch({
        type: "add-playlist",
        payload: {
          _id: playlistsState.length + 1,
          videos: [],
          ...playlistInfo,
        },
      });
    }
  };

  const handleAddToPlaylist = (playlistId, videoId) => {
    playlistsDispatch({ type: "add-video", payload: { videoId, playlistId } });
  };

  console.log(playlistsState);

  return (
    <div className="modal-container">
      <div className="add-to-playlist-modal">
        <span
          className="material-symbols-outlined"
          onClick={() => setShowAddToPlaylistModal(false)}
        >
          close
        </span>
        <h3>Add playlist</h3>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={handleFieldChange} />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" onChange={handleFieldChange} />
        <button onClick={() => handleBtnCreatePlaylist()}>
          Create New Playlist
        </button>

        {showAllPlaylists && (
          <>
            <hr />
            {playlistsState?.map((playlist) => (
              <div
                key={playlist._id}
                onClick={() => handleAddToPlaylist(playlist._id, videoId)}
              >
                {playlist.title}{" "}
                <span class="material-symbols-outlined">close</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
