import { X, Loader } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecentUpdates } from "../../../../../redux/features/updatesSlice";
export default function UpdatesForm({ state }) {
  const dispatch = useDispatch();
  const { setupdatesState } = state;
  const [isLoading, setisLoading] = useState(false);
  const [updatesInputData, setupdatesInputData] = useState({});
  const teamMembersList = useSelector((state) => state.teams.teamsMembers);
  const { projectsdata, recentUpdates } = useSelector(
    (state) => state.projects,
  );

  function submitHandler(elem) {
    elem.preventDefault();
    const recentUpdatesObj = {
      updateId: crypto.randomUUID(),
      type: "other",
      label: updatesInputData.update,
      subHeading: updatesInputData.subHeading,
      timestamp: Date.now(),
    };
    dispatch(setRecentUpdates(recentUpdatesObj));
    setupdatesInputData({});
  }

  function handleInputData(targetElem) {
    setupdatesInputData((prev) => {
      return { ...prev, [targetElem.name]: targetElem.value };
    });
  }
  console.log(updatesInputData);
  return (
    <div className="absolute w-110 right-80 h-90 -bottom-3 rounded-lg z-60">
      <div className="flex  justify-center items-center h-full w-full ">
        <form
          className="w-full h-full bg-[#14202e] relative text-white p-4 CPCards flex flex-col items-center justify-around"
          onSubmit={(elem) => {
            submitHandler(elem);
          }}
        >
          <div className="w-full full flex justify-center items-center">
            <h1 className="text-3xl font-bold">Add New Updates</h1>
          </div>
          <button
            type="button"
            className="absolute top-2 right-2 cursor-pointer active:scale-95"
            onClick={() => setupdatesState(false)}
          >
            <X />
          </button>

          <div className="w-full full flex flex-col gap-5">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="update" className="text-white/80">
                Update <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="update"
                id="update"
                value={updatesInputData.update || ""}
                placeholder="18 new photos uploaded to skyline villa"
                required
                className="bg-black/30 cursor-text p-3  rounded-lg border border-white/30 outline-none"
                onChange={(elem) => {
                  handleInputData(elem.target);
                }}
              />
            </div>

            <div className="flex justify-between">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="subHeading" className="text-white/80">
                  Sub Heading <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subHeading"
                  id="subHeading"
                  placeholder="Project name / location / team member's name"
                  required
                  value={updatesInputData.subHeading || ""}
                  className="bg-black/30 cursor-text p-3  rounded-lg border border-white/30 outline-none"
                  onChange={(elem) => {
                    handleInputData(elem.target);
                  }}
                />
              </div>
            </div>

            <div className="w-full flex justify-center items-end">
              {!isLoading ? (
                <button
                  type="submit"
                  className="bg-[#7745a7] w-full py-3 cursor-pointer font-bold border border-white/20 active:scale-95 CPCards"
                >
                  Add Update
                </button>
              ) : (
                <button
                  type="submit"
                  disabled
                  className="bg-[#7745a7] w-full py-3 flex justify-center items-center font-bold border border-white/20 active:scale-95 CPCards"
                >
                  <Loader
                    size={20}
                    strokeWidth={1.5}
                    className="animate-spin"
                  />{" "}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
