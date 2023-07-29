export function playlistsReducer(state, action) {
  switch (action.type) {
    case "set-playtists":
      return [...action.payload];
    case "add-playlist":
      console.log("hey");
      return [...state, action.payload];
    case "add-video": {
      const playlistId = action.payload.playlistId;
      const videoId = action.payload.videoId;
      const isVideoAlreadyPresent = state
        .find(({ _id }) => _id === playlistId)
        .videos.some((id) => id === videoId);

      if (isVideoAlreadyPresent) {
        return state;
      } else {
        return [
          ...state.map((playlist) =>
            playlist._id === playlistId
              ? { ...playlist, videos: [...playlist.videos, videoId] }
              : playlist
          ),
        ];
      }
    }

    default:
      return state;
  }
}
