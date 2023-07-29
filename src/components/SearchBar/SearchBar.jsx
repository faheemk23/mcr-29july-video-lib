import "./SearchBar.css";

export default function SearchBar({ setSearchInput }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search video by title"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}
