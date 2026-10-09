import React, { useState } from "react";
import Welcome from "../components/dashboard/Top/Welcome.jsx";
import StatusCard from "../components/dashboard/Top/StatusCard.jsx";
import ActivityFeed from "../components/dashboard/ActivityFeed/ActivityFeed.jsx";
import ExtraInformation from "../components/dashboard/Bottom/ExtraInformation.jsx";
import { useSelector } from "react-redux";
import { userData } from "../data/usersData";
// import { getRole } from "../redux/features/authSlice";
import ContractorDashboardData from "../redux/ContractorDashboardData.jsx";

const Dashboard = () => {
  const { projectsdata, navbarProjectId } = useSelector(
    (state) => state.projects,
  );
  const { recentupdates } = useSelector((state) => state.updates);
  const { todoTasks } = useSelector((state) => state.tasks);
  // const role = useSelector((state) => state.auth.role);
  // const current_user = userData.find((items) => {
  //   return items.role === role;
  // });

  // const cw_project =
  //   projectsdata.find((items) => {
  //     return items.client === current_user.email;
  //   }) || {};

  // const filteredData =
  //   projectsdata.length > 0 && navbarProjectId !== "empty"
  //     ? projectsdata.find((items) => {
  //         return items.projectid === navbarProjectId;
  //       })
  //     : {};

  // const contratorPageData = role === "Contractor" ? filteredData : cw_project;
  const contratorPageData = ContractorDashboardData();
  const contractorDashboardUpdates = recentupdates.filter((items) => {
    return items.projectid === contratorPageData?.projectid;
  });
  const contractorDashboardTasks = todoTasks.filter((items) => {
    return items.PName === contratorPageData?.projectid;
  });
  // const contractorDashboardPhotos = todoTasks.filter((items) => {
  //   return items.projectid === contractorDashboardData.projectid;
  // });

  return (
    <div>
      <Welcome location={contratorPageData?.location} />
      <StatusCard data={contratorPageData} />
      <ActivityFeed
        recentActivity={contractorDashboardUpdates}
        projectCover={contratorPageData?.coverImgObj}
        upcomingTasks={contractorDashboardTasks}
      />
      <ExtraInformation data={contratorPageData} />
    </div>
  );
};

export default Dashboard;
