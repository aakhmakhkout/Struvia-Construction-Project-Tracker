import React from "react";
import SearchBar from "./SearchBar";
import PriorityOptions from "./PriorityOptions";

const TaskTabs = ({ statePro, statePri, data }) => {
  const { selectedProject, setselectedProject } = statePro;

  const { projectsList } = data;
  function handleSelectedProject(elem) {
    setselectedProject(elem.target.value);
  }
  console.log(selectedProject);
  return (
    <div className="h-15 flex gap-10 items-center">
      <div className="border border-black/20  rounded-sm">
        <select
          className="w-full h-full p-[8px_15px] outline-none proDD cursor-pointer"
          name="projectsDropDown"
          id="projectsDropDown"
          onChange={(elem) => {
            handleSelectedProject(elem);
          }}
        >
          <option value="All Projects">All Projects</option>
          {projectsList.map((items) => {
            return (
              <option key={items.projectid} value={items.projectid}>
                {items.project}
              </option>
            );
          })}
        </select>
      </div>

      <PriorityOptions state={statePri} />

      <SearchBar />
    </div>
  );
};

export default TaskTabs;
