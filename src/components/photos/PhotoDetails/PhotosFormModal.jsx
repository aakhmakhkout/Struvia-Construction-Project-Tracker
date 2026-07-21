import { X, Loader } from "lucide-react";
import { setAlbumData } from "../../../redux/features/photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import supabase from "../../../lib/supabase.js";
import { setRecentUpdates } from "../../../redux/features/updatesSlice.js";

const PhotosFormModal = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projects.projectsdata);
  const [albumData, setalbumData] = useState({});
  const [selectedFile, setselectedFile] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  function handleInputChange(targetElem) {
    setalbumData((prev) => {
      return { ...prev, [targetElem.name]: targetElem.value };
    });
  }
  console.log(albumData);

  async function submitHandler(element) {
    element.preventDefault();
    setisLoading(true);
    const albumID = crypto.randomUUID();
    const coverID = crypto.randomUUID();
    const albumImagePath = `projects/${albumData.projectid}/albums/${albumID}/cover/${coverID}-${selectedFile.name}`;
    const { data, error } = await supabase.storage
      .from("struvia-media")
      .upload(albumImagePath, selectedFile);

    if (error) {
      setisLoading(false);
      return;
    }

    const { data: publicUrl } = supabase.storage
      .from("struvia-media")
      .getPublicUrl(data.path);

    const finalAlbumData = {
      ...albumData,
      projectid: albumData.projectid,
      albumid: albumID,
      coverImgObj: {
        coverid: coverID,
        orginalName: selectedFile.name,
        src: publicUrl.publicUrl,
        path: data.path,
      },
    };
    const recentUpdatesObj = {
      updateId: crypto.randomUUID(),
      type: "album",
      projectid: finalAlbumData.projectid,
      coverImg: {
        src: finalAlbumData.coverImgObj.src,
        alt: finalAlbumData.coverImgObj.orginalName,
      },
      label: albumData.label,
      albumId: finalAlbumData.albumid,
      timestamp: Date.now(),
    };
    console.log(finalAlbumData);
    dispatch(setAlbumData(finalAlbumData));
    dispatch(setRecentUpdates(recentUpdatesObj));
    setalbumData({});
    setselectedFile(null);
    setisLoading(false);
  }

  return (
    <div className=" bg-black/20 backdrop-blur-[2px]  flex justify-center items-center rounded-lg CPCards overflow-hidden">
      <form
        className="text-white bg-[#14202e] p-3 w-full flex flex-col gap-3"
        onSubmit={(elem) => {
          submitHandler(elem);
        }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-1 flex-col">
            <label htmlFor="label" className="font-bold text-white/70 ">
              Album Label <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter label"
              value={albumData.label || ""}
              required
              id="label"
              name="label"
              className="outline-none bg-black/30 p-2 rounded-lg border capitalize border-white/20"
              onChange={(elem) => {
                handleInputChange(elem.target);
              }}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="projectid" className="font-bold text-white/70 ">
              Select your project <span className="text-red-500">*</span>
            </label>
            <select
              name="projectid"
              id="projectid"
              value={albumData.projectid || ""}
              className="bg-black/30 p-2 capitalize rounded-lg border border-white/20 w-full"
              required
              onChange={(elem) => {
                handleInputChange(elem.target);
              }}
            >
              <option value="" disabled>
                No project selected
              </option>
              {projectList.map((items) => {
                return (
                  <option key={items.projectid} value={items.projectid}>
                    {items.project}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="uploadImg" className="font-bold text-white/70 ">
            Upload image here <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="uploadImg"
            name="uploadImg"
            required
            accept="image/png, image/jpeg"
            className="bg-black/30 p-2 rounded-lg border border-white/20"
            onChange={(elem) => {
              setselectedFile(elem.target.files[0]);
            }}
          />
        </div>

        <div className="w-full flex justify-center items-center">
          {!isLoading ? (
            <button
              type="submit"
              className="bg-[#7745a7] w-full py-2.5 cursor-pointer font-bold border border-white/20 active:scale-95 CPCards"
            >
              Create Album
            </button>
          ) : (
            <button
              type="submit"
              disabled
              className="bg-[#7745a7] w-full py-2.5 flex justify-center items-center font-bold border border-white/20 active:scale-95 CPCards"
            >
              <Loader
                size={20}
                strokeWidth={1.5}
                className="animate-spin"
              />{" "}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PhotosFormModal;
