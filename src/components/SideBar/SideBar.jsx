import { useNavigate } from "react-router-dom";

import "./SideBar.css";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pointer" onClick={() => navigate("/")}>
        <span className="material-symbols-outlined">home</span> Home
      </div>
      <div className="pointer" onClick={() => navigate("/explore")}>
        <span className="material-symbols-outlined">explore</span>Explore
      </div>
      <div className="pointer" onClick={() => navigate("/playlistlisting")}>
        <span className="material-symbols-outlined">playlist_add</span>Playlists
      </div>
      <div className="pointer" onClick={() => navigate("/watchlater")}>
        <span className="material-symbols-outlined">schedule</span> Watch Later
      </div>
    </div>
  );
}
