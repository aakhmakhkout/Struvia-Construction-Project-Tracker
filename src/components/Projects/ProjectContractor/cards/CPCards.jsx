import { EllipsisVertical, Plus } from "lucide-react";
import { useSelector } from "react-redux";
import Actions from "./Actions";
import { useState } from "react";
import supabase from "../../../../lib/supabase";

const CPCards = ({ indexesState, proData, npfoState }) => {
  // const { setisNPFO } = npfoState;
  const { indexes } = indexesState;
  const [isOptionsID, setisOptionsID] = useState(null);

  const cardHeadings = [
    {
      id: 1,
      title: "Project Name",
    },
    {
      id: 2,
      title: "Location",
    },
    {
      id: 3,
      title: "Status",
    },
    {
      id: 4,
      title: "Start Date",
    },
    {
      id: 5,
      title: "End Date",
    },
    {
      id: 6,
      title: "Budget",
    },
    {
      id: 7,
      title: "Team",
    },
    {
      id: 8,
      title: "Actions",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-[2.5fr_1.5fr_1.5fr_1fr_1fr_1.5fr_1.5fr_1fr] border-b-2 border-black/20">
        {cardHeadings.map((items) => {
          return (
            <div key={items.id}>
              <div className="h-15 flex items-center font-bold">
                {items.title}
              </div>
            </div>
          );
        })}
      </div>
      {proData.length > 0 ? (
        <div className="flex flex-col gap-5">
          {proData.map((items, idx) => {
            const teamLength = items.team.length;
            const slicedTM =
              teamLength > 3 ? items.team.slice(0, 3) : items.team;
            return (
              <div
                key={items.projectid}
                className="grid grid-cols-[2.5fr_1.5fr_1.5fr_1fr_1fr_1.5fr_1.5fr_1fr] border border-black/10 h-15 items-center px-3 cursor-pointer rounded-lg hover:bg-[#7c7cfb1c] transition-all ease-in"
              >
                <div className="">
                  <div className="flex gap-2">
                    <div className="flex bg-black/20 w-15 h-10 items-center justify-center rounded-sm overflow-hidden">
                      <img
                        src={items.coverImgObj.src}
                        alt={items.coverImgObj.originalName}
                        className=" w-full h-full"
                      />
                    </div>
                    <div>
                      <h1 className="font-bold capitalize">{items.project}</h1>
                      <div>
                        <h3 className="text-sm text-black/70 capitalize">
                          {items.PType}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col capitalize">
                    <div>{items.location}</div>
                    <div>
                      <h1>India</h1>
                    </div>
                  </div>
                </div>
                <div className="flex w-40">
                  <p
                    className={` p-[5px_20px] rounded-lg font-bold
                    ${
                      items.status === "In Progress"
                        ? "bg-[#f59f0b2a] text-[#f59e0b]"
                        : items.status === "Completed"
                          ? "bg-[#10b98128] text-[#10b981]"
                          : items.status === "On Hold"
                            ? "bg-[#ef444422] text-[#ef4444]"
                            : null
                    }
                          `}
                  >
                    {items.status}
                  </p>
                </div>
                <div>{items.stdate}</div>
                <div>{items.endate}</div>
                <div className="font-bold uppercase">{items.budget}</div>
                <div className="overflow-hidden flex gap-1">
                  {slicedTM.map((tmList) => {
                    return (
                      <img
                        key={tmList.UUID}
                        src={tmList.url}
                        alt={tmList.img}
                        className="w-7 h-7 rounded-full"
                      />
                    );
                  })}
                  {teamLength > 3 ? (
                    <div className="bg-black/10 w-7 h-7 rounded-full flex items-center justify-center text-sm">
                      +{teamLength - 3}
                    </div>
                  ) : null}
                </div>
                <div className="relative flex items-center justify-center">
                  <button
                    className="cursor-pointer hover:bg-[#7c7cfb44] p-1 items-center rounded-full transition-all"
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
                    <Actions
                      state={{ setisOptionsID }}
                      proData={items}
                      supabaseClient={supabase}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <button className="bg-[#dedaf29e] flex flex-col w-60 h-40 cursor-pointer justify-center items-center gap-3 rounded-xl border border-dashed border-[#0000ff5c] active:scale-95 hover:bg-[#d4ccfbc8] transition-all ease-in">
          <div className="text-[#7745a7]">
            <Plus size={35} strokeWidth={1.5} />
          </div>
          <h1 className="font-bold text-xl text-[#7745a7]">Create Project</h1>
          <p className="w-[50%] text-sm text-black/70">
            Click to add a new new project
          </p>
        </button>
      )}
    </div>
  );
};

export default CPCards;
