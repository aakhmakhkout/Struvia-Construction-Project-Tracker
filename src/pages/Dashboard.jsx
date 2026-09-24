import React from "react";
import Welcome from "../components/dashboard/Top/Welcome.jsx";
import StatusCard from "../components/dashboard/Top/StatusCard.jsx";
import ActivityFeed from "../components/dashboard/ActivityFeed/ActivityFeed.jsx";
import ExtraInformation from "../components/dashboard/Bottom/ExtraInformation.jsx";
import { useSelector } from "react-redux";
import { userData } from "../data/usersData";
// import { getRole } from "../redux/features/authSlice";

const Dashboard = () => {
  const { role } = useSelector((state) => state.auth);
  const projectList = useSelector((state) => state.projects.projectsdata);
  console.log(projectList);
  const current_user = userData.find((items) => {
    return items.role === role;
  });
  console.log(current_user);

  const cw_project = projectList.find((items) => {
    return items.client === current_user.email;
  });

  const project_data = role === "Contractor" ? projectList : cw_project;
  console.log(project_data);
  return (
    <div>
      <Welcome />
      <StatusCard />
      <ActivityFeed />
      <ExtraInformation />
    </div>
  );
};

export default Dashboard;
