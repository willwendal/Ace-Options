import './Search.css'

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search companies </span>
    </label>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search options"
      name="s"
    />
    <button type="submit" className="search-button">
      Search
    </button>
  </form>
)

export default SearchBar
