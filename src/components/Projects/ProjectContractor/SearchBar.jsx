import React from "react";

export default function SearchBar() {
  return (
    <div>
      <form className="w-150 rounded-lg">
        <input
          className="w-full h-full p-3 border border-black/20 rounded-lg outline-none focus:border-black/50 "
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search by Project name/type/location"
        />
      </form>
    </div>
  );
}
