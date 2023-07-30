import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import PlaylistAddModal from "../../components/PlaylistAddModal/PlaylistAddModal";
import Video from "../../components/cards/Video/Video";
import { VideosContext } from "../../contexts/VideosContext";
import "./SingleVideo.css";

export default function SingleVideo() {
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);

  const { videosState, videosDispatch } = useContext(VideosContext);
  const { videoId } = useParams();

  const currentVideo = videosState?.find(({ _id }) => _id === Number(videoId));

  const { title, src, notes, watchLater } = currentVideo ?? {};

  const handleAddToWatchLater = () => {
    videosDispatch({ type: "add-watch-later", payload: Number(videoId) });
  };

  const handleRemoveFromWatchLater = () => {
    videosDispatch({ type: "remove-watch-later", payload: Number(videoId) });
  };
  return (
    <div className="single-video-page">
      <div className="single-video-page-left">
        <iframe height="450px" width="650px" src={src} frameborder="0"></iframe>
        <div>
          <img
            src="https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687810552/social-media-avatars/avatar4_smzw3v.jpg"
            alt="profile"
            height="50px"
            width="50px"
          />
          <span>{title}</span>
          {watchLater ? (
            <span
              className="material-symbols-outlined single-video-remove-watch-later"
              onClick={handleRemoveFromWatchLater}
            >
              schedule
            </span>
          ) : (
            <span
              className="material-symbols-outlined "
              onClick={handleAddToWatchLater}
            >
              schedule
            </span>
          )}
          <span
            className="material-symbols-outlined pointer"
            onClick={() => setShowAddToPlaylistModal(true)}
          >
            playlist_add
          </span>
          <span
            class="material-symbols-outlined pointer"
            onClick={() => setShowAddNoteModal(true)}
          >
            edit_note
          </span>
        </div>
        {showAddToPlaylistModal && (
          <PlaylistAddModal
            setShowAddToPlaylistModal={setShowAddToPlaylistModal}
            showAllPlaylists
            videoId={videoId}
          />
        )}
        {showAddNoteModal && (
          <AddNoteModal
            setShowAddNoteModal={setShowAddNoteModal}
            videoId={videoId}
          />
        )}
        <hr />
        <h2>My Notes</h2>
        {notes?.map(({ _id, content }) => (
          <div>
            {content}{" "}
            <span class="material-symbols-outlined pointer">edit</span>
            <span class="material-symbols-outlined pointer">delete</span>
          </div>
        ))}
      </div>
      <div className="single-video-page-right">
        <h2>More videos</h2>
        <div className="more-video-container">
          {videosState.map((video) => (
            <Video key={video} video={video} inMoreVideo />
          ))}
        </div>
      </div>
    </div>
  );
}
