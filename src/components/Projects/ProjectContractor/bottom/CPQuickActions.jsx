import React, { useState } from "react";
import CreateNewProject from "../Top/CreateNewProject";
import Teams from "../Teams/Teams";
import { Link } from "react-router-dom";
import { LayersPlus, Users, ScrollText, ImageUp } from "lucide-react";

const CPQuickActions = ({ state }) => {
  const { setisNPFO, setisTeamModalOpen, setupdatesState } = state;

  function openCreateNewProject() {
    setisNPFO(true);
  }

  function openTeamModal() {
    setisTeamModalOpen(true);
  }

  function openUpdatesModal() {
    setupdatesState(true);
  }

  const QuickActions = [
    {
      id: 1,
      img: <LayersPlus size={30} strokeWidth={1.5} />,
      label: "Create New Project",
      desc: "Add a new construction project",
      function: openCreateNewProject,
    },
    {
      id: 2,
      img: <Users size={30} strokeWidth={1.5} />,
      label: "Team Members",
      desc: "View and manage team members",
      function: openTeamModal,
    },
    {
      id: 3,
      img: <ScrollText size={30} strokeWidth={1.5} />,
      label: "Add Updates",
      desc: "Add updates related to projects",
      function: openUpdatesModal,
    },
  ];
  return (
    <div className="w-[20%] CPCards p-3 flex flex-col gap-5 border border-black/20">
      <div>
        <h1 className="font-bold text-xl">Quick Actions</h1>
      </div>

      <div className="flex flex-col gap-2">
        {QuickActions.map((items) => {
          return (
            <button
              key={items.id}
              className="flex p-[10px_5px] rounded-lg hover:bg-black/10 cursor-pointer transition-all ease-in"
              onClick={items.function}
            >
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-sm text-[#2c1e3df4]">
                  {items.img}
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold flex">{items.label}</h1>
                  <h3 className="text-sm text-black/70">{items.desc}</h3>
                </div>
              </div>
            </button>
          );
        })}
        <Link
          to="/home/photos"
          className="flex p-[10px_5px] rounded-lg hover:bg-black/10 cursor-pointer transition-all ease-in"
        >
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-sm text-[#2c1e3df4]">
              <ImageUp size={30} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold flex">Upload Photos</h1>
              <h3 className="text-sm text-black/70">
                Upload site photos and updates
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CPQuickActions;
