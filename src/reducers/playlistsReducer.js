export function playlistsReducer(state, action) {
  switch (action.type) {
    case "set-playlists":
      return [...action.payload];
    case "add-playlist": {
      const updatedState = [...state, action.payload];
      localStorage.setItem("playlists", JSON.stringify(updatedState));
      return updatedState;
    }
    case "add-video": {
      const playlistId = action.payload.playlistId;
      const videoId = action.payload.videoId;
      const isVideoAlreadyPresent = state
        .find(({ _id }) => _id === playlistId)
        .videos.some((id) => id === videoId);

      if (isVideoAlreadyPresent) {
        return state;
      } else {
        const updatedState = [
          ...state.map((playlist) =>
            playlist._id === playlistId
              ? { ...playlist, videos: [...playlist.videos, videoId] }
              : playlist
          ),
        ];
        localStorage.setItem("playlists", JSON.stringify(updatedState));
        return updatedState;
      }
    }

    default:
      return state;
  }
}
