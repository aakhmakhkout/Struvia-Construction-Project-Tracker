import React, { useState } from "react";
import TaskPTop from "./Top/TaskPTop";
import TaskTabs from "./TaskDetails/TaskTabs";
import DetailedTasksInformation from "./TaskDetails/DetailedTasksInformation";
import Bottom from "./TaskPriority/Bottom";
import { useSelector } from "react-redux";

const TaskDetails = () => {
  const projectsList = useSelector((state) => state.projects.projectsdata);
  const [selectedProject, setselectedProject] = useState("All Projects");
  const [isNTP, setisNTP] = useState(false);
  return (
    <div>
      <TaskPTop state={{ isNTP, setisNTP }} />
      <TaskTabs
        state={{ selectedProject, setselectedProject }}
        data={{ projectsList }}
      />
      <DetailedTasksInformation />
      <Bottom />
    </div>
  );
};

export default TaskDetails;
