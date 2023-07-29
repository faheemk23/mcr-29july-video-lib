export function videosReducer(state, action) {
  switch (action.type) {
    case "set-videos":
      return [...action.payload];
    case "add-watch-later": {
      const updatedVideos = state.map((video) =>
        video._id === action.payload ? { ...video, watchLater: true } : video
      );
      localStorage.setItem("videos", JSON.stringify(updatedVideos));
      return updatedVideos;
    }
    case "remove-watch-later": {
      const updatedVideos = state.map((video) =>
        video._id === action.payload ? { ...video, watchLater: false } : video
      );
      localStorage.setItem("videos", JSON.stringify(updatedVideos));
      return updatedVideos;
    }
    default:
      return state;
  }
}
