import React, { useState } from "react";
import PhotoTabs from "./PhotoTabs";
import PhotoCards from "./PhotoCards";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const PhotosDetails = () => {
  const albumData = useSelector((state) => state.photos.albumdata);
  const [isPFMopen, setisPFMopen] = useState(false);
  const albumsLength = albumData.length;
  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-[13%] justify-center">
        <h1 className="text-4xl font-bold">Photos</h1>
        <p className="text-black/70">
          View and manage site photos across you projects.
        </p>
      </div>

      <div className="w-full h-[85%] flex flex-col justify-between">
        <div className="h-[93%]">
          <PhotoTabs formState={{ isPFMopen, setisPFMopen }} />
          <PhotoCards formState={{ isPFMopen, setisPFMopen }} />
        </div>

        <div className="h-[4%]">
          <Pagination data={albumsLength} />
        </div>
      </div>
    </div>
  );
};

export default PhotosDetails;
