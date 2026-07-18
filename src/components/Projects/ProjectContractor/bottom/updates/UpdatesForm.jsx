import { X, Loader } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecentUpdates } from "../../../../../redux/features/projectsSlice";

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
    dispatch(setRecentUpdates(updatesInputData));
  }

  console.log(recentUpdates);
  function handleInputData(targetElem) {
    setupdatesInputData((prev) => {
      return { ...prev, [targetElem.name]: targetElem.value };
    });
  }
  console.log(updatesInputData);
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] rounded-lg z-60">
      <div className="flex  justify-center items-center h-full w-full ">
        <form
          className="w-[30%] h-[55%] bg-[#14202e] relative text-white p-4 CPCards flex flex-col items-center"
          onSubmit={(elem) => {
            submitHandler(elem);
          }}
        >
          <div className="w-full h-[20%] flex justify-center items-center">
            <h1 className="text-3xl font-bold">Add New Updates</h1>
          </div>
          <button
            type="button"
            className="absolute top-2 right-2 cursor-pointer active:scale-95"
            onClick={() => setupdatesState(false)}
          >
            <X />
          </button>

          <div className="w-[95%] h-[70%] flex flex-col justify-between">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="update" className="text-white/80">
                Update <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="update"
                id="update"
                placeholder="18 new photos uploaded to skyline villa"
                required
                className="bg-black/30 cursor-text p-3  rounded-lg border border-white/30 outline-none"
                onChange={(elem) => {
                  handleInputData(elem.target);
                }}
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <label htmlFor="updatedBy" className="text-white/80">
                Updated by <span className="text-red-500">*</span>
              </label>
              <select
                name="updatedBy"
                id="updatedBy"
                required
                className="bg-black/30 p-3 rounded-lg border border-white/30 outline-none cursor-pointer"
                onChange={(elem) => {
                  handleInputData(elem.target);
                }}
              >
                <option value="" disabled>
                  Select team member
                </option>
                {teamMembersList.map((items) => {
                  return (
                    <option value={items.UUID} key={items.UUID}>
                      {items.tmName}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="w-full flex flex-col gap-1">
              <label htmlFor="project" className="text-white/80">
                Project <span className="text-red-500">*</span>
              </label>
              <select
                name="project"
                id="project"
                required
                className="bg-black/30 p-3 rounded-lg border border-white/30 outline-none cursor-pointer"
                onChange={(elem) => {
                  handleInputData(elem.target);
                }}
              >
                <option value="" disabled>
                  Select project
                </option>
                {projectsdata.map((items) => {
                  return (
                    <option value={items.projectid} key={items.projectid}>
                      {items.project}
                    </option>
                  );
                })}
              </select>
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
