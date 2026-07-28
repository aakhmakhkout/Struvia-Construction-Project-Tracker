import React from "react";
import { useSelector } from "react-redux";

export default function AllProjectsTab() {
  const projectsList = useSelector((state) => state.projects.projectsdata);
  return (
    <div>
      <div className="border border-black/20  rounded-sm">
        <select
          className="w-full h-full p-[8px_15px] outline-none proDD cursor-pointer"
          name="projectsDropDown"
          id="projectsDropDown"
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
