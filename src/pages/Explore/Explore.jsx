import { useContext, useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import Video from "../../components/cards/Video/Video";
import { VideosContext } from "../../contexts/VideosContext";
import "./Explore.css";

export default function Explore() {
  const [searchInput, setSearchInput] = useState("");
  const { videosState } = useContext(VideosContext);

  let filteredVideos = videosState ?? [];

  const match = (title, searchInput) =>
    title.split(" ").some((word) => word.startsWith(searchInput));

  if (searchInput !== "") {
    filteredVideos = filteredVideos.filter(({ title }) =>
      match(title.toLowerCase(), searchInput.toLowerCase())
    );
  }

  return (
    <div>
      <h1>Explore</h1>
      <SearchBar setSearchInput={setSearchInput} />
      <div className="flex-wrap">
        {filteredVideos.map((video) => (
          <Video key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
