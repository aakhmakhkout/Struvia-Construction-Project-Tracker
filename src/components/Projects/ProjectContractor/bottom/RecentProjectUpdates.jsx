import {
  EllipsisVertical,
  Plus,
  ClipboardList,
  Trash2,
  CircleEllipsis,
} from "lucide-react";
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
            const date = new Date(items.timestamp);
            const formattedDate = date.toLocaleDateString([], {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            const formattedTime = date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <div
                key={items.updateId}
                className="flex justify-between border-t border-black/10 py-3 "
              >
                <div className="flex gap-5 items-center">
                  <div className=" w-15 h-10 flex items-center justify-center rounded-sm overflow-hidden">
                    {items.type === "project" ? (
                      <img
                        className="w-full h-full bg-black/20 "
                        src={items.coverImg.src}
                        alt={items.coverImg.orginalName}
                      />
                    ) : items.type === "tasks" ? (
                      <div className=" w-full h-full flex justify-center items-center bg-black/10">
                        <ClipboardList size={30} strokeWidth={1.25} />
                      </div>
                    ) : items.type === "album" ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          className="w-12 h-10 rounded-lg"
                          src={items.coverImg.src}
                          alt={items.coverImg.orginalName}
                        />
                      </div>
                    ) : items.type === "other" ? (
                      <div className=" w-full h-full flex justify-center items-center bg-black/10">
                        <CircleEllipsis size={30} strokeWidth={1.5} />
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <h1 className="font-bold">{`New ${
                      items.type === "project"
                        ? `Project Created | \"${items.label}\"`
                        : items.type === "tasks"
                          ? `Task Added | \"${items.label}\"`
                          : items.type === "album"
                            ? `Album Created \"${items.label}\"`
                            : items.type === "other"
                              ? items.label
                              : null
                    }`}</h1>
                    <div className="flex gap-5 text-sm text-black/70">
                      <h3>
                        {items.type === "project"
                          ? items.location
                          : items.type === "album" || items.type === "tasks"
                            ? PName?.project
                            : items.type === "other"
                              ? items.subHeading
                              : null}
                      </h3>
                      <p>|</p>
                      <div className="flex gap-3">
                        <p>{formattedDate}</p>
                        <p>{formattedTime}</p>
                      </div>
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
            className="bg-[#dedaf29e] flex w-50 h-12 cursor-pointer justify-center items-center gap-2 rounded-xl border border-dashed border-[#0000ff5c] active:scale-95 hover:bg-[#d4ccfbc8] transition-all ease-in"
            onClick={() => {
              setupdatesState(true);
            }}
          >
            <div className="text-[#7745a7]">
              <Plus size={30} strokeWidth={1.5} />
            </div>
            <h1 className="text-xl text-[#7745a7]">Add Update</h1>
          </button>
        </div>
      )}
      {updatesLength > 6 && endIdx !== updatesLength ? (
        <button
          className="flex w-full justify-center items-center py-2 rounded-lg bg-[#7845a7] text-white  hover:bg-[#7b1cd5]  cursor-pointer active:scale-95 font-bold"
          onClick={() => {
            const increment =
              updatesLength - endIdx > 6 ? 6 : updatesLength - endIdx;
            setendIdx((prev) => prev + increment);
            console.log(endIdx, updatesLength);
          }}
        >
          Load More
        </button>
      ) : updatesLength !== 0 ? (
        <h1 className="font-bold text-center border-t border-black/20 pt-2 text-[#ee6767c2]">
          No more updates
        </h1>
      ) : null}
    </div>
  );
};

export default RecentProjectUpdates;
