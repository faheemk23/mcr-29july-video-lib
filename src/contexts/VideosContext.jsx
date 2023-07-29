import { createContext, useEffect, useReducer } from "react";

import { videos } from "../data/videos";
import { playlistsReducer } from "../reducers/playlistsReducer";
import { videosReducer } from "../reducers/videosReducer";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const [videosState, videosDispatch] = useReducer(videosReducer, videos);
  const [playlistsState, playlistsDispatch] = useReducer(playlistsReducer, []);

  useEffect(() => {
    const initialVideos = localStorage.getItem("videos");
    const initialPlaylists = localStorage.getItem("playlists");
    if (!initialVideos) {
      localStorage.setItem("videos", JSON.stringify(videos));
    } else {
      videosDispatch({
        type: "set-videos",
        payload: JSON.parse(initialVideos),
      });
    }
    if (initialPlaylists) {
      playlistsDispatch({
        type: "set-playlists",
        payload: JSON.parse(initialPlaylists),
      });
    }
  }, []);

  return (
    <VideosContext.Provider
      value={{ videosState, videosDispatch, playlistsState, playlistsDispatch }}
    >
      {children}
    </VideosContext.Provider>
  );
};
