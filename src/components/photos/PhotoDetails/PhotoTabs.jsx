import { Images } from "lucide-react";
import { useState } from "react";
import PhotosFormModal from "./PhotosFormModal";
import SearchBar from "./Searchbar";
import AllProjectsTab from "./AllProjectsTab";

const PhotoTabs = ({ formState, state, searchState }) => {
  const { isPFMopen, setisPFMopen } = formState;
  return (
    <div className="flex flex-col h-[5%]">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <AllProjectsTab proState={state} />
          <SearchBar state={searchState} />
        </div>

        <div className="flex relative">
          <button
            className="bg-[#e55707] p-[10px_15px] text-white  rounded-lg flex gap-2 items-center cursor-pointer active:scale-95"
            onClick={() => {
              if (!isPFMopen) {
                setisPFMopen(true);
              } else {
                setisPFMopen(false);
              }
            }}
          >
            <div>
              <Images size={20} strokeWidth={1.5} />
            </div>
            <h1>Create Album</h1>
          </button>

          <div className="absolute right-0 top-13 w-100 z-20">
            {isPFMopen && <PhotosFormModal />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoTabs;
