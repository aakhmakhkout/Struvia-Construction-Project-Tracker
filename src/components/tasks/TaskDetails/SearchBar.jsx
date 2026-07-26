import React from "react";

const SearchBar = () => {
  return (
    <div className="border border-black/20  rounded-sm w-70">
      <form className="w-full h-full">
        <input
          type="text"
          placeholder="Search by Task/Project/Date"
          className="p-[8px_15px] outline-none w-full h-full"
        />
      </form>
    </div>
  );
};

export default SearchBar;
