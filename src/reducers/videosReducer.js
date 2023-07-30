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
    case "add-note": {
      const note = action.payload.note;
      const videoId = action.payload.videoId;
      const video = state.find(({ _id }) => Number(videoId) === _id);
      if (video.notes) {
        const updatedVideos = state.map((video) =>
          video._id === Number(videoId)
            ? { ...video, notes: [...video.notes, note] }
            : video
        );
        localStorage.setItem("videos", JSON.stringify(updatedVideos));
        return updatedVideos;
      } else {
        const updatedVideos = state.map((video) =>
          video._id === Number(videoId) ? { ...video, notes: [note] } : video
        );
        localStorage.setItem("videos", JSON.stringify(updatedVideos));
        return updatedVideos;
      }
    }
    default:
      return state;
  }
}
