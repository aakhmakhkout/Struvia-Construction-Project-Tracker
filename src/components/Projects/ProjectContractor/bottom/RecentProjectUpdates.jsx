import { EllipsisVertical, Plus, ClipboardList } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const RecentProjectUpdates = () => {
  const updatesData = useSelector((state) => state.updates.recentupdates);
  const projectData = useSelector((state) => state.projects.projectsdata);
  console.log(updatesData);
  const filteredData = [...updatesData].reverse();
  return (
    <div className="CPCards p-3 w-[50%] min-h-50 max-h-90 flex flex-col gap-5 border RPUD border-black/20 overflow-y-scroll">
      <div className="flex justify-between p-2">
        <h1 className="font-bold text-xl">Recent Project Updates</h1>
        <button className="text-[#e55707] text-sm">View All Updates</button>
      </div>
      {filteredData.length > 0 ? (
        <div className="flex flex-col ">
          {filteredData.map((items) => {
            const PName = projectData.find((items2) => {
              return items.projectid === items2.projectid;
            });
            console.log(PName);
            return (
              <div
                key={items.updateId}
                className="flex justify-between border-t border-black/10 py-3"
              >
                <div className="flex gap-5 items-center">
                  <div className=" w-15 h-10 flex items-center justify-center rounded-sm overflow-hidden">
                    {items.type !== "tasks" ? (
                      <img
                        className="w-full h-full bg-black/20"
                        src={items.coverImg.src}
                        alt={items.coverImg.orginalName}
                      />
                    ) : (
                      <div className="bg-[#9895dc4c] w-full h-full flex justify-center items-center">
                        <ClipboardList size={30} strokeWidth={1.25} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h1 className="font-bold">{items.label}</h1>
                    <div className="flex gap-3 text-sm text-black/70">
                      <h3>{PName?.project}</h3>
                      <p>{items.time}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button>
                    <EllipsisVertical size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <button className="bg-[#dedaf29e] flex w-55 h-15 cursor-pointer justify-center items-center gap-2 rounded-xl border border-dashed border-[#0000ff5c] active:scale-95 hover:bg-[#d4ccfbc8] transition-all ease-in">
            <div className="text-[#7745a7]">
              <Plus size={35} strokeWidth={1.5} />
            </div>
            <h1 className="font-bold text-xl text-[#7745a7]">Add Update</h1>
          </button>
        </div>
      )}
      <button className="flex w-full justify-center items-center py-2 rounded-lg bg-black/10 border border-black/10 cursor-pointer">
        Load More
      </button>
    </div>
  );
};

export default RecentProjectUpdates;
