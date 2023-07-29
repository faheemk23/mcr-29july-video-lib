import { useNavigate } from "react-router-dom";
import "./Category.css";

export default function Category({ category: givenCategory }) {
  const navigate = useNavigate();

  const { _id, thumbnail, category } = givenCategory;
  return (
    <div className="pointer" onClick={() => navigate(`/videolisting/${_id}`)}>
      <img src={thumbnail} alt={category} height="138px" width="246px" />
      <div>
        <strong>{category}</strong>
      </div>
    </div>
  );
}
