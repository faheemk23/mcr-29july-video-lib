import Category from "../../components/cards/Category/Category";
import { categories } from "../../data/categories";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1>Categories</h1>
      <div className="flex-wrap">
        {categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}
