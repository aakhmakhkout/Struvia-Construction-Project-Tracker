import { useSelector } from "react-redux";
import { EllipsisVertical, Plus } from "lucide-react";
import { useState } from "react";
import Actions from "./Actions";

const PhotoCards = ({ formState }) => {
  const { isPFMopen, setisPFMopen } = formState;
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
        <button
          className="bg-[#dedaf29e] flex flex-col w-70 h-60 cursor-pointer justify-center items-center gap-3 rounded-xl border border-dashed border-[#0000ff5c] active:scale-95 hover:bg-[#d4ccfbc8] transition-all ease-in m-3"
          onClick={() => {
            if (!isPFMopen) {
              setisPFMopen(true);
            } else {
              setisPFMopen(false);
            }
          }}
        >
          <div className="text-[#7745a7]">
            <Plus size={48} strokeWidth={1.5} />
          </div>
          <h1 className="font-bold text-xl text-[#7745a7]">Create an Album</h1>
          <p className="w-[50%] text-sm text-center text-black/70">
            Click to create a new Album
          </p>
        </button>
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
