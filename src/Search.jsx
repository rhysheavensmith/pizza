export default function Search({ handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search For Pizza"
      onChange={handleSearch}
      className="search-input"
    />
  );
}
