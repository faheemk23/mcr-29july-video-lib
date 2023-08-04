import { useNavigate } from "react-router-dom";
import "./Playlist.css";

export default function Playlist({ playlist }) {
  const { _id, title, description } = playlist;

  const navigate = useNavigate();
  return (
    <div
      className="playlist-card pointer"
      onClick={() => navigate(`/singleplaylist/${_id}`)}
    >
      <span className="material-symbols-outlined">close</span>
      <img
        src="https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687807015/images/bvxsv9n2e0nsxkn8d1an.webp"
        height="170px"
        width="250px"
        alt="playlist"
      />
      <div>
        <strong>{title}</strong>
      </div>
      <div>{description}</div>
    </div>
  );
}
