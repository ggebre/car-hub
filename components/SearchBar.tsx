"use client";
import { SearchManufacturer } from ".";
function SearchBar() {
    const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer />
        </div>
    </form>
  )
}

export default SearchBar