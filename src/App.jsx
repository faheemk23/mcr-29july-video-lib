import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { Explore, Home, PlaylistListing, WatchLater } from "./pages/Pages";

function App() {
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
