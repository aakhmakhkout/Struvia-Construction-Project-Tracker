import React from "react";
import RecentPhotos from "./RecentPhotos";
import PunchListPreview from "./PunchListPreview.jsx";
import TeamonSitepre from "./TeamonSitepre.jsx";

const ExtraInformation = ({ data }) => {
  // console.log("Extra page data = ", data);
  return (
    <div className="mt-5 flex justify-between min-h-60 max-h-70">
      <RecentPhotos />
      <PunchListPreview />
      <div className="w-[20%]">
        <TeamonSitepre teamData={data} />
      </div>
    </div>
  );
};

export default ExtraInformation;
