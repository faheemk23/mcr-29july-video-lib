import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VideosContext } from "../../../contexts/VideosContext";
import "./Video.css";

export default function Video({ video }) {
  const { _id, title, views, thumbnail, category, creator, watchLater } = video;

  const { videosDispatch } = useContext(VideosContext);

  const navigate = useNavigate();

  const handleAddToWatchLater = (e) => {
    e.stopPropagation();
    videosDispatch({ type: "add-watch-later", payload: _id });
  };

  const handleRemoveFromWatchLater = (e) => {
    e.stopPropagation();
    videosDispatch({ type: "remove-watch-later", payload: _id });
  };

  return (
    <div
      className="video-card pointer"
      onClick={() => navigate(`/singlevideo/${_id}`)}
    >
      <div>
        {watchLater ? (
          <span
            className="material-symbols-outlined remove-watch-later"
            onClick={handleRemoveFromWatchLater}
          >
            schedule
          </span>
        ) : (
          <span
            className="material-symbols-outlined add-watch-later"
            onClick={handleAddToWatchLater}
          >
            schedule
          </span>
        )}
      </div>
      <img src={thumbnail} alt={title} height="174px" width="100%" />
      <div className="video-info">
        <img
          src="https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687810552/social-media-avatars/avatar4_smzw3v.jpg"
          alt="profile"
          height="50px"
          width="50px"
        />
        <div>
          <div>{title}</div>
          <div>{category}</div>
          <div>
            {views} views | {creator}
          </div>
        </div>
      </div>
    </div>
  );
}
