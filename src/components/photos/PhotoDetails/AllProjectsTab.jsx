import React from "react";
import { useSelector } from "react-redux";

export default function AllProjectsTab({ proState }) {
  const projectsList = useSelector((state) => state.projects.projectsdata);
  const { selectedProject, setselectedProject } = proState;
  // console.log(selectedProject, setselectedProject);

  // function getSelectedProject(projectID) {
  //   const currentSelectedProject = projectsList.find((items) => {
  //     return items.projectid === projectID;
  //   });
  //   setselectedProject(currentSelectedProject)
  // }
  return (
    <div>
      <div className="border border-black/20  rounded-sm">
        <select
          className="w-full h-full p-[8px_15px] outline-none proDD cursor-pointer"
          name="projectsDropDown"
          id="projectsDropDown"
          onChange={(elem) => {
            // getSelectedProject(elem.target.value);
            setselectedProject(elem.target.value);
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
    </div>
  );
}
