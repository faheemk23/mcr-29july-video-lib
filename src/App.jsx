import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import {
  Explore,
  Home,
  PlaylistListing,
  SingleVideo,
  VideoListing,
  WatchLater,
} from "./pages/Pages";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
  return (
    <div className="App">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlistlisting" element={<PlaylistListing />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/videolisting/:categoryId" element={<VideoListing />} />
          <Route path="/singlevideo/:videoId" element={<SingleVideo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
