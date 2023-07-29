import { useNavigate } from "react-router-dom";

import "./SideBar.css";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/")}>
        <span class="material-symbols-outlined">home</span> Home
      </div>
      <div onClick={() => navigate("/explore")}>
        <span class="material-symbols-outlined">explore</span>Explore
      </div>
      <div onClick={() => navigate("/playlistlisting")}>
        <span class="material-symbols-outlined">playlist_add</span>Playlists
      </div>
      <div onClick={() => navigate("/watchlater")}>
        <span class="material-symbols-outlined">schedule</span> Watch Later
      </div>
    </div>
  );
}
