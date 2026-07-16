import React, { useState } from "react";
import CPTabs from "./CPTabs";
import CPCards from "./CPCards";
import CPPagination from "./CPPagination";
import RecentProjectUpdates from "./RecentProjectUpdates";
import ProjectHealth from "./ProjectHealth";
import CPQuickActions from "./CPQuickActions";
import CreateNewProject from "./CreateNewProject";
import Teams from "./Teams/Teams";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const ContractorProjects = () => {
  const finalProjectData = useSelector((state) => state.projects.projectsdata);
  const projectsLength = finalProjectData.length;
  const [isNPFO, setisNPFO] = useState(false);
  const [status, setstatus] = useState("All Projects");
  console.log(status);
  const [isTeamModalOpen, setisTeamModalOpen] = useState(false);
  const initialIDX = {
    startIDX: 0,
    endIDX: 4,
    currentPage: 1,
  };

  const filteredArr =
    status === "All Projects"
      ? [...finalProjectData]
      : finalProjectData.filter((items) => {
          return items.status === status;
        });
  const [indexes, setIndexes] = useState(initialIDX);
  console.log(indexes);
  const slicedData = filteredArr
    .reverse()
    .slice(indexes.startIDX, indexes.endIDX);
  return (
    <div className="mb-10">
      <div className="flex justify-between h-30 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-sm text-black/60">
            View and Manage all your construction projects
          </p>
        </div>
        <div>
          <button
            className="bg-[#e55707] text-white px-5 py-2.5 rounded-lg font-bold cursor-pointer"
            onClick={() => {
              setisNPFO(true);
            }}
          >
            {" "}
            + New Project
          </button>
        </div>
      </div>

      {isNPFO && <CreateNewProject state={{ setisNPFO }} />}
      {isTeamModalOpen && <Teams state={{ setisTeamModalOpen }} />}
      <div className="flex justify-between items-center">
        <CPTabs tabsState={{ setstatus }} />
        <SearchBar />
      </div>

      <div className="CPCards border border-black/20 px-8  flex flex-col gap-3 mt-2">
        <div>
          <CPCards indexesState={{ indexes }} proData={slicedData} />
        </div>
        <div className="border-t-2 border-black/20 py-3">
          <CPPagination
            indexesState={{ indexes, setIndexes }}
            proLength={projectsLength}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <RecentProjectUpdates />
        <ProjectHealth />
        <CPQuickActions state={{ setisNPFO, setisTeamModalOpen }} />
      </div>
    </div>
  );
};

export default ContractorProjects;
