import { EllipsisVertical } from "lucide-react";
import { useSelector } from "react-redux";
import Actions from "./Actions";
import { useState } from "react";
import supabase from "../../../lib/supabase";

const CPCards = () => {
  const finalProjectData = useSelector((state) => state.projects.projectsdata);
  const [isOptionsID, setisOptionsID] = useState(null);
  console.log(finalProjectData);

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
      <div className="grid grid-cols-[2.5fr_1.5fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr] border-b-2 border-black/20">
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

      <div className="flex flex-col gap-5">
        {finalProjectData.map((items, idx) => {
          return (
            <div
              key={items.projectid}
              className="grid grid-cols-[2.5fr_1.5fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr] border border-black/10 h-15 items-center px-3 cursor-pointer rounded-lg hover:bg-[#7c7cfb1c] transition-all ease-in"
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
              <div>{items.status}</div>
              <div>{items.stdate}</div>
              <div>{items.endate}</div>
              <div className="font-bold uppercase">{items.budget}</div>
              <div className="overflow-hidden flex gap-1">
                {items.team.map((items) => {
                  return (
                    <img
                      src={items.url}
                      alt={items.img}
                      className="w-7 h-7 rounded-full"
                    />
                  );
                })}
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
    </div>
  );
};

export default CPCards;
