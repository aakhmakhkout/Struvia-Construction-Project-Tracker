import { useSelector } from "react-redux";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import Actions from "./Actions";

const PhotoCards = () => {
  const albumdata = useSelector((state) => state.photos.albumdata);
  const projectData = useSelector((state) => state.projects.projectsdata);
  const albumDataCopy = [...albumdata];

  const [isOptionsID, setisOptionsID] = useState(null);

  console.log(albumdata);
  const photosLength = 20;
  const albumsLength = albumdata.length;
  return (
    <div className="h-[95%] mt-5 border border-black/20 CPCards">
      {albumsLength < 1 ? (
        <div className="flex w-full h-full justify-center items-center bg-black/20 font-bold rounded-[10px]">
          <div>icon</div>
          <h1>Create an Album</h1>
          <p>Create new Album here</p>
        </div>
      ) : (
        <div className=" h-full gap-3 p-2 grid grid-cols-4 place-content-between place-items-center">
          {albumDataCopy.reverse().map((items, idx) => {
            const project = projectData.find((projectItems) => {
              return items.projectid === projectItems.projectid;
            });
            return (
              <div
                key={items.albumid}
                className="CPCards w-90 h-80 bg-[#ececfa] border border-black/20 relative"
              >
                <div className="w-full h-50 ">
                  <img
                    src={items.coverImgObj.src}
                    alt={items.coverImgObj.originalName}
                    className="w-full rounded-t-lg h-full object-cover object-center"
                  />
                </div>

                <div className="p-2">
                  <h1 className="font-bold text-xl capitalize">
                    {items.label}
                  </h1>
                  <div></div>
                  <h2 className="text-black/70 capitalize">
                    {project?.project}
                  </h2>
                </div>

                <div className="flex items-center justify-between p-2 text-sm text-black/70 font-bold">
                  {photosLength > 1 ? (
                    <p>{photosLength} Photos</p>
                  ) : (
                    <p>{photosLength} Photo</p>
                  )}
                  <button
                    className="cursor-pointer hover:bg-black/10 p-1 rounded-full transition-all"
                    onClick={() => {
                      if (isOptionsID === idx) {
                        setisOptionsID(null);
                      } else {
                        setisOptionsID(idx);
                      }
                    }}
                  >
                    <EllipsisVertical size={20} strokeWidth={1.5} id={idx} />
                  </button>
                  {isOptionsID === idx ? (
                    <Actions state={{ setisOptionsID }} albData={items} />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PhotoCards;
