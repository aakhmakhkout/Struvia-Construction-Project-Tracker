import { EllipsisVertical, Plus, ClipboardList, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Actions";
import { DeleteAllUpdates } from "../../../../redux/features/updatesSlice";

const RecentProjectUpdates = ({ UpdatesFormstate }) => {
  const { setupdatesState } = UpdatesFormstate;
  const dispatch = useDispatch();
  const updatesData = useSelector((state) => state.updates.recentupdates);
  const projectData = useSelector((state) => state.projects.projectsdata);
  const [endIdx, setendIdx] = useState(6);
  const [recentProjectsIdx, setrecentProjectsIdx] = useState(null);
  const updatesLength = updatesData.length;
  const filteredData = [...updatesData].reverse().slice(0, endIdx);
  console.log(updatesData);

  return (
    <div className="CPCards p-3 w-[50%] min-h-50 max-h-90 flex flex-col gap-5 border RPUD border-black/20 overflow-y-scroll">
      <div className="flex justify-between p-2 items-center">
        <h1 className="font-bold text-xl">Recent Project Updates</h1>
        <button
          className="text-[#e55707] text-sm flex items-center gap-2 cursor-pointer active:scale-95 hover:bg-[#ff00000f] p-2 rounded-lg"
          onClick={() => {
            dispatch(DeleteAllUpdates([]));
          }}
        >
          <div>
            {" "}
            <Trash2 size={15} strokeWidth={1.25} />
          </div>
          <h1>Clear All Updates</h1>
        </button>
      </div>
      {filteredData.length > 0 ? (
        <div className="flex flex-col ">
          {filteredData.map((items, idx) => {
            const PName = projectData.find((items2) => {
              return items.projectid === items2.projectid;
            });
            return (
              <div
                key={items.updateId}
                className="flex justify-between border-t border-black/10 py-3 "
              >
                <div className="flex gap-5 items-center">
                  <div className=" w-15 h-10 flex items-center justify-center rounded-sm overflow-hidden">
                    {items.type === "project" ||
                    items.type === "album" ||
                    items.type === "others" ? (
                      <img
                        className="w-full h-full bg-black/20 "
                        src={items.coverImg.src}
                        alt={items.coverImg.orginalName}
                      />
                    ) : items.type === "tasks" ? (
                      <div className=" w-full h-full flex justify-center items-center">
                        <ClipboardList size={30} strokeWidth={1.25} />
                      </div>
                    ) : items.type === "teams" ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          className="w-10 h-10  rounded-full "
                          src={items.coverImg.src}
                          alt={items.coverImg.orginalName}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <h1 className="font-bold">{`New ${
                      items.type === "project"
                        ? `Project Created \"${items.label}\"`
                        : items.type === "teams"
                          ? `Team Member Added ${items.label}`
                          : items.type === "tasks"
                            ? `Task \"${items.label}\"Added`
                            : items.type === "album"
                              ? `Album Created \"${items.label}\"`
                              : items.type === "other"
                                ? items.label
                                : null
                    }`}</h1>
                    <div className="flex gap-3 text-sm text-black/70">
                      <h3>{PName?.project}</h3>
                      <p>{items.timeStamp}</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <button
                    className="cursor-pointer active:scale-95 hover:bg-black/10 rounded-full p-1"
                    onClick={() => {
                      if (recentProjectsIdx === idx) {
                        setrecentProjectsIdx(null);
                      } else {
                        setrecentProjectsIdx(idx);
                      }
                    }}
                  >
                    <EllipsisVertical size={20} strokeWidth={1.5} />
                  </button>
                  {recentProjectsIdx === idx ? (
                    <Actions state={{ setrecentProjectsIdx }} data={items} />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <button
            className="bg-[#dedaf29e] flex w-55 h-15 cursor-pointer justify-center items-center gap-2 rounded-xl border border-dashed border-[#0000ff5c] active:scale-95 hover:bg-[#d4ccfbc8] transition-all ease-in"
            onClick={() => {
              setupdatesState(true);
            }}
          >
            <div className="text-[#7745a7]">
              <Plus size={35} strokeWidth={1.5} />
            </div>
            <h1 className="font-bold text-xl text-[#7745a7]">Add Update</h1>
          </button>
        </div>
      )}
      {updatesLength > 6 && endIdx <= updatesLength ? (
        <button
          className="flex w-full justify-center items-center py-2 rounded-lg bg-black/10 border border-black/10 cursor-pointer active:scale-95"
          onClick={() => {
            const increment = updatesLength - endIdx;
            setendIdx((prev) => prev + increment);
          }}
        >
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default RecentProjectUpdates;
