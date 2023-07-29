import { useParams } from "react-router-dom";
import { categories } from "../../data/categories";

import { useContext } from "react";
import Video from "../../components/cards/Video/Video";
import { VideosContext } from "../../contexts/VideosContext";
import "./VideoListing.css";

export default function VideoListing() {
  const { categoryId } = useParams();

  const { videosState } = useContext(VideosContext);

  const categoryName = categories.find(
    ({ _id }) => _id === categoryId
  )?.category;

  const videoOfCurrentCategory = videosState?.filter(
    ({ category }) => category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div>
      <h1>{categoryName}</h1>
      <div className="flex-wrap">
        {videoOfCurrentCategory?.map((video) => (
          <Video key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
